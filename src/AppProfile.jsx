import './App.css';
import Avatar from './component/Avatar';
import Profile from './component/Profile';


function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('Button clicked !')
  };
  return (
    <>
      <button onClick={handleClick}>button</button>
      <Avatar 
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name='James Alexander'
        title='Front-end Developer'
        isNew={true} 
      />
      <Profile 
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Anna Janssen'
        title='Back-end Developer' 
      />
      <Profile 
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob Smith'
        title='UI/UX Designer' 
      />
    </>
  );
}

export default AppProfile;
