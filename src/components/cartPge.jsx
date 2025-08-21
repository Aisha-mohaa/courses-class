import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../assets/redux/reducer/counter"; // hubi path saxda
import Cor from "./cour"; // component kaaga item

function Cartpage() {
  const dispatch = useDispatch();
  const items = useSelector((e) => e.cart.items);

  // total price
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[600px] bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">My Cart</h1>

        {items.length === 0 ? (
          <p className="text-gray-500">Cart-kaaga waa zero 😢</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6">
              {items.map((course, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-3">
                  <Cor
                    name={course.name}
                    img={course.img}
                    name2={course.name2}
                    star={course.star}
                    price={course.price}
                    btn="Add Again"
                    onAdd={() => dispatch(addCart(course))}
                  />

                  {/* Remove button */}
                  <button
                    onClick={() => dispatch(removeCart(course.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="mt-6 text-left">
              <p className="text-lg font-semibold">Total Items: {items.length}</p>
              <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cartpage;
