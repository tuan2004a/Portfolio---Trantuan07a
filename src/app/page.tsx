import Introduce from "@/components/introduce/Index";
import SideBar from "../components/layout/SideBar";

export default function Home() {
    return (
        <div className="h-[100vh] w-full uk-padding !gap-10 uk-flex">
            <div className="uk-width-1-3 uk-height-1-1">
                <SideBar />
            </div>
            <main className="uk-width-2-3 h-[calc(100vh-80px)] snap-y snap-mandatory">
                <div className="bg-[#191919] uk-padding uk-width h-[calc(100vh-80px)] snap-start">
                    <Introduce />
                </div>
            </main>
        </div>
    );
}
