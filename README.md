# rabbitmq-workflow-example
Just a example of workflow with Message Brokers like RabbitMQ.

## Run

```sh
docker run -d --hostname my-rabbit --network=gateway --name rabbit13 -p 8080:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3-management
```

And choose your example to run. **producer/consumer**
