import { IProduct } from "../../types";
import { useState, useEffect } from "react";
import axios from "../../service/axios";
import { Link } from "react-router-dom";
const Card = () => {
  const [produts, setProduts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProduts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("error a obtener datos", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="px-8 rounded-3xl">
      {!produts ? (
        <h1 className="flex  items-center justify-center text-center font-Poppins text-slate-800 h-screen font-bold text-2xl">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
          {produts.map((product) => (
            <div
              key={product._id}
              className="bg-[#FFFFFF] shadow rounded-2xl px-2"
            >
              <div className="py-2">
                <div className="flex justify-center object-cover ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover  rounded-[2em]"
                  />
                </div>
              </div>

              <div className="py-2">
                <h1 className="font-Poppins font-bold text-xl text-[#3E4247]">
                  {product.name}
                </h1>
                <p className="font-Poppins text-sm text-[#3E4247] truncate">
                  {product.description}
                </p>
              </div>

              <div className="py-2">
                <span className="font-Poppins text-2xl font-bold text-[#5B41FF]">
                  ${product.price}
                </span>
              </div>

              <div className="py-2">
                <Link to="/shop">
                  <div className="py-2 bg-[#151a24] text-white text-center rounded-xl ">
                    Shop now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
