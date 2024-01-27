import Image from "next/image";

export default function Preloader() {
    return (
        <>
            <div
                className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden hidden md:flex lg:flex flex-col items-center justify-center"
            >
                <Image
                    src="/images/bg_loading.jpg"
                    alt="bg" width={500} height={500}
                    className="w-full h-full"
                    style={{
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                />

                <div className='loader'>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--text'></div>
                </div>
            </div>

            <div
                className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 overflow-hidden flex md:hidden lg:hidden flex-col items-center justify-center"
            >
                <Image
                    src="/images/bg_loading2.jpg"
                    alt="bg" width={500} height={500}
                    className="w-full h-full pb-6"
                    style={{
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                />

                <div className='loader'>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--text'></div>
                </div>
            </div>
        </>
    )
}