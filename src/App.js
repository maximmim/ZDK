import React, { useState } from 'react';
import Keys from './components/keys';

const App = () => {
  const [text, setText] = useState("Викликати всіх");
  const [users,setUser] = useState(
    [
      {
        "Name":"Максим",
        "Ico":"👦🏻",
        "ip":"http://192.168.1.118"
      },
      {
        "Name":"Артем",
        "Ico":"👦🏻",
        "ip":"http://192.168.1.110"
      }
    ]
  );






  const g = () => {
    setText("Виклик...");
    users.map((obg)=>{
      fetch(`${obg.ip}/blink`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data.status);
        
        setText("Всі діти викликані!"); 
        setTimeout(()=>{

          setText("Викликати всіх"); 
        },4000)
      })
      .catch((error) => {

        setText("Не вдалося викликати..."); 
        console.error("Помилка при виконанні запиту:", error);
      });
    })
  };

  return (
    <div className='fwa'>
      <Keys users={users}/>
      <button onClick={g} className='faw'>{text}</button>
    </div>
  );
}

export default App;