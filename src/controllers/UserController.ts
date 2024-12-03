import { Request, Response} from 'express';
const users = [
    { name: 'Vitor', idade: 22, email: 'vitor@gmail.com'}

]


export default{
    async index(req: Request, res: Response) {
        res.json(users)
    }
};