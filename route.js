// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const fs=require('fs');
const path = require('path');


// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
//set up notes to read db.json
fs.readFile("db/db.json", "utf8", (error, data))=>{
  if (error) throw error;
}
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  });


  // setup post route
  app.post('/api/notes', (req, res) => {
const addNotes=req.body;
notes.oush (addNotes);
notes.push (addNotes);
updateDb();
return console.log ("added");
  });
};
