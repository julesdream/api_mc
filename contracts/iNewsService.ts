import { Result } from "../infra/result";
import { IService } from "./iService";
import { News } from "../models/news";

export interface INewsService extends IService<News> {

}