const http = require("http");
const express = require("express");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ... 在这里添加其他 Socket.IO 配置

app.use("/socket.io", express.static("node_modules/socket.io-client/dist"));

// ... 在这里设置其他路由和处理程序

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
