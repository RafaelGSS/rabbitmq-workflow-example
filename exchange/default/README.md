## Queue basic

The **exchanges** make the load balancer of consumers and producer.
```js
channel.sendToQueue('hello', Buffer.from('Hello World!'));
```
**uses default exchange ""** and the messages are routes to the queue with name specified as first parameter.

__Obs: Try up 2 consumers and 1 producer.__