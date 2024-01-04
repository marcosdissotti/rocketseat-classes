import http from "http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      nome: "Marcos",
      email: "marcos@gmail.com",
    });

    return res.end("Criação de usuário");
  }
  return res.end("Hello World");
});

server.listen(3333);
