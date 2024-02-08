'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisiMisi from "@/components/VisiMisi";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import React, {useEffect, useState} from "react";
import Preloader from "@/components/Preloader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModalWindows from "@/components/ModalWindows";
import { useGlobalContext } from "./context/store";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const { modal } = useGlobalContext();

    useEffect(() => {
        if(!modal) {
            setTimeout(() => {
                setLoading(false);
            }, 5000);

            AOS.init();
        }
    }, [modal])

    return (
        <main className="min-h-screen w-full">
            {modal ? <ModalWindows /> : loading ? (
                <Preloader/>
            ) : (
                <>
                    <Navbar/>
                    <Hero/>
                    <VisiMisi/>
                    <Program/>
                    <Profile/>
                    <About/>
                    <Footer/>
                </>
            )}
            {/*{loading ? (*/}
            {/*    <Preloader/>*/}
            {/*) : (*/}
            {/*    <>*/}
            {/*        <Navbar/>*/}
            {/*        <Hero/>*/}
            {/*        <VisiMisi/>*/}
            {/*        <Program/>*/}
            {/*        <Profile/>*/}
            {/*        <About/>*/}
            {/*        <Footer/>*/}
            {/*    </>*/}
            {/*)}*/}
        </main>
    );
}

export default Home;