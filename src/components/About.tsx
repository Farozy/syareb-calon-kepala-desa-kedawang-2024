import Image from "next/image";

export default function About() {
    return (
        <section id="tentang"
             className="font-sans antialiased leading-normal tracking-wider bg-cover pb-1 pt-5"
        >
            <div className="title text-center text-4xl relative pb-4 font-semibold">
                Tentang
            </div>
            <div
                className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
                data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
            >
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-400 text-teal-900 rounded-full">
                                    Coblos No. 0
                                </p>
                            </div>
                            <div
                                className="font-sans font-semibold text-2xl tracking-tight text-gray-900 md:text-3xl sm:leading-8 max-w-lg mb-6 sm:text-center">
                                Jangan ragu & bimbang
                                <br className="md:block"/>
                                Suaramu untuk{' '}
                                <span className="inline-block text-deep-purple-accent-400">desamu</span>
                            </div>
                            <p className="text-gray-700 text-base md:text-lg text-justify">
                                Jangan sampai kita terpecah belah hanya karena persoalan politik. Persahabatan dan
                                kekeluargaan adalah sesuatu yang lebih abadi.
                            </p>
                        </div>
                        <div className="w-1/2 sm:w-2/5 md:w-3/5 mx-auto">
                            <Image src="/images/ayo-memilih.png" alt="Ayo Coblos" width={500} height={500}/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                        <div className="w-1/2 sm:w-2/5 md:w-2/5">
                            <Image src="/images/kotak-suara.png" alt="coblos" className="object-cover" width={500}
                                   height={500}/>
                        </div>
                        <div className="w-1/2 sm:w-2/5 md:w-5/12 -ml-6 lg:-ml-24">
                            <Image src="/images/coblos.png" alt="coblos" className="object-cover" width={500}
                                   height={500}/>
                        </div>
                    </div>
                </div>
                {/*<a*/}
                {/*    href="/"*/}
                {/*    aria-label="Scroll down"*/}
                {/*    className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"*/}
                {/*>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"*/}
                {/*         fill="currentColor">*/}
                {/*        <path*/}
                {/*            d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
            </div>
        </section>
    )
}