
import { useDispatch } from "react-redux";
import { addCart } from "../assets/redux/reducer/counter";

function Cor(props) {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart({
      name: props.name,
      price: props.price,
      img: props.img
    }));
  };

  return (
    <div className="w-96 h-80 bg-white shadow-lg rounded-2xl text-center">
      <div className="flex gap-5 pt-3 pr-3">
        <h1 className="text-2xl mt-3 pl-3 font-semibold">{props.name}</h1>
        <img className="w-38 h-36" src={props.img} alt="" />
      </div>
      <h1 className="text-xl">{props.name2}</h1>
      <hr className="mt-3"/>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-3xl pl-3">${props.price}</h1>
        <button 
          onClick={handleAddCart} 
          className="bg-blue-600 text-white rounded-xl px-6 py-2 mr-3"
        >
          {props.btn}
        </button>
      </div>
    </div>
  );
}

export default Cor;
