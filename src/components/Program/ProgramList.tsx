"use client";
import Image from "next/image";
import {ProgramFetch, ProgramFetchById} from "@/hooks/useFetch";
import {useEffect, useState} from "react";
import ModalProgram from "@/components/Program/ModalProgram";
import './program.css';

export default function ProgramList() {
    const [program]: any = ProgramFetch();
    const [openModal, setOpenModal] = useState(false);
    const [programById, setProgram] = useState({});

    const handleModal = (id: number) => {
        setOpenModal(true)
        ProgramFetchById(id);
    }

    const ProgramFetchById = async (id: any) => {
        try {
            const res = await fetch("/data/program.json");
            const data = await res.json();
            const selectedItem = data.find((item: any) => item.id === parseInt(id));
            setProgram(selectedItem);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        openModal ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
    }, [openModal]);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto mt-5">
                {program.map((item: any, index: number) => (
                    <div key={index} data-aos="zoom-in-down" data-aos-duration="1000">
                        <Image
                            src={`/program/${item.image}`} alt="image" width={500} height={500}
                            className="w-[90%] sm:w-[60%] md:w-[85%] mx-auto object-cover object-center rounded-lg shadow-md"
                        />
                        <div className="relative -mt-5">
                            <div
                                className="bg-white mx-auto p-3 md:p-4 rounded-lg shadow-lg w-full sm:w-[75%] md:w-[95%]">
                                <div className="flex items-baseline">
                                      <span
                                          className="bg-teal-200 text-teal-800 text-xs px-2 hidden md:inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        Program
                                      </span>
                                </div>
                                <div
                                    className="mt-1 text-sm md:text-base font-bold uppercase sm:text-left lg:text-justify cursor-pointer hover:text-blue-700"
                                    onClick={() => handleModal(item.id)}
                                >
                                    {item.title}
                                </div>
                                <div className="mt-4">
                                    <span
                                        className="text-gray-800 text-sm font-semibold">Desa Kedawang</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {openModal && (
                    <ModalProgram closeModal={() => setOpenModal(false)} dataProgram={programById} />
                )}
            </div>
        </>
    )
}