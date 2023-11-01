const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head> <title>home</title> </head>");
    res.write(
      '<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="summit"> click </button></form> </body>'
    );
    res.write("</html>");
    return res.end();
  } else if (res.url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const paredbody = Buffer.concat(body).toString();
      const message = paredbody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>first page </title> </head>");
  res.write("<body> <h1>hello from node.js </h1> </body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
