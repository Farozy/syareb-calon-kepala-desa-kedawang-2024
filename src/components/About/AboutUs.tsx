import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
                <div>
                    <p className="inline-block px-2 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-400 text-white rounded-full">
                        Coblos No. 4
                    </p>
                </div>
                <div
                    className="font-sans font-semibold text-2xl tracking-tight text-gray-900 md:text-3xl sm:leading-8 max-w-lg mb-6 text-center md:text-start">
                    Jangan ragu & bimbang
                    {/*<br className="md:block"/>*/}
                    <div className={"mt-1 md:mt-3 md:block text-center md:text-start"}>
                        Suaramu untuk{' '}
                        <span className="inline-block text-deep-purple-accent-400">desamu</span>
                    </div>
                </div>
                <p className="text-gray-700 text-sm md:text-base text-justify">
                    Jangan sampai kita terpecah belah hanya karena persoalan politik. Persahabatan dan
                    kekeluargaan adalah sesuatu yang lebih abadi.
                </p>
            </div>
            <div className="w-1/2 sm:w-2/5 md:w-3/5 mx-auto">
                <Image src="/images/ayo-memilih.png" alt="Ayo Coblos" width={500} height={500}/>
            </div>
        </div>
    )
}