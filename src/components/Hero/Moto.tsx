"use client";
import Textra from "react-textra";
import {HeroMotoFetch} from "@/hooks/useFetch";

export default function Moto() {
    const [moto]: any = HeroMotoFetch();

    return (
        <div
            className="w-full md:max-w-[32rem] px-4 lg:px-6 z-20 hero_bg"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            // className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
            <div className="mb-4 lg:my-32 lg:max-w-lg lg:pr-5 py-0 md:py-16 lg:py-28">
                <div
                    className="mb-5 text-2xl md:text-4xl font-bold text-gray-900 sm:text-4xl sm:leading-none text-center">
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
                                    data={moto}
                                    effect='scale'
                                    duration={1500}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}