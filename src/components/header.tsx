import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section  className="px-2">
      <div className="p-4 flex items-start justify-between rounded-[26px] my-[15px] mx-auto bg-[#f5f5f5] backdrop-blur-[10px]">
      <Link to={"/"} className="font-medium font-Poppins">STOREAPP</Link>

      <div className="flex flex-row items-center space-x-[38px] uppercase font-Poppins font-medium">
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/cart"} className="text-xl">
          <HiShoppingBag />
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Header;
