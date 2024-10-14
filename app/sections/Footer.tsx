import { AiFillGithub, AiOutlineX, AiFillFacebook, AiFillInstagram } from "react-icons/ai"

export const Footer = () => {

    return (
        <footer className="relative py-8 max-w-[1200px] mx-auto px-4">

            <div className="md:hidden absolute inset-0 overflow-hidden">
                <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] bg-sky-300 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute top-[20%] left-[50%] w-[150px] h-[70px] bg-sky-900 rounded-full opacity-50 transform translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute top-[25%] left-[65%] w-[100px] h-[100px] bg-sky-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
            </div>

            <div className="hidden md:block absolute inset-0 overflow-hidden">
                <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-sky-300 rounded-full opacity-40 transform translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-sky-200 rounded-full opacity-20 transform translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-sky-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
            </div>

            <div className="relative z-10 text-center mt-8">
                <h1 className="hidden md:block lg:text-[15rem] md:text-[12rem] font-bold text-white/10">JOHNDOE</h1>
                <h1 className="md:hidden mb-12 relative text-8xl font-bold text-white/10">JOHNDOE</h1>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-200">
                <div className="space-y-2">
                    <h3 className="font-bold">Contact Me</h3>
                    <p>+89898998</p>
                    <p>john@doe.com</p>
                </div>

                <div className="space-y-2">
                    <h3 className="font-bold">Useful links</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">404 Page</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h3 className="font-bold">Social</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline">Github</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">X</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">LinkedIn</a>
                        </li>
                    </ul>
                </div>

            </div>


            <div className="text-gray-400 mt-12 container flex sm:justify-between justify-center items-center gap-10">
                    <p>
                        © 2024. All rights reserved.
                    </p>

                    <ul className="flex flex-row gap-6">
                        <li>
                            <a href="#"><AiFillGithub size={30} /></a>
                        </li>
                        <li>
                            <a href="#"><AiOutlineX size={30} /></a>
                        </li>
                        <li>
                            <a href="#"><AiFillFacebook size={30} /></a>
                        </li>
                        <li>
                            <a href="#"><AiFillInstagram size={30} /></a>
                        </li>
                    </ul>
                </div>
        </footer>
    )
}