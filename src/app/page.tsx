import Introduce from "@/components/Introduce";
import SideBar from "../components/layout/SideBar";

export default function Home() {
    return (
        <div className="h-[100vh] w-full uk-padding-large !gap-10 uk-flex">
            <div className="uk-width-1-3 uk-height-1-1">
                <SideBar />
            </div>
            <main className="uk-width-2-3 uk-height-1-1">
                <div>
                    <Introduce />
                </div>
            </main>
        </div>
    );
}
