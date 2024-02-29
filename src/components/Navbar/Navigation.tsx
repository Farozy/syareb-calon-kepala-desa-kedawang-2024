import React, {useEffect} from "react";
import {FaTimes} from "react-icons/fa";
import Image from "next/image";
import {NavbarFetch} from "@/hooks/useFetch";

interface NavigationProps {
    buttonNavbar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({buttonNavbar}: any) => {
    const [navbar]: any = NavbarFetch();

    return (
        <nav
            className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-2 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-6 -ml-2">
                <a className="mr-auto text-xl font-bold leading-none text-gray-700" href="/">
                    <Image src={"/images/logo.png"} alt={"logo"} width={500} height={500} className={"w-[11%]"} />
                </a>
                <button className="navbar-close" onClick={() => buttonNavbar()}>
                    <FaTimes/>
                </button>
            </div>
            <div>
                <ul>
                    <li className="mb-1">
                        {navbar.map((item: any, index: number) => (
                            <a
                                key={index} href={`#${item.link}`}
                                className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                onClick={() => buttonNavbar()}
                            >
                                {item.title}
                            </a>
                        ))}
                    </li>
                </ul>
            </div>
            <div className="mt-auto">
                <div className="pt-6">
                    <div
                        className="cursor-text lg:inline-block py-2 px-6 bg-transparent text-gray-900 border-[3px] border-blue-400 font-bold rounded-3xl"
                    >
                        <div className="flex justify-between font-bold text-sm">
                            <p>Pilih No. 4</p>
                            <p className="uppercase">Syareb</p>
                        </div>
                    </div>
                </div>
                <p className="my-4 text-xs text-center text-gray-500">
                    <span>Copyright ©Syareb {new Date().getFullYear()}</span>
                </p>
            </div>
        </nav>
    )
}

export default Navigation;