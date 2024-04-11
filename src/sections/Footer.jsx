
import { logofooter } from "../assets/export"
const Footer = () => {
  return (
    <section className="font-satoshi bg-[#9c27b0] text-white py-5 flex max-lg:grid max-lg:grid-cols-2 max-md:px-8 max-xl:px-12 justify-center items-center gap-y-10 md:gap-x-[150px] max-md:gap-x-[60px] border-y-[1px] border-[#4e342e]">
        <div>
            <img src={logofooter} alt="logo footer" width={150} />
        </div>
        <div>
            <h2 className="font-bold text-xl mb-2">Akademia</h2>
            <ul className="text-sm">
                <li className="hover:text-green-700"><a href="">O nas</a></li>
                <li className="hover:text-green-700"><a href="">Test</a></li>
                <li className="hover:text-green-700"><a href="">Metoda</a></li>
                <li className="hover:text-green-700"><a href="/contact">Kontakt</a></li>
            </ul>
        </div>

        <div>
            <h2 className="font-bold text-xl mb-2">Kursy</h2>
            <ul className="text-sm">
                <li className="hover:text-green-700"><a href="/courses">Angielski</a></li>
                <li className="hover:text-green-700"><a href="/courses">Hiszpański</a></li>
                <li className="hover:text-green-700"><a href="/courses">Polski</a></li>
                <li><br /></li>
            </ul>
        </div>
        <div>
            <h2 className="font-bold text-xl mb-2">Społecznościowe</h2>
            <ul className="text-sm">
                <li className="hover:text-green-700"><a href="https://www.facebook.com/lingolandias" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li className="hover:text-green-700"><a href="https://www.instagram.com/lingolandias/?hl=es-es" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li className="hover:text-green-700"><a href="">Twitter</a></li>
                <li className="hover:text-green-700"><a href=""></a>Youtube</li>
            </ul>
        </div>
        <div className="flex items-center">
            <p className="text-sm">Copyright © 2024 | Lingolandias. All rights reserved.</p>
        </div>

    </section>
  )
}

export default Footer