import Image from "next/image";
import Biodata from "@/components/Profile/Biodata";

export default function Profile() {
    return (
        <section
            id="profile"
            className="font-sans antialiased text-gray-100 leading-normal tracking-wider bg-cover pt-5 pb-1 lg:pb-10"
            style={{backgroundImage: `url('https://itkoding.com/wp-content/uploads/2023/07/background-hitam-keren.jpg')`}}
        >
            <div className="title text-center text-3xl pb-4 relative font-semibold">
                Profil
            </div>
            <div
                className="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-10"
                data-aos="zoom-in" data-aos-duration="1000"
            >
                <div
                    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-100 lg:opacity-75 mx-6 lg:mx-0"
                >
                    <div className="p-4 md:p-8 text-center lg:text-left">
                        {/*<div*/}
                        {/*    className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"*/}
                        {/*    style={{backgroundImage: `url('https://source.unsplash.com/MP0IUfwrn0A')`}}></div>*/}
                        <Image
                            src="/images/caleg2.jpg" alt="photo" width={100} height={100}
                            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-40 w-40 bg-cover bg-center"
                        />
                        <Biodata/>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <Image
                        src="/images/caleg2.jpg" alt="photo" width={500} height={500}
                        className="rounded-none lg:rounded-r-lg shadow-2xl hidden lg:block"
                    />
                </div>
            </div>
        </section>
    )
}