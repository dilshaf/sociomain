import express from "express";
import cors from "cors"

const app = express();
const port = 3001; // Use your preferred port

app.use(express.json());
app.use(cors())

// Sample in-memory data storage
let data = [
  { _id: '1', title: 'Item 1', description: 'Description 1' },
  { _id: '2', title: 'Item 2', description: 'Description 2' },
];

// Endpoint to fetch all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Endpoint to create new data
app.post('/api/data', (req, res) => {
  const newData = { ...req.body, _id: String(data.length + 1) };
  data.push(newData);
  res.status(201).json(newData);
});

// Endpoint to update data by ID
app.put('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const index = data.findIndex((item) => item._id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...newData };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

// Endpoint to delete data by ID
app.delete('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const index = data.findIndex((item) => item._id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
