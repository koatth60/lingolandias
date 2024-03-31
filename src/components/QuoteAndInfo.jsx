import { facebook, instagram, twitter, youtube} from "../assets/export";
const QuoteAndInfo = () => {
  return (
    <div className="font-mancerllus">
      <h2 className="text-3xl text-[#23085A] italic mb-2 ">Carlemagne-</h2>
      <div className="flex gap-x-1 text-3xl">
        <p className="max-lg:text-center">
          <span className="text-yellow-400">"To have another</span>{" "}
          <span className="text-blue-900">language is to posses</span>{" "}
          <span className="text-red-900">a second soul."</span>
        </p>
      </div>
      <div className="flex gap-6 mt-10 justify-center">
        <p className="text-2xl font-oswald">Follow us on:</p>
        <div className="flex gap-3">
        <img src={facebook} alt="facebook" width={40} className="transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"/>
        <img src={instagram} alt="instagram" width={40} className="transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"/>
        <img src={twitter} alt="twitter" width={40} className="transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"/>
        <img src={youtube} alt="twitter" width={40} className="transition ease-in-out delay-170 hover:scale-[120%] cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default QuoteAndInfo;
