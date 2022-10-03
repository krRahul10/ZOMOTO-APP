import React from "react";
import "./style.css";
import Fooddata from "./FoodData";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import { useEffect } from "react";

export const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);
  const [copydata, setCopyData] = useState([]);
console.log(copydata)

const changeData = (e)=>{
const searchData = e.toLowerCase()

if(searchData === ""){
  setCopyData(fdata)
}else{
  const filterData = copydata.filter((elem,index) => {
    return elem.rname.toLowerCase().match(searchData)
  })
  setCopyData(filterData)
}
}
  useEffect(() => {
    setTimeout(()=>{
      setCopyData(fdata);
    },3000)
   
  }, []);
  return (
    <div>
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
          srcset=""
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
        />
        <h2 style={{ color: "#1b1464" }}>Search Filter App</h2>
      </div>
      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control type="text" onChange={(e)=>changeData(e.target.value)} placeholder="Search Restaurant" />
        </Form.Group>
        <button
          className="btn text-light col-lg-1"
          style={{ background: "#ed4c67" }}
        >
          Search
        </button>
      </Form>
      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurant in Delhi Open Now
        </h2>
        <div className="row mt-2 d-flex justify-content-center align-items-center">
          { copydata && copydata.length ?   <Cards data={copydata} /> : "Empty Data"}
        
        </div>
      </section>
    </div>
  );
};
