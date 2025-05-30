import { INewsService } from "../contracts/iNewsService";
import { NewsRepository } from "../repository/newsRepository";
import { Result } from "../infra/result";

export class NewsService implements INewsService {
    async get(_id: string): Promise<Result> {
        let result = new Result();
        result.Data = await NewsRepository.findById(_id);
        return result
    }

    async getAll(page: number, qtd: number): Promise<Result> {
        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.countDocuments({});
        result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }
}