import app from "./app.js";

const PORT = 3001;

const startServer = async () => {
    try {
        await app.listen({ port: PORT }).then(() => {
            console.log(`Servidor iniciado na porta ${PORT}`)
        })

    } catch (err) {
        console.error("Erro ao iniciar o servidor:", err)
    }

};

startServer();
