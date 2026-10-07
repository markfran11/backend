import express from "express";
import bookRoute from './routes/bookRoute.js';

const app = express();

try{
    const port = 3000;
    app.listen(port,() => {
        console.log(`listening to port ${port}....`);

    })

}catch(e) {
    console.log(e);
}