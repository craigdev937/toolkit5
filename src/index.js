import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { contRt } from "./routes/contRt.js";

(async () => {
    const app = express();
    app.use(helmet());
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api", contRt);
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();



