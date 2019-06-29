const { createConnection } = require('../../connection')
const { sample } = require('lodash')

createConnection()
  .then(conn => conn.createChannel())
  .then(ch => {
    console.log('Channel created!')

    const exchange = 'topic_logs'

    ch.assertExchange(exchange, 'topic', { durable: false })

    setInterval(() => {
      const key = sample([
        'kernel.critical',
        'kerner.info',
        'kernel.warning',
        'syslog.critical',
        'syslog.warning',
        'syslog.info',
        'process.critical.application',
        'process.warning.application'
      ])
      console.log(' [x] Sending message [%s]', key)
      ch.publish(exchange, key, Buffer.from('Hello World!'))
    }, 1000)
  })
