import express, { request } from 'express';

const app = express();

//http://localhost:3333/users
//Param 1 = Rota
//Param 2 = request,response
app.get("/users", (request, response) => {
  return response.json({message: "Hello World"});
});

app.post("/", (request, response) => {
  return response.json({message: "Dados salvos"});
});

app.listen(3333, () => console.log("Server is running"));