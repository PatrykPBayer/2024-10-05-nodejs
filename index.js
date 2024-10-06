const fs = require("fs");
const http = require("http");
const url = require("url");

const hostname = "127.0.0.1"; //localHost
const port = 4000; //port, reactowy jest 3000 z reguły, więc ten dla odmiany
const html = fs.readFileSync("./index.html", "utf8");

const DEFAULT_PATH = "/";
const PRODUCT_PATH = "/product";
const CITY_PATH = "/city";

// const txt = fs.readFileSync("./fs.txt", "utf8");
// console.log(txt);

// const newTxt = `New text -> ${txt}`; //"new text ->" + txt"
// fs.writeFileSync("./output.txt", newTxt);

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === DEFAULT_PATH) {
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } else if (path === PRODUCT_PATH) {
    res.setHeader("Content-Type", "application/json");
    const product = { id: 1, name: "Product 1", price: 100 };
    res.end(JSON.stringify(product));
  } else if (path === CITY_PATH) {
    const data = fs.readFileSync(`${__dirname}/data.json`, "utf8");
    const json = JSON.parse(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.end("<h1>404 - Ni ma strony</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
