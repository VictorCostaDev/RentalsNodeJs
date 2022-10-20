import { ICategoriesRepository } from "../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

// a classe CreateCategoryService é responsável somente por criar uma categoria
// isso é SRP -> principio da responsabilidade unica
class CreateCategoryService {
     // O services é o alto nível pois está mais perto do domínio
    // Rotas de baixo nível pois está mais perto do usuário
    // services não deve ter nem a response e a request

    constructor(private categoriesRepository: ICategoriesRepository) {} // dependecy inversion e Liskov Substituition

    execute({ name, description }: IRequest): void  {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };