import {VisimisiFetch} from "@/hooks/useFetch";

export default function Misi() {
    const [visimisi]: any = VisimisiFetch();

    return (
        <>
            <div className="mb-5" data-aos="fade-up-right" data-aos-duration="1000">
                <h5 className="font-bold md:font-semibold text-center text-2xl">Misi</h5>
                <div className="w-full">
                    {visimisi.map((item: any, index: number) => (
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
        </>
    )
}