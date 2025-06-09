import mongoose from "mongoose";

class Database {
  private DB_URL = "mongodb://localhost:27017/db_portal";

  async createConnection() {
    try {
      await mongoose.connect(this.DB_URL);
      console.log("Conectado ao MongoDB com sucesso.");
    } catch (error) {
      console.error("Erro ao conectar no MongoDB:", error);
    }
  }
}
export default Database;
