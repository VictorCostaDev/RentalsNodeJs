import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoryRepository";

// repositorios -> Camada responsavel pela manipulação de dados (Banco de dados)


class CategoriesRepository implements ICategoriesRepository {
    private categories: Array<Category>;  // Aonde vai ficar a conexão com database

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    }

    list(): Array<Category> {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}

export { CategoriesRepository };