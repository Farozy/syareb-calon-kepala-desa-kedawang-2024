import {FaFacebookSquare, FaGlobe, FaInstagram, FaToolbox, FaYoutube} from "react-icons/fa";

export default function Biodata() {
    return (
        <>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Syareb</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-sm font-bold flex items-center justify-center lg:justify-start text-gray-100 ">
                <FaToolbox className="mr-2"/>
                Wiraswasta
            </p>
            <p className="pt-2 text-gray-100 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <FaGlobe className="mr-2"/>
                Sumur Lecen, Desa Kedawang
            </p>
            <div className="pt-8 text-sm text-justify leading-7">
                <p className={"text-last-justify text-sm leading-7 md:text-base"}>
                    Seorang pemimpin desa yang baik selalu memprioritaskan kepentingan masyarakat di atas kepentingan
                    pribadi atau golongan tertentu.
                </p>
            </div>
            <div className="pt-12 pb-8">
                <span
                    className="bg-transparent text-sm border-[3px] border-green-700 text-white font-bold py-2 px-4 rounded-full">
                    Nomer Urut 4
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
        </>
    )
}