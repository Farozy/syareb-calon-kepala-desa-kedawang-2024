import Image from "next/image";
import AboutUs from "@/components/About/AboutUs";

export default function About() {
    return (
        <section
            id="tentang"
            className="font-sans antialiased leading-normal tracking-wider bg-cover pb-1 pt-5"
        >
            <div className="title text-center text-3xl relative pb-4 font-semibold">
                Tentang
            </div>
            <div
                className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
                data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
            >
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <AboutUs/>
                    <div className="flex items-center justify-center flex-row md:flex-row-reverse lg:w-1/2">
                        <div className="w-[37%] -ml-0 md:-ml-6">
                            <Image
                                src="/images/coblos1.png" alt="coblos" className="object-cover"
                                width={500} height={500}/>
                        </div>
                        <div className="w-1/2 sm:w-2/5 md:w-2/5">
                            <Image src="/images/kotak-suara.png" alt="coblos" className="object-cover" width={500}
                                   height={500}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}