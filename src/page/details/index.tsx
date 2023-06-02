import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types";
import axios from "../../service/axios";

const Details = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>();

  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      setProduct(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className="pt-14 px-4">
      <div className="flex-cols lg:flex gap-x-32 justify-center">
        <div className=" shadow-lg rounded-lg ">
          <img
            src={product?.image}
            alt="ima"
            className="h-96 w-full object-cover rounded-lg shadow-lg "
          />
        </div>

        <div>
          <div className="font-Poppins font-bold text-xl text-[#3E4247] py-4">
            {product?.name}
          </div>

          <span className="font-Poppins text-2xl font-bold text-[#5B41FF] py-4">
            ${product?.price}
          </span>

          <p className="font-Poppins  py-4 text-[#3E4247]">
            {product?.description}
          </p>

          <div className="py-2 w-35 md:w-72">
            <Link to="/details">
              <div className="py-2 bg-[#151a24] text-white text-center rounded-xl uppercase font-Poppins">
                Add to bag
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
