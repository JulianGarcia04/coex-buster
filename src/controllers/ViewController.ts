import MoviesRepository from "../repository/movies.repository";
import { IController } from "../helpers/interfaces/crud.interface";
import { Request, Response } from "express";

class ViewController implements IController<Request, Response>{

    async getAll(req: Request, res: Response): Promise<void> {
        const movies = await MoviesRepository.getAll();
        res.render('layouts/shop', { movies: movies[1],count: movies[0] });
    }

    async getAllByCategory(req: Request, res: Response): Promise<void> {
        let category: any = req.query.category
        category = parseInt(category)
        const movies = await MoviesRepository.getAllByCategory(category);
        res.render('layouts/shop', { movies: movies });
    }

    async getAllBySearch(req: Request, res: Response): Promise<void> {
        const search = req.query.search
        const movies = await MoviesRepository.getAllBySearch(search);

        res.json(movies);
    }

    async get(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const movie = await MoviesRepository.get(id);
        res.json({ movie: movie });
    }

    async update(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);

        const movie = await MoviesRepository.update(id, req.body);

        res.json(movie);
    }

    async delete(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);

        const movie = await MoviesRepository.update(id, req.body);

        res.json(movie);
    }

    async create(req: Request, res: Response): Promise<void> {

        const movie = await MoviesRepository.create(req.body);

        res.json(movie);
    }


}


export default new ViewController();