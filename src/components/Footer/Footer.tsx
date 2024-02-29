import Image from "next/image";
import FooterMenu from "@/components/Footer/FooterMenu";
import FooterProgram from "@/components/Footer/FooterProgram";
import FooterSosialMedia from "@/components/Footer/FooterSosialMedia";

export default function Footer() {
    return (
        <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div
                className="px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-8 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="col-span-full md:pb-0 md:col-span-6 md:my-auto mb-6">
                        <div
                            className="flex flex-col-reverse lg:flex-row mx-auto justify-center space-x-0 lg:space-x-3 md:justify-start">
                            <div
                                className="flex items-center justify-center mx-auto lg:mx-0 w-[55%] lg:w-[30%] rounded-xl">
                                <Image src="/images/syareb.png" alt="caleg" width={500} height={500} className={"rounded-xl"}/>
                            </div>
                        </div>
                    </div>
                    <FooterMenu/>
                    <FooterProgram/>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div
                        className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 text-gray-400">
                        <span>©Syareb, {new Date().getFullYear()} </span>
                        <a rel="noopener noreferrer" className={"hidden md:inline"} href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className={"hidden md:inline"}>
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <FooterSosialMedia/>
                </div>
            </div>
        </footer>
    );
};