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

// Declare a route
// cara 1 --> list semua buku, bisa search
// fastify.get('/buku/:search', async function (request, reply) {
//     const buku = await db.query("select * from buku where judul ilike $1", [`%${request.params.search}%`]); 
//     return buku;
// })

// //cara 2
// fastify.get('/buku', async function (request, reply) {
//     const buku = await db.query("select * from buku where judul ilike $1", [`%${request.query.cari}%`]); 
//     return buku;
// })

fastify.post('/buku', async function (request, reply) {
    const buku = await db.query("select * from buku where judul ilike $1", [`%${request.body.search}%`]); 
    return buku;
})

fastify.post('/', function (request, reply) {
    reply.send({ hello: 'world' }) 
  })

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})


// list semua buku, bisa search by judul, lempar data pake query
// detail buku by id, method yang digunakan GET -> pake params
// insert buku --> POST --> pake body
// update/edit stock buku --> by id --> PUT --> lempar id nya lewat params - stocknya lempar lewat body
// hapus buku --> by id --> DELETE -- id nya lewat params 