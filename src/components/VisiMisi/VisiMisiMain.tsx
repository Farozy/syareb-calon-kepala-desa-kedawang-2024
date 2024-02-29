import VisiMisiImage from "@/components/VisiMisi/VisiMisiImage";
import Visi from "@/components/VisiMisi/Visi";
import Misi from "@/components/VisiMisi/Misi";

export default function VisiMisiMain() {

    return (
        <section className="py-5 bg-[#ddd]" id="visimisi">
            <div className="title text-center text-3xl relative pb-4 font-semibold">
                Visi <span className="text-yellow-500"> & </span> Misi
            </div>
            <div
                className="block md:flex items-center justify-around w-full md:w-[1130px] max-w-[90%] md:max-w-[85%] my-0 md:text-base mx-auto">
                <VisiMisiImage/>
                <div className="md:w-[550px] w-full mt-8">
                    <Visi/>
                    <Misi/>
                </div>
            </div>
        </section>
    )
}