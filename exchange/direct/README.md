## Exchange Direct

Exchange Direct is based on __routingKey__, when the Producer send an message, they specify 
a __routingKey__ like: 'critical', and all of consumers that these exchange and that have bind on __routingKey__ 'critial' are able to receive the message.
