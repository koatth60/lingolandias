import { facebook, instagram, twitter, youtube } from "../assets/export";
const QuoteAndInfo = () => {
  return (
    <div className="font-satoshih-auto max-lg:flex max-md:flex-col justify-between max-md:gap-6">
      <div>
        <h2 className="xl:text-3xl lg:text-xl text-[#23085A] italic mb-2 ">
          Carlemagne-
        </h2>

        <p className="max-lg:text-center flex gap-x-1 xl:text-3xl lg:text-xl">
          <span className="text-yellow-400">"To have another</span>{" "}
          <span className="text-blue-900">language is to posses</span>{" "}
          <span className="text-red-900">a second soul."</span>
        </p>
      </div>
      <div className="lg:flex lg:gap-6 xl:mt-10 lg:mt-5 justify-center items-center">
        <p className="xl:text-2xl lg:text-xl  max-md:text-center">Follow us on:</p>
        <div className="flex gap-3 justify-center">
          <img
            src={facebook}
            alt="facebook"
            className=" text-orange-600 xl:w-[40px] lg:w-[25px] max-lg:w-[40px] transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram"
            className="xl:w-[40px] lg:w-[25px] max-lg:w-[40px] transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"
          />
          <img
            src={twitter}
            alt="twitter"
            className="xl:w-[40px] lg:w-[25px] max-lg:w-[40px] transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"
          />
          <img
            src={youtube}
            alt="twitter"
            className="xl:w-[40px] lg:w-[25px] max-lg:w-[40px] transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteAndInfo;
