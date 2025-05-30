import startUp from "./startUp";

let port = "5000";

startUp.app.listen(port, function (){
    console.log(`Servidor rodando na porta: ${port}`);
});