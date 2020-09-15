import React, {useEffect, useState} from 'react';
import './App.css';
import { getUser } from "./api/github";
import UserBar from "./UserBar";
import Switcher from "./Switcher";
// const renderLine = (user, key) => <li key={key}><b>{key}</b>:{user[key]}</li>;


function App() {
  const [user, setUser] = useState('');

  useEffect(async () => {
    // getUser('catsheue').then(
    //   data => {setUser( data.entity.name )}
    // )

    const response = await fetch('https://api.github.com/users/catsheue');
    const data = await response.json();
    setUser(data.name);
  }, [])
  return (
    <div className="App">
      <UserBar userName={user} />
      <Switcher />

    </div>
  );
}

export default App;
