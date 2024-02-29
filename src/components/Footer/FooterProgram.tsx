import {FooterProgramFetch} from "@/hooks/useFetch";

export default function FooterProgram() {
    const [program]: any = FooterProgramFetch();

    return (
        <div className="col-span-8 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-base md:text-lg font-bold">Program Kerja</p>
            <p className="pb-1 text-base md:text-lg font-medium">Misi</p>
            <ul>
                {program.map((item: any, index: number) => (
                    <li key={index} className="py-1.5 text-sm md:text-base text-start ml-10 lg:ml-0">
                        <span>
                            {index + 1}. {item.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}