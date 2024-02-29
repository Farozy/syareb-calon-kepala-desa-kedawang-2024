import {FooterMenuFetch} from "@/hooks/useFetch";

export default function FooterMenu() {
    const [menu]: any = FooterMenuFetch();

    return (
        <div className="col-span-4 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-base md:text-lg font-bold">Menu</p>
            <ul>
                {menu.map((item: any, index: number) => (
                    <li key={index} className="py-1.5 text-sm md:text-base">
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
    )
}