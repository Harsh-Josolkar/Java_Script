# APIs

## Ready State APIs
 <image src="../req/ReadyStateApis.png">

 # Fetch API
 <image src="../req/EventLoop.png">
--> A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. <br>
--> A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).<br>-->Instead, a then() handler must check the Response.ok and/or Response.status properties.

--> There is an special Queue to execute the fetch so it has High priority also the queue is called  <b>Priority Queue/Mirco_task Queue</b>.

 <image src="../req/fetchApiWorking.png">
