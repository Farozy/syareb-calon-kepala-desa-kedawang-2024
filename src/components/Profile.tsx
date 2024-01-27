import Image from "next/image";
import {FaFacebookSquare, FaGlobe, FaInstagram, FaToolbox, FaYoutube} from "react-icons/fa";

export default function Profile() {
    return (
        <section
            id="profile"
            className="font-sans antialiased text-gray-100 leading-normal tracking-wider bg-cover pt-5 pb-1 lg:pb-10"
            style={{backgroundImage: `url('https://itkoding.com/wp-content/uploads/2023/07/background-hitam-keren.jpg')`}}
        >
            <div className="title text-center text-4xl pb-4 relative font-semibold">
                Profil
            </div>
            <div
                className="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-10"
                data-aos="zoom-out-up" data-aos-duration="1000"
            >
                <div
                    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0"
                >
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        {/*<div*/}
                        {/*    className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"*/}
                        {/*    style={{backgroundImage: `url('https://source.unsplash.com/MP0IUfwrn0A')`}}></div>*/}
                        <Image
                            src="/images/caleg2.png" alt="photo" width={100} height={100}
                            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                        />

                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Fulana</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <p className="pt-4 text-sm font-bold flex items-center justify-center lg:justify-start text-gray-100 ">
                            <FaToolbox className="mr-2"/>
                            Wiraswasta & Pengusaha
                        </p>
                        <p className="pt-2 text-gray-100 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                            <FaGlobe className="mr-2"/>
                            Dusun Sumur Licin, Desa Kedawang
                        </p>
                        <p className="pt-8 text-sm text-justify leading-7">
                            Seorang pemimpin desa harus memiliki kemampuan untuk mengembangkan potensi masyarakat dan
                            memaksimalkannya untuk mencapai kemajuan bersama
                        </p>
                        <div className="pt-12 pb-8">
                            <span
                                className="bg-transparent  border-[3px] border-green-700 text-white font-bold py-2 px-4 rounded-full">
                                Nomer Urut 0
                            </span>
                        </div>
                        <div
                            className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-6">
                            <a className="link" href="https://web.facebook.com/" target="_blank"
                               data-tippy-content="@facebook_handle">
                                <FaFacebookSquare/>
                            </a>
                            <a className="link" href="https://www.instagram.com/" target="_blank"
                               data-tippy-content="@instagram_handle">
                                <FaInstagram/>
                            </a>
                            <a className="link" href="https://www.youtube.com/" target="_blank"
                               data-tippy-content="@youtube_handle">
                                <FaYoutube/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <Image
                        src="/images/caleg2.png" alt="photo" width={500} height={500}
                        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                    />
                </div>
            </div>
        </section>
    )
}