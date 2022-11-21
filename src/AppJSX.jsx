import './App.css';


function AppJSX() {
  const name = 'Younghyun';
  const list = ['milk', 'yogurt', 'banana', 'honey']

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img 
        style={{ width: "200px", height: "200px" }} 
        src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' 
        alt='nature' 
      />
    </>
  );
}

export default AppJSX;
