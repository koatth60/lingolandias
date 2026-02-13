import { facebook, instagram, twitter, linkedIn } from "../assets/export";

const CollabCards = (props) => {
    const { name, business, description, socials, website } = props.collab;

    
  return (
    <div className="bg-white shadow-xl rounded-lg w-full lg:px-5 px-2 lg:py-4 py-2">
        <h2 className="md:text-3xl text-xl text-[#6a1b9a] font-semibold">{name}</h2>
        <p className="text-[#9c27b0] text-lg font-medium">{business}</p>
        <p className="text-[#9c27b0] text-lg my-3">{description}</p>
        <a  className="text-[#9c27b0] text-lg hover:underline" href={website   }>Website {website}</a>
        <div className="flex w-full justify-end items-center gap-3">
            <a href={socials[0].facebook}>
                <img src={facebook} alt="facebook" className="w-[40px]"/>
            </a>
            <a href={socials[0].twitter}>
                <img src={twitter} alt="twitter" className="w-[40px]" />
            </a>
            <a href={socials[0].linkedin}>
                <img src={linkedIn} alt="linkedin" className="w-[36px]"/>
            </a>
            <a href={socials[0].instagram}>
                <img src={instagram} alt="instagram" className="w-[38px]"/>
                </a>    

        </div>
    </div>
  )
}

export default CollabCards