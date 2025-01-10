import { useState } from "react";



const Kfpws = ({data}) => {
    const [Text,setText] = useState("Виклик")

    const faw = ()=>{


        setText("Відправлено!");
      fetch(`${data.ip}/blink`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
  
        setText("Побачив!");
        setTimeout(()=>{
            setText("Виклик");

        },5000)
      })
      .catch((error) => {

        setText("Не вдалося викликати..."); 
        console.error("Помилка при виконанні запиту:", error);
      });
    }

    return ( 
        <div className="kepf">
            <h1>{data.Ico}</h1>
            <b>{data.Name}</b>
            <button onClick={faw}>{Text}</button>
        </div>
     );
}
 
export default Kfpws;