import { Request, Response } from "express"
import { IController } from "../helpers/interfaces/crud.interface"
import usersRepository from "../repository/users.repository"
import bcrypt from "bcrypt";


class LoginController implements IController<Request, Response> {
    
    
    async signIn(req: Request, res: Response): Promise<void> {
        const {email, password} = req.body
        const user = await usersRepository.getEmail(email);
        const result = await bcrypt.compare(password, user.password);
        console.log(result)
        if(!result){
            res.status(401).send("contraseña incorrecta");
            return 
        }
        res.redirect('movies')
    }

    async signUp(req: Request, res: Response): Promise<void> {
        const {id, name, email, password} = req.body
        const data = await usersRepository.create({id, name, email, password})
        res.json(data)
    }
}

export default new LoginController()