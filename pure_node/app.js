import http from "http";
import { readFileSync } from "fs";

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      res.writeHead(200);
      const data = readFileSync("index.html");
      res.write(data);
    } else if (req.url === "/raw-html") {
      res.writeHead(200);
      res.write("Welcome!");
    } else if (req.url === "/users") {
      res.writeHead(200);
      const data = readFileSync("data.json");
      res.write(data);
    } else if (req.url === "/index.css") {
      res.writeHead(200);
      const data = readFileSync("index.css");
      res.write(data);
    }
    res.end();
  })
  .listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  });
