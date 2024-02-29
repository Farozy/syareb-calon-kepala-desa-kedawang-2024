"use client";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {useEffect, useRef, useState} from "react";
import {HeroSlideFetch, HeroSlideMobileFetch} from "@/hooks/useFetch";

export default function SwiperImage() {
    const [zoomImage, setZoomImage] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [heroImages]: any = HeroSlideFetch();
    const [heroImagesMobile]: any = HeroSlideMobileFetch();
    const progressCircle: any = useRef<SVGSVGElement>(null);
    const progressContent: any = useRef<HTMLSpanElement>(null);
    const onAutoplayTimeLeft = (_: any, time: any, progress: any): void => {
        progressCircle.current?.style.setProperty('--progress', 1 - progress);
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    }, []);

    return (
        <div
            className={`relative overflow-hidden w-full mx-auto lg:w-8/12 lg:max-w-full`}

        >
            <svg
                className={`absolute left-0 hidden text-white transform -translate-x-[59%] xl:block z-10 ${zoomImage ? "invisible" : "hidden"}`}
                viewBox="0 0 100 100"
                fill="currentColor"
            >
                <path d="M50 0H100L50 100H0L50 0Z"/>
            </svg>
            <Swiper
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper h-full"
            >
                {isMobile ? (
                    <>
                        {heroImagesMobile.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <Image
                                    className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none h-[26rem] md:h-[25rem] lg:h-full"
                                    src={`/slides/mobile/${item.image}`}
                                    alt={item.title} width={500} height={500}
                                    priority
                                />
                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    <>
                        {heroImages.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <Image
                                    className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none h-[26rem] md:h-[25rem] lg:h-full"
                                    src={`/slides/${item.image}`}
                                    alt={item.title} width={500} height={500}
                                    priority
                                    onClick={() => setZoomImage(zoomImage => !zoomImage)}
                                />
                            </SwiperSlide>
                        ))}
                    </>
                )}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    )
}