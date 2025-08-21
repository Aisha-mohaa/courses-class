import { useState } from "react";
import Navbar from "./navbar";
import img from "../image.png";
import Coursese from "./coursese";
import Footerv from "./footer";

function Home() {
  const [search, setSearch] = useState(""); // state-ka search

  return (
    <>
      <Navbar />
      <div className="bg-blue-950 h-screen text-white">
        <div className="flex justify-between pt-44">
          <div>
            <h1 className="text-2xl">HOYGA XIRFADAHA QARNIGA 21aad</h1>
            <input
              className="rounded-lg w-72 te outline-none px-3 py-2 ml-3 mt-5"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)} // update state
            />
          </div>
          <div>
            <img
              className="w-[500px] h-72 mr-24 mb-8"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="pt-24 pb-3 text-gray-800">
        {/* ... stats cards code sida aad leedahay ... */}
      </div>

      {/* Courses Section */}
      <Coursese search={search} /> {/* search state ku gudbi Coursese */}

      <Footerv />
    </>
  );
}

export default Home;
