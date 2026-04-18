import {useState} from 'react'

function Say() {
    const[say, setSay]= useState(0)
    const artir = () => {
        setSay(say+1)
    }
    const azalt = () => {
        if (say > 0){

            setSay(say-1)
        }
    }
    
    return (
    <div>
      <button onClick={artir}>Artir</button>
      <h2>{say}</h2>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Say
