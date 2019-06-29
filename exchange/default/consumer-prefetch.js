const { createConnection } = require('../../connection')

createConnection()
  .then(conn => conn.createChannel())
  .then(ch => {
    console.log('Channel created!')

    const queue = 'messages'
    ch.assertQueue(queue, { durable: true })
    // Tells to RabbitMQ to send one message per time
    ch.prefetch(1)
    ch.consume(queue, function (msg) {
      if (msg !== null) {
        console.log('%s Received: %s', new Date(), msg.content.toString())
        ch.ack(msg)
      }
    })
  })
