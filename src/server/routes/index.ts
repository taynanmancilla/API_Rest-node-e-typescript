import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello World');
});

router.post('/cidades', CidadesController.create);

// // Rota configurada para responder a requisições POST enviadas para o endpoint /teste.
// router.post('/teste', (req, res) => {
//     console.log(req.body); // Imprime o corpo da requisição no console
//     // return res.send(req.body); // Envia resposta ao cliente
//     return res.json(req.body); // Envia resposta ao cliente convertida em JSON
//     // return res.status(StatusCodes.UNAUTHORIZED).json(req.body); // Codigo de status da reposta como 401(Não autorizado)
// });
// // Rota definida onde ':id' eh um parametro de rota
// // Por exemplo, uma requisição para '/teste2/123' faria com que 123 fosse o valor do parâmetro id.
// router.post('/teste2/:id', (req, res) => {
//     console.log(req.params.id); // Acesso ao valor do parametro da rota
//     return res.json(req.body);
// });
// //  Esta rota está configurada para lidar com parâmetros de consulta (query parameters) e 
// //  responder com dados em formato JSON
// router.post('/teste3', (req, res) => {
//     // Parâmetros de consulta são pares chave-valor que vêm após o ? na URL, exemplo:
//     // usar no navegador: localhost:3333/teste?teste3=valor
//     console.log(req.query.teste3); // valor
//     //return res.send(req.body);     // O cabeçalho Content-Type é definido com base no tipo de resposta.
//     return res.json(req.body);      // O cabeçalho Content-Type como application/json.
// });

export { router }; // Exportando o objeto 'router'