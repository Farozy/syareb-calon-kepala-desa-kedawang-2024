import {Toaster} from 'react-hot-toast';
import WelcomeForm from "@/components/Welcome/WelcomeForm";

export default function WelcomeMain() {
    return (
        <section>
            <div className={`min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12`}>
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="w-full flex justify-center text-gray-600 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="56" height="56"
                                     viewBox="0 0 256 256">
                                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                        <path
                                            d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 61.338 59.389 h -5.082 V 70 H 44.684 V 59.389 H 25.349 l -0.687 -7.074 l 20.021 -32.212 V 20 h 11.573 v 30.461 h 5.082 V 59.389 z"
                                            transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                        <polygon points="35.69,50.46 44.68,50.46 44.68,35.08 43.96,36.24 "
                                                 transform="  matrix(1 0 0 1 0 0) "/>
                                    </g>
                                </svg>
                            </div>
                            <h1 className="text-gray-800 text-center font-lg font-bold tracking-normal leading-tight mb-4">
                                Syareb
                            </h1>
                            <WelcomeForm/>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </section>
    )
}