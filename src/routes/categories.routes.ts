import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    // A rota é responsável por receber a requisição, chamar algum servico ou repositorio
    const { name, description } = request.body;

    //tiramos a responsabilidade de rotas de criar um novo repositorio
    // SOLID -> S -> SRP -> Single Reponsability Principle (Principio da responsabilidade unica)
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
}); 

export  { categoriesRoutes };