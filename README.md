
![My Image](diagram.png)
- A complex backend project that I am building for one of my mobile apps written in Flutter.
- I will be using MongoDB as main database and Redis for caching and keeping users online status.
- Indeed I wanted to write everything in Go as a monolith to practise what I learnt at that side, but then I noticed that I need to be a little bit quicker. Node.JS is apparently offers a faster development experience when it comes to build API's.
- That's why I will use Node.JS as main API gateway and will be using Go for a few services.
- I haven't used Go for Websocket server before. So yeah, I will utilise Go for realtime chat functionality to broaden my competence on Go.
- I think I can utilise gRPC for the communication pipeline between api-gateway (NodeJS) and some other services in Go.
- I will also build FCM (notification service) in Go.
