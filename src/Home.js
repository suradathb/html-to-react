import React from "react";
import NewCowcert from "./Components/NewCowcert";
import newcowdams from "./data/NewCowDam";
import {useState} from 'react';

function Home() {
  const [selectNewCowItem, setSelectNewCowItem] = useState('');
  console.log(newcowdams)
  const tattooElements = newcowdams
    .filter((newcowdam) => {
      return newcowdam.name.includes(selectNewCowItem);
    })
    .map((newcowdam, index) => {
      return <NewCowcert key={index} newcowdam={newcowdam} />;
    });
    
  return (
    <>
      {/* <NewCowcert />    */}
      {tattooElements}
    </>
  );
}

export default Home;
