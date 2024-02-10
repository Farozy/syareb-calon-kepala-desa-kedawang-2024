'use client';
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import toast, {Toaster} from 'react-hot-toast';
import {Toast} from "@/config/Toast";
import {isTokenExpired} from "@/config/Token";
import {useGlobalContext} from "@/app/context/store";
import {useState} from "react";
import https from "https";

export default function ModalWindows() {
    const [isLoading, setIsloading] = useState(false)
    const {setModal} = useGlobalContext();
    const whatsappMessage = encodeURIComponent("Start");
    const phoneNumber = '6287811044689';
    const agent = new https.Agent({ rejectUnauthorized: false });
    const doFormSubmit = async (values: any) => {
        setIsloading(true);
        const token = values.token;

        // axios.get('https://myapp-pre-wedding.000webhostapp.com/api/kedawang/contact', { httpsAgent: agent })
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        await axios({
            method: 'get',
            url: 'http://laravel.test/api/kedawang/token',
            httpsAgent: agent,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(async (response) => {
                const expiryToken = await response.data.data.expiry_date;
                const resExpiryToken = isTokenExpired(expiryToken);
                if (resExpiryToken) {
                    setTimeout(() => {
                        formik.resetForm();
                        setIsloading(false);
                        const link = `Token sudah kadaluarsa. \nKlik untuk perbarui <a target='_blank' href="https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}">👉 <u><b>Token</b></u></a>`;
                        toast.error(
                            <div dangerouslySetInnerHTML={{__html: link}}></div>,
                            {
                                position: 'top-center',
                                duration: 7000,
                            }
                        );
                    }, 2000)
                } else {
                    setTimeout(() => {
                        setModal(false);
                    }, 2000)
                }
            })
            .catch((error) => {
                console.log(error)
                setTimeout(() => {
                    setIsloading(false);
                    Toast('error', "Token yang dimasukkan salah", 'top-center', '❌');
                }, 2000)
                // console.error('Kesalahan dalam panggilan Axios:', error);
            });

        setTimeout(() => {
            formik.setSubmitting(false);
        }, 2000);
    }

    const formik = useFormik({
        initialValues: {
            token: ''
        },
        validationSchema: Yup.object().shape({
            token: Yup.string()
                .required("Inputan token belum diisi")
        }),
        onSubmit: doFormSubmit
    });

    const handleSendMessage = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section>
            <div
                className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center h-screen">
                <div role="alert" className="mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-center text-gray-600 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="52" height="52"
                                 viewBox="0 0 256 256">
                                <defs>
                                </defs>
                                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <path
                                        d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 61.962 49.445 c 0 6.573 -1.477 11.642 -4.429 15.207 C 54.58 68.217 50.42 70 45.05 70 c -5.414 0 -9.603 -1.793 -12.566 -5.381 c -2.963 -3.587 -4.445 -8.644 -4.445 -15.173 v -8.89 c 0 -6.573 1.476 -11.642 4.429 -15.207 C 35.419 21.783 39.591 20 44.983 20 c 5.392 0 9.571 1.794 12.533 5.381 c 2.963 3.588 4.445 8.656 4.445 15.207 V 49.445 z"
                                        transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                    <path
                                        d="M 44.983 28.69 c -1.939 0 -3.347 0.802 -4.228 2.407 c -0.88 1.604 -1.353 4.033 -1.42 7.286 v 12.433 c 0 3.632 0.456 6.29 1.371 7.971 c 0.913 1.683 2.361 2.524 4.344 2.524 c 1.917 0 3.331 -0.819 4.245 -2.456 c 0.914 -1.637 1.382 -4.206 1.404 -7.705 V 39.118 c 0 -3.498 -0.457 -6.111 -1.37 -7.838 C 48.414 29.554 46.966 28.69 44.983 28.69 z"
                                        transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                </g>
                            </svg>
                        </div>
                        <h1 className="text-gray-800 text-center font-lg font-bold tracking-normal leading-tight mb-4">
                            Fulana
                        </h1>
                        <form onSubmit={formik.handleSubmit}>
                        <textarea
                            id="message" rows={4} name="token"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Masukkan token....."
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.token}
                        ></textarea>
                            <div className={
                                `flex ${formik.touched.token && formik.errors.token ? 'justify-between' : 'justify-end'} mt-1`
                            }>
                                {formik.touched.token && formik.errors.token && (
                                    <div
                                        className="text-red-500 ml-1 text-xs md:text-sm lg:text-sm">{formik.errors.token}</div>
                                )}
                                <div className="text-xs">Belum punya token?
                                    <button
                                        onClick={() => handleSendMessage()}
                                        className="underline font-bold ml-1">
                                        Buat
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    disabled={isLoading}
                                >
                                    {!isLoading ? 'Kirim' :
                                        <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin"
                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                            </path>
                                        </svg>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster/>
        </section>
    )
}