import React,{useState,useEffect} from "react"
import Button from "../../components/button/button";
import Logo from "../../components/logo/logo";
import Favourite from "../../components/favorite/favorite";
import { RiMovieLine } from "react-icons/ri";

import "./homepage.css"

const Homepage = () => {
  const  [data,setData] = useState([]);
  
  const fetchData = () => {
  fetch(`http://localhost:8080/fetch`)
    .then((response) => response.json())
    .then((data) => {
      setData([data])
     // alert(data);
    }).catch((error)=>{
      console.log(error)
    });
};
  
  useEffect(()=>{
fetchData()
  },[])
  return (
    <div>
    
    {/*  <Button label={"movie"} icon={<RiMovieLine />} type={"primary"} size={"large"}/>
      */}
      <div className="hero_container" style={{
        backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FZ4X2C66Fjv05H626i9w--ZQCAZ6F4p4gw&usqp=CAU)`
      }}>
      <div className="overlay">      <div className="header">
            <Logo/>
      <Favourite/>
      </div></div>
      </div>
    </div>
  );
};

export default Homepage;
