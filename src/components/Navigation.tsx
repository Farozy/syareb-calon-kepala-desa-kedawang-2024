import React from "react";
import {FaTimes} from "react-icons/fa";

interface NavigationProps {
    buttonNavbar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({buttonNavbar}) => {
    const listData = [
        {
            name: "Beranda",
            link: "#beranda",
        },
        {
            name: "Visi & Misi",
            link: "#visimisi",
        },
        {
            name: "Program",
            link: "#program",
        },
        {
            name: "Profil",
            link: "#profile",
        },
        {
            name: "Tentang",
            link: "#tentang",
        }
    ];

    return (
        <nav
            className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-2 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-6 mt-3 -ml-2">
                <a className="mr-auto text-xl font-bold leading-none text-gray-700" href="/">
                    Fulana
                </a>
                <button className="navbar-close" onClick={() => buttonNavbar()}>
                    <FaTimes/>
                </button>
            </div>
            <div>
                <ul>
                    <li className="mb-1">
                        {listData.map((item, index) => (
                            <a
                                key={index} href={item.link}
                                className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                onClick={() => buttonNavbar()}
                            >
                                {item.name}
                            </a>
                        ))}
                    </li>
                </ul>
            </div>
            <div className="mt-auto">
                <div className="pt-6">
                    <div
                        className="cursor-text lg:inline-block py-2 px-6 bg-transparent text-gray-900 border-[3px] border-blue-700 font-bold rounded-3xl"
                    >
                        <div className="flex justify-between font-bold">
                            <p>Coblos No. 0</p>
                            <p className="uppercase">Fulana</p>
                        </div>
                    </div>
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                    <span>Copyright ©farozy {new Date().getFullYear()}</span>
                </p>
            </div>
        </nav>
    )
}

export default Navigation;