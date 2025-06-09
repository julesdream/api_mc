import { IGaleriaService } from "../contracts/iGaleriaService";
import { Result } from "../infra/result";
import { Galeria } from "../models/galeria";
import { GaleriaRepository } from "../repository/galeriaRepository";
import { injectable } from "tsyringe";

@injectable()
export class GaleriaService implements IGaleriaService {
    async get(_id: string): Promise<Galeria> {
        let result = await GaleriaRepository.findById(_id);
        return result as Galeria;
    }

    async getAll(page: number, qtd: number): Promise<Result<Galeria>> {
        let result = new Result<Galeria>();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await GaleriaRepository.countDocuments({});
        result.Data = await GaleriaRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result
    }
}