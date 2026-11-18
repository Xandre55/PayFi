import express from "express";
import route from "./routers.js";
import {logmiddleware} from "./middlewares.js";
import cookieParser from "cookie-parser";

let app = express();
app.use(express.json());
app.use(cookieParser("Alexander"));
app.use(logmiddleware);
app.use(route);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server1 running at Port ${PORT}`)
})