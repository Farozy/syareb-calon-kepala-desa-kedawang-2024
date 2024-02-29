import './program.css';
import ProgramList from "@/components/Program/ProgramList";

export default function Program() {
    return (
        <section className="bg-gray-400 antialiased text-gray-900 px-5 pt-5 pb-16" id="program">
            <div className="title text-center text-3xl pb-4 relative font-semibold">
                Program
            </div>
            <ProgramList/>
        </section>
    )
}