import { Result } from "../infra/result";
import { News } from "../models/news";
import { NewsRepository } from "../repository/newsRepository";
import { INewsService } from "../contracts/iNewsService";
import { injectable } from "tsyringe";

@injectable()
export class NewsService implements INewsService {
    async get(_id: string): Promise<News> {
        let result = await NewsRepository.findById(_id).lean();
        return result as News;
    }

    async getAll(page: number, qtd: number): Promise<Result<News>> {
        let result = new Result<News>();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.countDocuments({});
        result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }
}