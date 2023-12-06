import express from 'express';
import { router } from './routes'; // Importa o objeto 'router' do arquivo de rotas index.js (endpoints)
import 'dotenv/config';

const server = express(); // Cria instancia do express pra configurar o servidor

// adiciona um middleware ao aplicativo Express que analisa corpos de requisições JSON automaticamente e transforma em um objeto JS.
server.use(express.json());

// adiciona o objeto 'router' como um middleware no aplicativo express tornando as rotas e os endpoints acessiveis pelo servidor
server.use(router);

export { server }; // Exporta o servidor express configurado