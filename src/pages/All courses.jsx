import { useState } from "react";
import Cor from "../components/cour";
import car from "../components/cor.png";
import Footerv from "../components/footer";
import Navbar from "../components/navbar";

function Allcourses() {
  const [category, setCategory] = useState("all");

  const courses = [
    { id: 1, name: "Foundemental Softwer", category: "ict", price: 30, star: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Foundemental ICT", category: "ict", price: 20, star: "⭐⭐⭐⭐⭐" },
    { id: 3, name: "Full Stack Developer", category: "web", price: 35, star: "⭐⭐⭐⭐⭐" },
    { id: 4, name: "English", category: "business", price: 30, star: "⭐⭐⭐⭐⭐" },
    { id: 5, name: "Economic", category: "economic", price: 40, star: "⭐⭐⭐⭐⭐" },
    { id: 6, name: "Business", category: "business", price: 30, star: "⭐⭐⭐⭐⭐" },
    { id: 7, name: "Data Science", category: "data", price: 20, star: "⭐⭐⭐⭐⭐" },
    { id: 8, name: "Cyber Security", category: "ict", price: 50, star: "⭐⭐⭐⭐⭐" },
    { id: 9, name: "Web Developer", category: "web", price: 40, star: "⭐⭐⭐⭐⭐" },
    { id: 10, name: "Software Developers", category: "ict", price: 20, star: "⭐⭐⭐⭐⭐" },
  ];

  // filter garee category
  const filteredCourses =
    category === "all"
      ? courses
      : courses.filter((c) => c.category === category);

  return (
    <>
      <Navbar />
      <div className="flex gap-16">
        {/* Category filter */}
        <div className="text-2xl mt-24 ml-3 space-y-3">
          <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <input
              className="w-8 h-8 accent-blue-500"
              type="radio"
              name="category"
              value="all"
              checked={category === "all"}
              onChange={() => setCategory("all")}
            />
            All
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <input
              className="w-8 h-8 accent-blue-500"
              type="radio"
              name="category"
              value="ict"
              checked={category === "ict"}
              onChange={() => setCategory("ict")}
            />
            ICT
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <input
              className="w-8 h-8 accent-blue-500"
              type="radio"
              name="category"
              value="business"
              checked={category === "business"}
              onChange={() => setCategory("business")}
            />
            Business
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <input
              className="w-8 h-8 accent-blue-500"
              type="radio"
              name="category"
              value="economic"
              checked={category === "economic"}
              onChange={() => setCategory("economic")}
            />
            Economic
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <input
              className="w-8 h-8 accent-blue-500"
              type="radio"
              name="category"
              value="web"
              checked={category === "web"}
              onChange={() => setCategory("web")}
            />
            Web Developers
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <input
              className="w-8 h-8 accent-blue-500"
              type="radio"
              name="category"
              value="data"
              checked={category === "data"}
              onChange={() => setCategory("data")}
            />
            Data Science
          </label>
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-4 gap-6 pl-8 py-6">
          {filteredCourses.map((course) => (
            <Cor
              key={course.id}
              name={course.name}
              img={car}
              name2={course.name}
              star={course.star}
              price={course.price}
              btn="Add Cart"
            />
          ))}
        </div>
      </div>
      <Footerv />
    </>
  );
}

export default Allcourses;
