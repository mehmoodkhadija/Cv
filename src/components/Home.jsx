import React from "react";
import img from "../assets/img/Bilal.jpg";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm khadija Mehmood
          <span className=" text-brightColor"> MERN Stack </span>
          Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          reprehenderit, quos praesentium iusto earum obcaecati nesciunt.
          Corporis quasi ratione a.
        </p>
        <Button title="HIRE ME" />
      </div>
     
    </div>
  );
};

export default Home;
