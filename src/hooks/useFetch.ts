"use client";
import {useEffect, useState} from "react";

export const NavbarFetch = () => {
    const [navbar, setNavbar] = useState([]);

    useEffect(() => {
        fetch("/data/navbar.json")
            .then(res => res.json())
            .then(data => setNavbar(data));
    }, []);

    return [navbar, setNavbar];
}

export const HeroSlideFetch = () => {
    const [heroImage, setHeroImage] = useState([]);

    useEffect(() => {
        fetch('/data/heroslides.json')
            .then(res => res.json())
            .then(data => setHeroImage(data))
    },[])

    return [heroImage, setHeroImage];
}

export const HeroSlideMobileFetch = () => {
    const [heroImageMobile, setHeroImageMobile] = useState([]);

    useEffect(() => {
        fetch('/data/heroslidesmobile.json')
            .then(res => res.json())
            .then(data => setHeroImageMobile(data))
    },[])

    return [heroImageMobile, setHeroImageMobile];
}

export const HeroMotoFetch = () => {
    const [moto, setMoto] = useState([]);

    useEffect(() => {
        fetch("/data/moto.json")
            .then(res => res.json())
            .then(data => setMoto(data));
    }, []);

    return [moto, setMoto];
}

export const VisimisiFetch = () => {
    const [visimisi, setVisimisi] = useState([]);

    useEffect(() => {
        fetch("/data/visimisi.json")
            .then(res => res.json())
            .then(data => setVisimisi(data));
    }, []);

    return [visimisi, setVisimisi];
}

export const ProgramFetch = () => {
    const [program, setProgram] = useState([]);

    useEffect(() => {
        fetch("/data/program.json")
            .then(res => res.json())
            .then(data => setProgram(data));
    }, []);

    return [program, setProgram];
}

export const ProgramFetchById = async (id: any) => {
    const [programById, setProgram] = useState({});
    try {
        const res = await fetch("/data/program.json");
        const data = await res.json();
        const selectedItem = data.find((item: any) => item.id === parseInt(id));
        setProgram(selectedItem);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return [programById, setProgram];
}

export const FooterMenuFetch = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("/data/footermenu.json")
            .then(res => res.json())
            .then(data => setMenu(data));
    }, []);

    return [menu, setMenu];
}

export const FooterProgramFetch = () => {
    const [program, setProgram] = useState([]);

    useEffect(() => {
        fetch("/data/footerprogram.json")
            .then(res => res.json())
            .then(data => setProgram(data))
    }, []);

    return [program, setProgram];
}