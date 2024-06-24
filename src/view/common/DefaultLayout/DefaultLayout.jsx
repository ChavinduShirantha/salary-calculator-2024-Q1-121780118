import {SideBar} from "../SideBar/SideBar";
import {NavBar} from "../NavBar/NavBar";
import {MainContent} from "../MainContent/MainContent";

export function DefaultLayout() {
    return (
        <div className="mx-auto">
            <div className="flex flex-row">
                <div className="flex basis-1/6 bg-[#33074F]">
                    <SideBar/>
                </div>
                <div className="flex flex-wrap basis-5/6 bg-[#FAFAFA]">
                    <NavBar/>
                    <MainContent/>
                </div>
            </div>
        </div>
    )
}
