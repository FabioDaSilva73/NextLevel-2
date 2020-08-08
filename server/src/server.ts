import express from "express";
import routes from "./routes";
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());
//GET: Buscar ou lista uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma nova informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar => /':id'
//Query Parans: Paginação, filtros, ordenação

app.listen(3333);
