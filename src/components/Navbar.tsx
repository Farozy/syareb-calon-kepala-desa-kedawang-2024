"use client";
import {useEffect, useState} from "react";
import Navigation from "@/components/Navigation";
import {RxHamburgerMenu} from "react-icons/rx";
import React from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrollBackground, setScrollBackground] = useState("");
    const [scrollColor, setScrollColor] = useState("");

    const buttonNavbar = () => {
        setNavbarOpen(prevNavbarOpen => !prevNavbarOpen);
    }
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollBackground('shadow-md bg-gray-700');
            setScrollColor("text-white");
        } else {
            setScrollBackground("shadow-none bg-white");
            setScrollColor("text-gray-700");
        }
    };
    const handleScroller = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('a.navbar');

        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            const element: any = document.querySelector(`a.navbar[href*=${id}]`);

            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove('active');
                    element.classList.add('active');
                });
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroller);
    }, []);

    const listNavbar = [
        {
            title: "Beranda",
            link: "beranda",
        },
        {
            title: "Visi & Misi",
            link: "visimisi"
        },
        {
            title: "Program",
            link: "program"
        },
        {
            title: "Profil",
            link: "profile"
        },
        {
            title: "Tentang",
            link: "tentang"
        }
    ];

    return (
        <>
            {/*<nav className="relative px-4 py-4 flex justify-between items-center shadow-md z-20">*/}
            <nav
                className={`fixed w-full top-0 left-0 px-4 py-2 flex justify-between items-center transition duration-500 ${scrollBackground} z-50`}
            >
                <a className={`text-xl md:text-2xl font-bold leading-none ${scrollColor}`} href="/">
                    Fulana
                </a>
                <div className="lg:hidden">
                    <button className={`navbar-burger flex items-center p-3 ${scrollColor}`}
                            onClick={() => buttonNavbar()}>
                        <RxHamburgerMenu/>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    {listNavbar.map((item, index, array) => (
                        <React.Fragment key={index}>
                            <li>
                                <a
                                    className={`text-sm ${scrollColor} navbar transition duration-300 hover:text-blue-400`}
                                    href={`#${item.link}`}
                                >
                                    {item.title}
                                </a>
                            </li>
                            {index !== array.length - 1 ?
                                <li className="text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                </li>
                                :
                                ""
                            }
                        </React.Fragment>
                    ))}
                </ul>
                <div
                    className={`hidden cursor-text lg:inline-block py-2 px-6 bg-transparent border-[3px] border-blue-600 rounded-3xl text-sm ${scrollColor} font-bold`}>
                    Pilih No. 0
                </div>
            </nav>
            <div className={`navbar-menu relative z-50 ${navbarOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <Navigation buttonNavbar={buttonNavbar}/>
            </div>
        </>
    )
}