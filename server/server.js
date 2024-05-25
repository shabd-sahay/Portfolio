import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const formattedData = `${formData.name}, ${formData.lastName}, ${formData.email}, ${formData.phone}, ${formData.message}\n`;

  fs.appendFile('contacts.txt', formattedData, (err) => {
    if (err) {
      console.error('Error writing to contacts.txt:', err);
      res.status(500).send('Error writing to contacts.txt');
    } else {
      console.log('Form data written to contacts.txt');
      res.status(200).send('Form data written to contacts.txt');
    }
  });
});

// The "catchall" handler: for any request that doesn't match, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
