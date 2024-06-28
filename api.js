const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234'
});


const fastify = require('fastify')({
  logger: true
})


// List semua buku
// (1)
// fastify.get('/buku/:search', async function (request, reply) {
//     const buku = await db.query("select * from buku where judul ilike $1", [`%${request.params.search}%`]); 
//     return buku;
// })

// (2)
fastify.get('/buku', async function (request, reply) {
    const buku = await db.query("select * from buku where judul ilike $1", [`%${request.query.search}%`]); 
    return buku;
})


// Detail buku by id
fastify.get('/buku/:id', async function (request, reply) {
    const buku = await db.query("select * from buku where id = $1", [request.params.id]); 
    return buku;
})


// Insert buku
fastify.post('/buku/', async function (request, reply) {
    const { sku, judul, harga, stock } = request.body;
    const buku = await db.query('insert into buku (sku, judul, harga, stock) values ($1, $2, $3, $4) RETURNING *',
        [sku, judul, harga, stock]
    );
    reply.code(200).send('Buku berhasil ditambahkan');
})


// Update / Edit stock buku --> by id --> PUT --> lempar id nya lewat params - stocknya lempar lewat body
fastify.put('/buku/update-stock/:id', async function (request,reply) {

    const buku = await db.query('select * from buku where id = $1', [request.params.id]);

    if (buku.rowCount === 0) {
        return reply.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Buku tidak ditemukan'
        });
    }

    const result = await db.query ('update buku set stock = $1 where id = $2 RETURNING *',
    [
        request.body.stock,
        request.params.id
    ]
    );
    reply.code(200).send('Buku berhasil diupdate');
    
})


// hapus buku --> by id --> DELETE -- id nya lewat params 
fastify.delete('/buku/delete/:id', async function (request, reply) {
    const buku = await db.query('delete from buku where id = $1', [request.params.id]);

    if (buku.rowCount === 0) {
        return reply.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Buku tidak ditemukan'
        });
    }

    reply.code(200).send('Buku berhasil dihapus');

})



fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})

