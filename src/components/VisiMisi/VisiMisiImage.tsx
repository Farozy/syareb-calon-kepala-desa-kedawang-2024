import Image from "next/image";

export default function VisiMisiImage() {
    return (
        <>
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
        </>
    )
}