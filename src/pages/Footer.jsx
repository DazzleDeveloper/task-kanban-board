import {
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaSquarePhone,
} from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

export function Footer() {
  return (
    <div className="mt-10 bg-[#0B1528] max-w-full max-h-max flex justify-between p-4 px-8 py-6 items-start flex-wrap rounded-[5px]">
      <div className="sm: lg:mt-2 md:mt-3">
        <h1 className="text-white font-black text-4xl text-center font-montserrat xs:flex  ">
          Tb
        </h1>
        <div className="text-white flex lg:mt-2 xs:mt-0">
          <span className="w-[40px] h-[40px] bg-indigo-600 hover:bg-indigo-800 rounded-full flex justify-center items-center hover:-translate-y-1 hover:scale-110  duration-300 ... hover:drop-shadow-sm">
            <FaLinkedinIn className="h-[20px] w-[20px] " />
          </span>
          <span className="w-[40px] h-[40px] bg-indigo-600 hover:bg-indigo-800  rounded-full flex justify-center items-center ml-2 hover:-translate-y-1 hover:scale-110  duration-300 ... hover:drop-shadow-sm">
            <FaYoutube className="h-[20px] w-[20px] " />
          </span>
          <span className="w-[40px] h-[40px] bg-indigo-600 hover:bg-indigo-800 rounded-full flex justify-center items-center ml-2 hover:-translate-y-1 hover:scale-110  duration-300 ... hover:drop-shadow-sm">
            <FaGithub className="h-[20px] w-[20px]" />
          </span>
        </div>
      </div>
      <div className="font-montserrat lg:mt-2 xs:mt-5 md:mt-3">
        <h3 className="text-white  font-bold">CONTACT US</h3>
        <div className="text-white lg:mt-2 text-sm xs:mt-0">
          <div className="flex justify-start items-center gap-2">
            {" "}
            <GrMail />
            <h4>brunoty000@gmail.com</h4>
          </div>
          <div className="flex items-center  justify-start gap-2" >
            <FaSquarePhone />
            <h4>+51 943 153 338</h4>
          </div>
        </div>
      </div>
      <div className="sm: xs:mt-5 lg:mt-2 md:mt-3">
        <h3 className="text-white font-montserrat font-bold">SUSCRIBE</h3>
        <div className="mt-2 font-montserrat text-sm xs:mt-0">
          <h4 className="text-white">
            Enter your email to get notfied about <br /> our new solutions
          </h4>
          <form action="" className="">
            <input
              placeholder="Your email?"
              className="mt-2 h-[30px] w-[170px] px-2 rounded-sm lg:mr-3 md:mr-3 sm:mr-3 "
              type="email"
            />

            <button className="text-white bg-indigo-600 rounded-sm  font-semibold h-[30px] w-[75px] hover:bg-indigo-800 ease-out duration-300 xs:mt-2 ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
