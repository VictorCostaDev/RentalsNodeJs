import { ISpecificationRepository } from "../repositories/ISpecificationRepository";7

// service vai cuidar das regras de negocios, conectando as routes com as repositories
// Lembre sempre de dar nomes declarativos para as classes
// O nosso service não deve conhecer o tipo de banco de dados que nos iremos usar

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {

    constructor(private specificationsRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }

        this.specificationsRepository.create({name, description});
        // nao sabe o banco de dados que specificationsRepository esta usando
    }
}

export { CreateSpecificationService };