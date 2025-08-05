import { useState } from "react"

export default function Player({initialName,symbol,isActive,onChangeName}){
   const [currentPlayerName,setPlayerName]=useState(initialName);
   
   const [isEditing,setIsEditing]=useState(false);
   
   var playernameedit=<span className="player-name">{currentPlayerName}</span>
   
   var EditButton='Edit';
   
   
   function OnEdit(){
    if(isEditing==true){
    onChangeName(symbol,currentPlayerName);
  }

    setIsEditing((editing) => !editing);   
  }
   
   
   function handleChange(event){
    setPlayerName(event.target.value);
    
    }

     const playerNameElement = isEditing ? (
    <input
      type="text"
      required
      value={currentPlayerName}
      onChange={handleChange}
    />
  ) : (
    <span className="player-name">{currentPlayerName}</span>
  );

    return(
          <li className={isActive? 'active':undefined}>
        <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={OnEdit}>{isEditing? 'Save':'Edit'}</button>
        </li>
    )
}