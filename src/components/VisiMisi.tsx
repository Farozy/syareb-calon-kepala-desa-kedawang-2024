import Image from "next/image";

export default function VisiMisi() {

    const listData = [
        {
            color: "text-red-800",
            desc: "Meningkatkan pelayanan yang maksimal kepada masyarakat desa dan daya saing desa."
        },
        {
            color: "text-blue-400",
            desc: "Meningkatkan konektivitas digital untuk mendukung pertumbuhan ekonomi dan pendidikan."
        },
        {
            color: "text-blue-800",
            desc: "Mengembangkan infrastruktur yang memfasilitasi pertumbuhan desa."
        },
        {
            color: "text-yellow-600",
            desc: " Mewujudkan dan meningkatkan serta meneruskan tata kelola pemerintahan desa yang lebih baik."
        },
    ];

    return (
        <section className="py-5 bg-[#ddd]" id="visimisi">
            <div className="title text-center text-4xl relative pb-4 font-semibold">
                Visi <span className="text-yellow-500"> & </span> Misi
            </div>
            <div
                className="block md:flex items-center justify-around w-full md:w-[1130px] max-w-[90%] md:max-w-[85%] my-0 md:text-base mx-auto">
                <div className="hidden lg:block" data-aos="zoom-in" data-aos-duration="1000">
                    <Image
                        src="/images/visi-misi1.png" alt="visi misi" width={500} height={500}
                        className="h-auto w-[58%] md:w-[302px] mx-auto md:mx-0"
                    />
                </div>
                <div className="block lg:hidden" data-aos="zoom-in" data-aos-duration="1000">
                    <Image
                        src="/images/visi-misi2.png" alt="visi misi" width={500} height={500}
                        className="h-auto w-[58%] sm:w-[45%] md:w-[302px] mx-auto md:mx-0"
                    />
                </div>
                <div className="md:w-[550px] w-full mt-8">
                    <div className="mb-6" data-aos="fade-up" data-aos-duration="1000">
                        <h5 className="font-bold md:font-semibold mb-3 text-center text-3xl">Visi</h5>
                        <p className="text-center">
                            “ Terwujudnya Desa Kedawang yang aman, sehat, cerdas dan sejahtera “
                        </p>
                    </div>
                    <div className="mb-5" data-aos="fade-up-right" data-aos-duration="1000">
                        <h5 className="font-bold md:font-semibold text-center text-3xl">Misi</h5>
                        <div className="w-full">
                            {listData.map((item, index) => (
                                <div className="flex" key={index}>
                                    <div className={`w-8 h-10 text-center py-1 text-3xl p-0 ${item.color}`}>
                                        &bull;
                                    </div>
                                    <div className="w-full py-3 px-1 text-sm md:text-base">
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}