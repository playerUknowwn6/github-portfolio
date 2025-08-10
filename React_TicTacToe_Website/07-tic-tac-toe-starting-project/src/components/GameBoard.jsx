import { use } from "react"
import { useState } from "react"


export default function GameBoard({onSelectSquare ,gameBoard}){
 
    //const [gameBoard,setGameBoard]=useState(initialGameBoard);

   // function handleSelectSquare(rowIndex, colIndex){
    //setGameBoard((prevGameBoard)=>{
      //  const updatedBoard =[...prevGameBoard.map(innerArray=>[...innerArray])]
        //updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
       // return updatedBoard;
    // )};

    //onSelectSquare();
    //}

    return(
        <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
        {row.map((symbol,colIndex)=>
        <li key={colIndex}>
            <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={symbol!==null}>{symbol}
            </button>
        </li>)}   
        </ol>
        </li>)}
            
        </ol>
    )    
}