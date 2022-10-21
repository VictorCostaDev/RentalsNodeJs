import { parse as csvParse } from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        // recebendo o file do controller

        const stream = fs.createReadStream(file.path);  // stream de leitura
        // criando uma stream do file
        // passando pra stream de leitura qual o caminho do arquivo que sera lido

        const parseFile = csvParse();

        stream.pipe(parseFile);
        // pegar todos os pedaços que serão lidos
        // o pipe pegará os pedaços lidos (chunks) dos arquivos e passa pra dentro do parseFile

        parseFile.on("data", async (line) => {
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase };