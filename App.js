const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to home page");
    return res.end();
  }
  if (req.url === "/about") {
    res.write("Here is our short history");
    return res.end();
  }
  res.end(`
  <h1>Oops<h1>
  <p>Can't find the page you're looking for
  <a href="/">back home </a>
  `);
});

server.listen(5000);
