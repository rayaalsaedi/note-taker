// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const fs = require('fs');
const path = require('path');


// ROUTING

module.exports = app => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  //set up notes to read db.json
  fs.readFile("db/db.json", "utf8", (error, data) => {
    if (error) throw error;
    let notes = JSON.parse(data);
  },
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  }));


  // post route
  app.post('/api/notes', (req, res) => {
    let addNotes = req.body;
    notes.push(addNotes);
    updateConnection();
    return console.log("added");
  });

  // get notes by id
  app.get("/api/notes/:id", function (req, res) {
    res.json(notes[req.para.id]);

  });

  // delete notes by id
  app.delete("/api/notes/:id", function (req, res) {
    notes.splice(req.params.id, 1);
    updateConnection();
  });

  // Show notes.html
  app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"));
  });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

  // When notes added update the json
  function updateConnection() {
    fs.writeFile("db/db.json", JSON.stringify(notes, '/t'), error => {
      if (error) throw error;
      return true;
    });
  }



};


