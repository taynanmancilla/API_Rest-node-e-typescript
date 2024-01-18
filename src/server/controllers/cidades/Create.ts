import { Request, Response } from 'express';

interface ICidade{
    nome: string;
}

// Controller
// Body COM parametros de tipagem
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

    console.log(req.body.nome);

    return res.send('Create!');
};
// Body SEM parametros de tipagem
// export const create = (req:Request, res:Response) => {

//     const data: ICidade = req.body; // pegando o JSON enviado

//     console.log(data.nome);

//     return res.send('Create!');
// };