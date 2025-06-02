import { Document } from 'mongoose';

export abstract class Core extends Document {
    titulo: string = "";
    texto: string = "";
    imagem: string = "";
    dataPublicacao: Date = new Date();
    tags: string = "";
    link: string = "";
    ativo: boolean = true;
  }