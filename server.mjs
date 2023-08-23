import express from 'express';
import path from 'path'
const app = express();
const port = 5001;
const __dirname = path.resolve();

app.get('/', express.static(path.join(__dirname, "web")))
app.use('/', express.static(path.join(__dirname, "web")))

app.get('/', (req, res) => {
    res.send("hello World!")
})

app.get("/weather", (req, res) => {
    res.send({
        city: "karachi",
        temp_c: 30,
        humidity: 35,
        max_temp_c: 40,
        min_temp_c: 19,
    })
})

app.listen(port, () => {
    console.log('server is started on port:', port);
});
