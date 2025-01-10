import { useState } from "react";
import Kfpws from "./kfwps";




const Keys = ({users}) => {
    const [Urs,setUsr] = useState(users);
    return ( 
    <div className="Keys">
        {Urs.map((obj,key)=>(
            <Kfpws key={key} data={obj}/>
        ))}
    </div> );
}
 
export default Keys;