import express from 'express';
import path from 'path'
const app = express();
const port = 3000;
const __dirname = path.resolve();

console.log(__dirname);
app.use('/', express.static(path.join(__dirname, "web")))

app.get('/', (req, res) => {
    res.send("hello World!")
})

app.get("/weather", (req, res) => {
    res.send("Today Weahter is Good..")
})

app.listen(port, () => {
    console.log('server is started on port:', port);
});
