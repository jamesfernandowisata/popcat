//import logo from './logo.svg';
import React from 'react';
import './Main.css';
import img1 from './image/default_close2.png';
import img2 from './image/default_open2.png';
import img3 from './image/default_angry.png';
import food1 from './image/Dog_Food.png';
import food2 from './image/Rat.png';
import food3 from './image/Sushi.png';
//import { Link,Route,Routes } from 'react-router-dom';
import {useState} from "react";

function Main() {
  var counter=0;
  const theCat ={img1,img2,img3};
  const [cat, setCat] = useState(theCat.img1);
  function handleOnDrag(e: React.DragEvent, widgetType: string){
    setCat(theCat.img2);
    e.dataTransfer.setData("widgetType",widgetType);

  }
  function handleOnDrop(e:React.DragEvent){
    const widgetType =e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    if(widgetType=='A'){
      counter++;
      setCat(theCat.img1);
    }
    else{
      counter--;
      setCat(theCat.img1);
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
        <img className='catImg' src={cat}/>
      </div>
      <div 
        className='food'
        draggable
        onDragStart={(e)=>handleOnDrag(e, "A")}
        >
        <img className='foodImg' src={food1}/>
      </div>
      <div 
        className='food'
        draggable
        onDragStart={(e)=>handleOnDrag(e, "B")}
        >
        <img className='foodImg' src={food2}/>
      </div>
      <div 
        className='food'
        draggable
        onDragStart={(e)=>handleOnDrag(e, "C")}
        >
        <img className='foodImg' src={food3}/>
      </div>
   </div>
  );
}

export default Main;
