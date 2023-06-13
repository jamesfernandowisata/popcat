//import logo from './logo.svg';
import React from 'react';
import './Main.css';
import img1 from'./image/default_close2.png';
//import { Link,Route,Routes } from 'react-router-dom';
import {useState} from "react";

function Main() {
  var counter=0;
  const [widget, setWidget] = useState<string[]>([]);
  function handleOnDrag(e: React.DragEvent, widgetType: string){
    
    e.dataTransfer.setData("widgetType",widgetType);
  }
  function handleOnDrop(e:React.DragEvent){
    const widgetType =e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    if(widgetType=='A'){
      counter++;
    }
    else{
      counter--;
    }
  }
  function handleDragOver(e:React.DragEvent){
    e.preventDefault();
    console.log("dragged");
    console.log(counter);
  }

  return (
   <div className='Main'>
      <div className='cat' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <img className='catImg' src={img1}/>
      </div>
      <div 
        className='food'
        draggable
        onDragStart={(e)=>handleOnDrag(e, "A")}
        >
        food A
      </div>
      <div 
        className='food'
        draggable
        onDragStart={(e)=>handleOnDrag(e, "B")}
        >
        food B
      </div>
   </div>
  );
}

export default Main;
