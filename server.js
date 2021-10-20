const express = require("express");
const path = require("path");
const app = express();
const db = require("./db/db.json")
const generateUUId = require("unique-identifier")
console.log(db)

const PORT = 3000;

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, `./public/index.html`))
})

app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, `./public/notes.html`))
})

app.get("/api/notes/", (req, res)=>{
    res.sendFile(path.join(__dirname, `./db/db.json`))
})

app.post("/api/notes", (req, res)=>{
    console.log(req.body);
    uniqueVal = generateUUId()
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqueVal,
    }
    db.push(newNote)
    console.log(db)
    res.send("Oh Hi! I didn't see you there!")
})

app.listen( PORT, ()=>{
    console.log(`we are working here at ${PORT}`)
})