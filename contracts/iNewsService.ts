import { Result } from "../infra/result";

export interface INewsService {
    get(id: string): Promise<Result>;

    getAll(page: number, qtd: number): Promise<Result>;
}