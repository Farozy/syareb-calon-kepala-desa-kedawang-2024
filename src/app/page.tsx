'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisiMisi from "@/components/VisiMisi";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import {useEffect, useState} from "react";
import Preloader from "@/components/Preloader";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);

        AOS.init();
    }, [])

    return (
        <main className="min-h-screen w-full">
            {loading ? (
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
        </main>
    );
}
