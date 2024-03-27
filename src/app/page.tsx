'use client';
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import VisiMisiMain from "@/components/VisiMisi/VisiMisiMain";
import Profile from "@/components/Profile/Profile";
import About from "@/components/About/About";
import Program from "@/components/Program/Program";
import Footer from "@/components/Footer/Footer";
import React, {useEffect, useState} from "react";
import Preloader from "@/components/Preloader/Preloader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import WelcomeMain from "@/components/Welcome/WelcomeMain";
import {useGlobalContext} from "./context/store";
import Cookies from "js-cookie";
import axios from "axios";
import {ApiToken} from "@/config/API";
import {isTokenExpired} from "@/utils/Token";
import {Toast} from "@/utils/Toast";
import {kadesCookie} from "@/config/Cookie";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const {modal, setModal} = useGlobalContext();
    const [expiredToken, setExpiredToken] = useState(true);
    const token_kades: any = Cookies.get(kadesCookie);

    useEffect(() => {
        if (!modal || expiredToken) {
            setTimeout(() => {
                setLoading(false);
            }, 5000);

            AOS.init();
        }
    }, [modal])

    useEffect(() => {
        const checkToken = async () => {
            if (token_kades !== undefined) {
                await axios({
                    method: 'get',
                    url: ApiToken,
                    headers: {
                        Authorization: `Bearer ${token_kades}`
                    }
                })
                    .then(async (response: any) => {
                        const expiryToken = await response.data.data.expiry_date;
                        const resExpiryToken: any = isTokenExpired(expiryToken);
                        if (!resExpiryToken) {
                            setExpiredToken(resExpiryToken);
                            setModal(false);
                        }

                        resExpiryToken ? setLoading(false) : '';
                    })
                    .catch(() => {
                        setTimeout(() => {
                            Toast('error', "Token yang dimasukkan salah", 'top-center', '❌');
                        }, 2000)
                    });
            }
        }

        checkToken();

        setTimeout(() => {

        }, 5000)

        AOS.init();
    }, [])

    return (
        <main className="min-h-screen w-full">
            {loading ? <Preloader/> : expiredToken && modal ? (
                <WelcomeMain/>
            ) : (
                <>
                    <Navbar/>
                    <Hero/>
                    <VisiMisiMain/>
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