import express from 'express';
import serveStatic from "serve-static";
import { join } from 'path';
app = express();
app.use(serveStatic(join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port);
