import Image from "next/image";

export default function ModalProgram({closeModal, dataProgram}: any) {
    return (
        <div id="dialog"
             className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-white bg-opacity-40 backdrop-filter backdrop-blur-xl z-2`}>
            <div className="relative rounded-lg shadow bg-gray-100 w-full lg:w-[50%] mx-auto h-full md:h-auto mt-0 md:mt-8">
                <div
                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold">
                        {dataProgram.title}
                    </h3>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <div>
                        <Image
                            src={`/program/${dataProgram.image}`} alt={"program"} width={500} height={500}
                            className={"w-1/2 md:w-1/3 mx-auto"}
                        />
                    </div>
                    <div className="text-sm lg:text-base mx-0 lg:mx-5 leading-[1.5rem] text-justify text-gray-900 pb-0 md:pb-8">
                        {dataProgram.description}
                    </div>
                    <div className="text-center text-gray-500 text-sm font-bold static lg:absolute bottom-0 right-0 px-3 pb-2">
                        &copy;Syareb, {new Date().getFullYear()}
                    </div>
                </div>
                <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 transform -translate-x-2/4  translate-y-2/4 ease-in-out transition-all duration-300 cursor-pointer origin-center grayscale-100 border-none bg-none hover:grayscale-0 hover:scale-110"
                >
                    ❌
                </button>
            </div>
        </div>
    )
}