'use client'
import { useRouter } from 'next/router';
// components/RegistrationForm.tsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    const url = new URL("https://valentines-2024-backend.vercel.app/api/v1/love-dates")
    const params = new URLSearchParams({ id: formData.date, title: formData.title, description: formData.description, date: formData.date });

    url.search = params.toString()

    const response = await fetch(url, { method: 'POST' })
    console.log(response)

    router.reload()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Y lo que queda...</h1>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Día:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
