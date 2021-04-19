// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const fs = require('fs');
const path = require('path');
const uniqueID = require('uniqid');


// ROUTING

module.exports = app => {
  let notes = require(__dirname + "/./db/db.json");
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  //set up notes to read db.json
  // fs.readFile("db/db.json", "utf8", (error, data) => {
  //   if (error) throw error;
  //   let notes = JSON.parse(data);
  // },
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  });


  // post route
  app.post('/api/notes', (req, res) => {
    let addNotes = req.body;
    addNotes.id = uniqueID();
    notes.push(addNotes);
    // updateConnection();
    fs.writeFile("db/db.json", JSON.stringify(notes), error => {
      if (error) throw error;

    });
    res.end();
  });

  // get notes by id
  // app.get("/api/notes/:id", function (req, res) {
  //   res.json(notes[req.para.id]);

  // });

  // delete notes by id
  app.delete("/api/notes/:id", function (req, res) {
    let filter=notes.filter(function(note){
return note.id !=req.params.id;
    })
    noteData=JSON.stringify(filter)
    notes=filter;
    fs.writeFileSync(__dirname+"/./db/db.json",noteData, function(error){
if (error) throw error;
    })
    res.end();
  });

  // Show notes.html
  app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  // catch all 
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  // When notes added update the json
  function updateConnection() {
    fs.writeFile("db/db.json", JSON.stringify(notes, '/t'), error => {
      if (error) throw error;
      return true;
    });
  }



};


