import express, { Application, Request, Response } from "express";
import Database from "./infra/db";

import './shared/container';
import "reflect-metadata";
import videosRouter from "./router/videosRouter";
import newsRouter from "./router/newsRouter";
import galeriaRouter from "./router/galeriaRouter";

class StartUp {
  public app: Application;
  private _db: Database = new Database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  private async init() {
    await this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app
    .route("/")
    .get((req, res) => {
      res.send({ versao: "0.0.2" });
    });

    this.app.use("/", newsRouter)
    this.app.use("/", videosRouter)
    this.app.use("/", galeriaRouter)
    }
}

export default new StartUp();
