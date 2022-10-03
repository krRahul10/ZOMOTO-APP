import React from "react";
import "./style.css";
import Fooddata from "./FoodData";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);

  console.log(fdata);
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
          <Form.Control type="text" placeholder="Search Restaurant" />
        </Form.Group>
        <button className="btn text-light col-lg-1" style={{background:"#ed4c67"}}>Search</button>
      </Form>
    </div>
  );
};
