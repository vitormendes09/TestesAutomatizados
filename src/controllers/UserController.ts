import { Request, Response} from 'express';

import EmailService from '../services/EmailService';
const users = [
    { name: 'Vitor', idade: 22, email: 'vitor@gmail.com'}

]


export default{
    async index(req: Request, res: Response) {
        res.json(users)
    },


    async create(req: Request, res:Response){
        const emailService = new EmailService();

        emailService.sendMail({

            to: {
                name: 'Vitor', 
                email:'vitor@gmail.com'
            },
            
            message: { 
                subject: 'Bem vindo ao sistema', 
                body:'Agora você faz parte do nosso sistema'
            }
    });

    
        res.send('Conseguiu')

    }
};