import React from "react";
import moon from './moon jpg.png'
import sun from './sun jpg.png'
// import LogicalNot from "./LogicalNot";


const Search = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <input type="text" placeholder="Search" className="border-2 border-orange-400 bg-transparent" />
        <nav>
        <div className="p-3 flex ml-96 items-center">
          <img src={moon} alt="moon jpg" width={35} height={35} id="icon"></img>
          {/* <LogicalNot/> */}
        </div>
      </nav>
      </div>
      
      
    </>
  );
};

export default Search;
