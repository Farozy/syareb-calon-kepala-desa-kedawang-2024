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

const Home = ({sessionData}: any) => {
    const [loading, setLoading] = useState(true);
    // const sessionData = context.req.cookies.session ? JSON.parse(context.req.cookies.session) : null;
    const sessionWhatsApp = sessionData ? JSON.stringify(sessionData) : 'Belum ada session tersedia';

    console.log(sessionWhatsApp);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);

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

export default Home;