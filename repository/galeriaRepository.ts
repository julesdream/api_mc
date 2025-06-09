import mongoose from "mongoose";
import { Fotos } from "../models/fotos";
import { Galeria } from "../models/galeria";

const GaleriaSchema = new mongoose.Schema<Galeria>({
  titulo: { type: String },
  texto: { type: String },
  dataPublicacao: { type: Date },
  fotos: [
    {
      thumb: { type: String },
      thumbnail: { type: String },
      credito: { type: String },
      legenda: { type: String }
    }
  ],
  ativo: { type: Boolean }
});

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema, "galeria");
