import Image from "next/image";

export default function Footer() {
    const listMenu = [
        {
            title: "Beranda",
            link: "#beranda",
        },
        {
            title: "Visi & Misi",
            link: "#visimisi",
        },
        {
            title: "Program",
            link: "#program",
        },
        {
            title: "Profil",
            link: "#profile",
        },
        {
            title: "Tentang",
            link: "#tentang",
        }
    ];

    const listPrograms = [
        {
            title: "Sistem Informasi Desa",
            desc : "Untuk pengelolaan informasi di desa",
        },
        {
            title: "Peningkatan SDM Desa",
            desc : "Update peningkatan kualitas kehidupan",
        },
        {
            title: "Jaringan Internet Desa",
            desc : "Kesenjangan akses internet di pedesaan",
        },
        {
            title: "Sistem Keamanan Desa",
            desc : "Perlindungan pada lingkungan di desa",
        }
    ];

    return (
        <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div
                className="px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-8 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="col-span-full md:pb-0 md:col-span-6 md:my-auto mb-6">
                        <div className="flex flex-col-reverse lg:flex-row mx-auto justify-center space-x-0 lg:space-x-3 md:justify-start">
                            <div
                                className="flex items-center justify-center mx-auto lg:mx-0 w-1/4 pl-2 pt-1 rounded-xl bg-[#7D0000]">
                                <Image src="/images/caleg.png" alt="caleg" width={500} height={500}/>
                            </div>
                            <span className="self-center text-2xl font-semibold">Fulana</span>
                        </div>
                    </div>
                    <div className="col-span-4 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-bold">Menu</p>
                        <ul>
                            {listMenu.map((item, index) => (
                                <li key={index} className="py-1.5">
                                    <a
                                        href={`${item.link}`}
                                        className="hover:text-blue-400"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-8 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-bold">Program Kerja</p>
                        <p className="pb-1 text-lg font-medium">Misi</p>
                        <ul>
                            {listPrograms.map((item, index) => (
                                <li key={index} className="py-1.5">
                                    <span>
                                        {index + 1}. {item.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div
                        className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©Farozy, Kedawang, 2024 </span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="mailto:webcoding12@gmail.com" target="_blank" title="Email"
                           className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5">
                                <path
                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="https://www.instagram.com/" title="Instagram"
                           className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="28px" height="28px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                 y="0px"
                                 viewBox="0 0 48 48">
                                <g>
                                    <path className="instagram--black" d="M25.6,8c2.9,0,3.5,0,5,0.1c1.7,0.1,2.9,0.3,3.9,0.7c1.1,0.4,1.9,1,2.8,1.8s1.4,1.8,1.8,2.8
                                    c0.4,1,0.7,2.2,0.7,3.9C40,19,40,19.6,40,23V25c0,3.4,0,4-0.1,5.6c-0.1,1.7-0.3,2.9-0.7,3.9c-0.4,1.1-1,1.9-1.8,2.8
                                    s-1.8,1.4-2.8,1.8c-1,0.4-2.2,0.7-3.9,0.7C29,40,28.4,40,25,40H23c-3.4,0-4,0-5.6-0.1c-1.7-0.1-2.9-0.3-3.9-0.7
                                    c-1.1-0.4-1.9-1-2.8-1.8s-1.4-1.8-1.8-2.8c-0.4-1-0.7-2.2-0.7-3.9C8,29.1,8,28.5,8,25.6v-3.3c0-2.9,0-3.5,0.1-5
                                    c0.1-1.7,0.3-2.9,0.7-3.9c0.4-1.1,1-1.9,1.8-2.8s1.8-1.4,2.8-1.8c1-0.4,2.2-0.7,3.9-0.7C18.9,8,19.5,8,22.4,8H25.6z M25,10.9h-2
                                    c-3.3,0-3.9,0-5.4,0.1c-1.6,0.1-2.4,0.3-3,0.6c-0.7,0.3-1.3,0.6-1.8,1.2c-0.6,0.6-0.9,1.1-1.2,1.8c-0.2,0.6-0.5,1.4-0.6,3
                                    c-0.1,1.5-0.1,2.1-0.1,5.4v2c0,3.3,0,3.9,0.1,5.4c0.1,1.6,0.3,2.4,0.6,3c0.3,0.7,0.6,1.3,1.2,1.8c0.6,0.6,1.1,0.9,1.8,1.2
                                    c0.6,0.2,1.4,0.5,3,0.6c1.5,0.1,2.1,0.1,5.4,0.1h2c3.3,0,3.9,0,5.4-0.1c1.6-0.1,2.4-0.3,3-0.6c0.7-0.3,1.3-0.6,1.8-1.2
                                    c0.6-0.6,0.9-1.1,1.2-1.8c0.2-0.6,0.5-1.4,0.6-3c0.1-1.5,0.1-2.1,0.1-5.4v-2c0-3.3,0-3.9-0.1-5.4c-0.1-1.6-0.3-2.4-0.6-3
                                    c-0.3-0.7-0.6-1.3-1.2-1.8c-0.6-0.6-1.1-0.9-1.8-1.2c-0.6-0.2-1.4-0.5-3-0.6C28.9,10.9,28.4,10.9,25,10.9z M24,15.8
                                    c4.5,0,8.2,3.7,8.2,8.2c0,4.5-3.7,8.2-8.2,8.2s-8.2-3.7-8.2-8.2C15.8,19.5,19.5,15.8,24,15.8z M24,18.7c-2.9,0-5.3,2.4-5.3,5.3
                                    c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3C29.3,21.1,26.9,18.7,24,18.7z M32.5,13.5c1.1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9
                                    c-1.1,0-1.9-0.9-1.9-1.9C30.6,14.4,31.5,13.5,32.5,13.5z"/>
                                </g>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="https://www.facebook.com" title="Facebook"
                           className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="28px" height="28px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                 y="0px"
                                 viewBox="0 0 48 48">
                                <g>
                                    <path className="facebook--black" d="M30.1,40V27.6h4.2l0.6-4.8h-4.8v-3.1c0-1.4,0.4-2.4,2.4-2.4l2.6,0V13c-0.4-0.1-2-0.2-3.7-0.2
                                    c-3.7,0-6.2,2.3-6.2,6.4v3.6h-4.2v4.8h4.2V40H30.1z M9.8,40c-1,0-1.8-0.8-1.8-1.8V9.8C8,8.8,8.8,8,9.8,8h28.5c1,0,1.8,0.8,1.8,1.8
                                    v28.5c0,1-0.8,1.8-1.8,1.8H9.8z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};