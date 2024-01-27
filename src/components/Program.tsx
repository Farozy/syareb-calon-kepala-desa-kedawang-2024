import Image from "next/image";

export default function Program() {

    const listPrograms = [
        {
            image: "sid.jpg",
            title: "Sistem Informasi Desa",
            desc : "Untuk pengelolaan informasi di desa",
        },
        {
            image: "sdm.jpg",
            title: "Peningkatan SDM Desa",
            desc : "Update peningkatan kualitas kehidupan",
        },
        {
            image: "jaringan.jpg",
            title: "Jaringan Internet Desa",
            desc : "Kesenjangan akses internet di pedesaan",
        },
        {
            image: "keamanan.jpg",
            title: "Sistem Keamanan Desa",
            desc : "Perlindungan pada lingkungan di desa",
        }
    ];

    return (
        <section className="bg-gray-400 antialiased text-gray-900 p-5 " id="program">
            <div className="title text-center text-4xl pb-4 relative font-semibold">
                Program
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto mt-5">
                {listPrograms.map((item, index) => (
                    <div key={index} data-aos="zoom-in-down" data-aos-duration="1000">
                        <Image
                            src={`/program/${item.image}`} alt="image" width={500} height={500}
                            className="w-[90%] sm:w-[60%] md:w-[85%] mx-auto object-cover object-center rounded-lg shadow-md"
                        />
                        <div className="relative -mt-5">
                            <div className="bg-white mx-auto p-3 md:p-4 rounded-lg shadow-lg w-full sm:w-[75%] md:w-[95%]">
                                <div className="flex items-baseline">
                                  <span
                                      className="bg-teal-200 text-teal-800 text-xs px-2 hidden md:inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Program
                                  </span>
                                </div>
                                <div className="mt-1 text-sm sm:text-lg lg:text-xl font-bold uppercase sm:text-left lg:text-justify">
                                    {item.title}
                                </div>
                                <div className="mt-1 text-sm sm:text-base md:text-base">
                                    {item.desc}
                                </div>
                                <div className="mt-4">
                                    <span className="text-gray-800 text-sm md:text-base font-semibold">Desa Kedawang</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}