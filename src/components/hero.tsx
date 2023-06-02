import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="relative md:pb-[8em]">
      <img
        className="absolute min-h-screen object-cover w-full -top-[75px] md:-top-[180px] -z-10"
        src="https://res.cloudinary.com/dolzrq2x7/image/upload/v1685598665/storeapp/young-person-wearing-hoodie-mockup_2_zohlk9.png"
        alt="hero"
      />

      <div className="min-h-screen  pl-2 flex flex-col justify-center items-start ">
        <p className="uppercase flex text-[3.5em] font-Poppins font-bold text-white md:text-[#151a24]">
          Hoddie Heaven
        </p>
        <button
          className="py-2 px-4 bg-[#151a24] text-white text-center rounded-xl "
          onClick={navigateToShop}
        >
          <span className="flex items-center font-semibold">
            <BsArrowRightShort />
            <span className="ml-[10] up uppercase">shop now</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
