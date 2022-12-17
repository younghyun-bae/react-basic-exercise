import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>Description</p>
      </Card>
      <Card>
        <article>
          <img
            src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' 
            alt='portrait'
            style={{
              width: '100px',
              borderRadius: '50px',
            }}
          />
          <p>Description</p>
        </article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  )
}