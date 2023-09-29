import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrudForm() {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [dataList, setDataList] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch initial data from the server
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data'); // Replace with your API endpoint
      setDataList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // Update existing data
      try {
        await axios.put(`http://localhost:3001/api/data/${editId}`, formData);
        setEditId(null);
        fetchData();
        setFormData({ title: '', description: '' });
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      // Create new data
      try {
        await axios.post('http://localhost:3001/api/data', formData);
        fetchData();
        setFormData({ title: '', description: '' });
      } catch (error) {
        console.error('Error creating data:', error);
      }
    }
  };

  const handleEdit = (id) => {
   
    const editData = dataList.find((item) => item._id === id);
    if (editData) {
      setEditId(id);
      setFormData({ title: editData.title, description: editData.description });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <button type="submit">{editId ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {dataList.map((data) => (
          <li key={data._id}>
            {data.title} - {data.description}
            <button onClick={() => handleEdit(data._id)}>Edit</button>
            <button onClick={() => handleDelete(data._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudForm;
