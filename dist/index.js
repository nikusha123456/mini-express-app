import express from "express";
import { myDataSource } from "./config.js";
import { AuthController } from "./controllers/auth.controller.js";
import { configDotenv } from "dotenv";
configDotenv();
myDataSource
    .initialize()
    .then(() => {
    console.log(`Database has been initialized`);
})
    .catch((err) => {
    console.error("Error during Database initialization", err);
});
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/signup", AuthController.signUp);
app.post("/signin", AuthController.signIn);
app.post("/forgot-password", AuthController.forgotPassword);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
