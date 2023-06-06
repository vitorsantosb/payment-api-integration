const http = require("http");
const app = require("./routes/app");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log("[ROUTER] routes is now enabled: " + port + " | " + new Date())
});