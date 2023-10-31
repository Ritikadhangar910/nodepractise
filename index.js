const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head> <title>home</title> </head>");
    res.write("<body> <h2> home page </h2> </body>");
    res.write("</html>");
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head> <title>home</title> </head>");
    res.write("<body> <h2> about page </h2> </body>");
    res.write("</html>");
  } else {
    res.write("<html>");
    res.write("<head> <title>home</title> </head>");
    res.write("<body> <h2> node page </h2> </body>");
    res.write("</html>");
  }
  res.end();
});
server.listen(4000);
