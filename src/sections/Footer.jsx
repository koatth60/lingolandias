
const Footer = () => {
  return (
    <section className="bg-[#0C0D0E] text-white py-5 flex max-lg:grid max-lg:grid-cols-2 max-md:px-8 justify-center lg:gap-x-[200px] max-md:gap-x-[146px]">
        <div>
            <h2 className="font-bald text-xl mb-2">Company</h2>
            <ul className="text-sm">
                <li className="hover:text-red-600"><a href="">About us</a></li>
                <li className="hover:text-red-600"><a href="">Test</a></li>
                <li className="hover:text-red-600"><a href="">Cooperation</a></li>
                <li className="hover:text-red-600"><a href="">Contact</a></li>
            </ul>
        </div>

        <div>
            <h2 className="font-bald text-xl mb-2">Courses</h2>
            <ul className="text-sm">
                <li className="hover:text-red-600"><a href="">Beginner</a></li>
                <li className="hover:text-red-600"><a href="">Intermediate</a></li>
                <li className="hover:text-red-600"><a href="">Advanced</a></li>
            </ul>
        </div>
        <div>
            <h2 className="font-bald text-xl mb-2">Our Socials</h2>
            <ul className="text-sm">
                <li className="hover:text-red-600"><a href="">Facebook</a></li>
                <li className="hover:text-red-600"><a href="">Twitter</a></li>
                <li className="hover:text-red-600"><a href="">LinkedIn</a></li>
                <li className="hover:text-red-600"><a href="">Instagram</a></li>
            </ul>
        </div>
        <div className="flex items-center">
            <p className="text-sm">Copyright © 2024 Lingolandias. All rights reserved.</p>
        </div>

    </section>
  )
}

export default Footer