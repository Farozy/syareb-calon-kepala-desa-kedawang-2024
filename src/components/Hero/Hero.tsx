import SwiperImage from "@/components/Hero/SwiperImage";
import Moto from "@/components/Hero/Moto";
import "./hero.css";

export default function Hero() {
    return (
        <section id="beranda" className="pt-16 md:pt-0">
            <div className="flex justify-between items-center lg:items-stretch lg:flex-row-reverse flex-col-reverse">
                <SwiperImage/>
                <Moto/>
            </div>
            <div className="container mx-auto">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </section>
    );
}
