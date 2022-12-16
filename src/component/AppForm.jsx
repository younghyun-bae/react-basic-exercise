import React from 'react';

export default function AppForm() {
  const []
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor='name'>name:</label>
      <input type='text' id='name' name='name' />
      <label htmlFor='email' id='email' name='email' />
      <input type='email' id='email' name='email' />
      <button>submit</button>
    </form>
  );
}

