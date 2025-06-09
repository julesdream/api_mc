import { Request, Response } from "express";
import { VideosService } from "../services/videosService";
import { IVideosService } from "../contracts/iVideosService";
import { injectable, inject } from "tsyringe";

@injectable()
class VideosController {

    constructor(@inject('IVideosService') private _service: IVideosService) {  }

    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;

            const result = await this._service.getAll(page, qtd);
            response.status(200).json({ result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(500).json({ error: error.message });
            } else {
                response.status(500).json({ error: String(error) });
            }
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            const result = await this._service.get(_id);
            response.status(200).json({ result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(500).json({ error: error.message });
            } else {
                response.status(500).json({ error: String(error) });
            }
        }
    }
}

export { VideosController };