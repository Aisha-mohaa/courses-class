import { useState } from "react";
import car from "../components/cor.png";
import Cor from "./cour";
import { useDispatch } from "react-redux";
import { addCart } from "../assets/redux/reducer/counter";

function Coursese({ search }) {
  const [dataa] = useState([
    { id: 1, name: "Foundemental Softwer", name2: "foundemental softwer", price: 30, star: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Foundemental ICT", name2: "foundemental ICT", price: 20, star: "⭐⭐⭐⭐⭐" },
    { id: 3, name: "Full Stack Developer", name2: "full stack Developer", price: 35, star: "⭐⭐⭐⭐⭐" },
    { id: 4, name: "English", name2: "English", price: 30, star: "⭐⭐⭐⭐⭐" },
    { id: 5, name: "Economic", name2: "Economic", price: 40, star: "⭐⭐⭐⭐⭐" },
    // ... items kale sida hore
  ]);

  const dispatch = useDispatch();

  const filteredData = dataa.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.name2.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-4 gap-6 pl-8 py-6">
      {filteredData.map((course) => (
        <Cor
          key={course.id}
          name={course.name}
          img={car}
          name2={course.name2}
          star={course.star}
          price={course.price}
          btn="Add Cart"
          onAdd={() => dispatch(addCart(course))}
        />
      ))}
    </div>
  );
}

export default Coursese;
