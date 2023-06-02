import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="animate-fade-up">
      <div className="text-center pt-4">
        <span className="font-Poppins font-semibold text-2xl">Storeapp</span>
        <div className="flex justify-center space-x-2  pt-4 text-sm">
          <p className="font-Poppins ">Made with</p>

          <div className="flex space-x-2">
            <AiFillHeart aria-label="heart" className="text-red-400 text-xl" />
            <p className="font-Poppins ">
              <span>in El Salvador.</span>
            </p>
          </div>
        </div>

        <div className="py-3">
          <p className="text-xs  font-Poppins">
            Dugadev | Copyright {year} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
