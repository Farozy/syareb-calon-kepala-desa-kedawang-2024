import {useState} from "react";
import {useGlobalContext} from "@/app/context/store";
import axios from "axios";
import {isTokenExpired} from "@/utils/Token";
import toast from "react-hot-toast";
import {Toast} from "@/utils/Toast";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ApiToken} from "@/config/API";
import Cookies from 'js-cookie';

export default function WelcomeForm() {
    const [isLoading, setIsloading] = useState(false)
    const {setModal} = useGlobalContext();
    const whatsappMessage = encodeURIComponent("Start");
    const phoneNumber = '6287811044689';
    const doFormSubmit = async (values: any) => {
        setIsloading(true);
        const token = values.token;

        await axios({
            method: 'get',
            url: ApiToken,
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
                        Cookies.set('token_kades', token);
                    }, 2000)
                }
            })
            .catch(() => {
                setTimeout(() => {
                    setIsloading(false);
                    Toast('error', "Token yang dimasukkan salah", 'top-center', '❌');
                }, 2000)
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
        <div
            className="pb-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <form onSubmit={formik.handleSubmit}>
                <div className="relative">
                    <textarea
                        id="message" rows={5} cols={40} name="token"
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
                                className="text-red-500 ml-1 text-xs">{formik.errors.token}</div>
                        )}
                        <div className="text-xs">Belum punya token?
                            <button
                                onClick={() => handleSendMessage()}
                                className="underline font-bold ml-1">
                                Buat
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative text-center mt-5">
                    <button
                        type="submit"
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        disabled={isLoading}
                    >
                        {!isLoading ? 'Kirim' :
                            <svg
                                width="20" height="20" fill="currentColor"
                                className="mr-2 animate-spin"
                                viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                </path>
                            </svg>
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}