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
      <div className="flex-cols lg:flex gap-x-32">
        <div className=" shadow-lg rounded-lg">
          <img
            src="https://res.cloudinary.com/dolzrq2x7/image/upload/v1684744935/storeapp/pink-sweater-front_kbyzjs.jpg"
            alt="ima"
            className="w-full"
          />
        </div>

        <div>
          <div className="font-Poppins font-bold text-xl text-[#3E4247] py-4">
            Pink Sweater
          </div>

          <span className="font-Poppins text-2xl font-bold text-[#5B41FF] py-4">
            $68
          </span>

          <p className="font-Poppins  py-4 text-[#3E4247]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            accusamus autem placeat impedit non amet corporis, labore fugit unde
            veniam molestias illo quisquam tenetur? Ipsum, velit recusandae?
            Doloribus, ad alias.
          </p>

          <div className="py-2 w-35 md:w-72">
            <Link to="/details">
              <div className="py-2 bg-[#151a24] text-white text-center rounded-xl ">
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
