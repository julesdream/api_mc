import "reflect-metadata";
import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService"
import { VideosService } from "../services/videosService";
import { INewsService } from "../contracts/iNewsService";
import { IVideosService } from "../contracts/iVideosService";
import { IGaleriaService } from "../contracts/iGaleriaService";

container.register<INewsService> ( 
    "INewsService", {
        useClass: NewsService
    }
);

container.register<IVideosService> (
    "IVideosService", {
        useClass: VideosService
    }
);

container.register<IGaleriaService> (
    "IGaleriaService", {
        useClass: GaleriaService
    }
);