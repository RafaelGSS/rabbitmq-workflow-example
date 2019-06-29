const { createConnection } = require('../../connection')
const { sample } = require('lodash')
const uuid = require('uuid/v4')

createConnection()
  .then(conn => conn.createChannel())
  .then(ch => {
    console.log('Channel created!')

    const q = ch.assertQueue('', { exclusive: true })
    
    const correlationId = uuid()
    console.log(' [x] Sending message - correlation: %s', correlationId)
    ch.sendToQueue('rpc_queue', Buffer.from(sample['10', '11', '1']), { 
      replyTo: q.queue, correlationId
    }) 
    ch.consume(q.queue, function (msg) {
      if (msg !== null && msg.properties.correlationId =- correlationId) {
        console.log('[%s] Received: %s', correlationId, msg.content.toString())
      }
    }, { noAck: true })
  })
