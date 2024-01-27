"use client";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {useState, useRef} from "react";
import Textra from "react-textra";

export default function Hero() {
    const [zoomImage, setZoomImage] = useState(false);

    const listImages = [
        {
            title: 'satu.jpg',
            alt: "satu"
        },
        {
            title: 'dua.jpg',
            alt: "dua"
        },
        {
            title: 'tiga.jpg',
            alt: "tiga"
        },
        {
            title: 'empat.jpg',
            alt: "empat"
        },
        {
            title: 'lima.jpg',
            alt: "lima"
        }
    ];

    const handleZoomImage = (): void => {
        setZoomImage(zoomImage => !zoomImage);
    }

    const progressCircle: any = useRef<SVGSVGElement>(null);
    const progressContent: any = useRef<HTMLSpanElement>(null);

    const onAutoplayTimeLeft = (_: any, time: any, progress: any): void => {
        progressCircle.current?.style.setProperty('--progress', 1 - progress);
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <section id="beranda" className="pt-16 md:pt-0">
            <div className="flex justify-between items-center lg:items-stretch lg:flex-row-reverse flex-col-reverse">
                <div
                    className={`relative overflow-hidden w-full mx-auto lg:w-8/12 lg:max-w-full`}
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                >
                    <svg
                        className={`absolute left-0 hidden text-white transform -translate-x-[59%] lg:block z-10 ${zoomImage ? "invisible" : ''}`}
                        viewBox="0 0 100 100"
                        fill="currentColor"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z"/>
                    </svg>
                    <Swiper
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
                        {listImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none h-[26rem] md:h-[25rem] lg:h-full"
                                    src={`/slides/${item.title}`}
                                    alt={item.alt} width={500} height={500}
                                    priority
                                    onClick={handleZoomImage}
                                />
                            </SwiperSlide>
                        ))}
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
                <div
                    className="w-full md:max-w-[32rem] px-4 lg:px-6 z-20 hero_bg"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                    // className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
                >
                    <div className="mb-4 lg:my-32 lg:max-w-lg lg:pr-5 py-0 md:py-16 lg:py-28">
                        <div
                            className="mb-5 font-sans text-2xl md:text-4xl font-bold text-gray-900 sm:text-4xl sm:leading-none text-center">
                            Melangkah bersama
                            <span className="inline-block text-deep-purple-400 mt-1 lg:mt-3 mb-4 lg:mb-0">
                                Untuk perubahan desa
                            </span>
                        </div>
                        <div
                            className="relative px-2 py-2 md:py-3">
                            <div className="text-center w-full">
                                <p className="text-slate-800 text-lg md:text-xl lg:text-xl font-bold uppercase">
                                    Perubahan Untuk
                                </p>
                                <div className="text-lg md:text-xl lg:text-xl">
                                    <span className="text-2xl font-bold text-[#FF5722]">
                                        <Textra
                                            data={[
                                                'Membangun akses jalan yang layak',
                                                'Pendidikan yang lebih berkualitas',
                                                'Pemerataan berkeadilan bansos dan pkh',
                                                'Memperluas jangkauan internet'
                                            ]}
                                            effect='scale'
                                            duration={1500}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container block lg:hidden">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </section>
    );
}
