"use strict";

//const config = require("./config");
const server = require("./server");

const startServer = async () => {
    try {
        const config = {
            host: "localhost",
            port: 8080,
            url: 'http://localhost:8080',
            cookiePwd: 'superAwesomePasswordStringThatIsAtLeast32CharactersLong',
            sql: {
                server: 'DANY_PC\\SQLEXPRESS',
                database: 'calendar',
                user: 'sa',
                password: 'BVC12345',
                options: {
                    encrypt: false,
                    enableArithAbort: true
                }
            }
        };

        const app = await server(config);
        await app.start();

        console.log(`Server running at http://${config.host}:http://${config.port}`)
    }
    catch (err) {
        console.log("startup error", err);
    }
};

startServer();