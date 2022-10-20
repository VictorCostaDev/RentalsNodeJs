import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    // injencao de dependencia quando createcategoryUseCase é recebido por parametro
    // e não instanciada dentro da classe evitando assim acoplamento

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });
    
        return response.status(201).send();
    }
}

export { CreateCategoryController };