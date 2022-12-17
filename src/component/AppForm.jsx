import React from 'react';
import { useState } from 'react';

export default function AppForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>name:</label>
      <input type='text' id='name' name='name' value={name} onChange={(e) => {
        setName(e.target.value);
      }}/>
      <label htmlFor='email'>email:</label>
      <input type='email' id='email' name='email' value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}/>
      <button>submit</button>
    </form>
  );
}

