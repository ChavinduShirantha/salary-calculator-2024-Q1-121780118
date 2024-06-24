import dashboard_img from '../../../images/Dashboard.png';
import {Link} from "react-router-dom";

export function SideBar() {
    return (
        <div className="relative mx-auto h-screen">
            <div className="bg-[#EBE6ED] bg-opacity-10 w-[272px] h-[80px] ">
                <h1 className="text-white text-center text-[24px] font-semibold font-sans pt-4">Acmy Solutions</h1>
            </div>
            <div className="w-full h-fit mt-14 pl-4 flex flex-wrap">
                <Link className="text-decoration-none" to="/">
                    <button className="flex bg-[#EBE6ED] bg-opacity-10 mb-4 h-[40px] w-[240px] rounded-3xl text-white
                               text-[16px] text-left font-normal font-sans p-2"><img className="flex pr-2"
                                                                                     src={dashboard_img}
                                                                                     alt=""/> Dashboard
                    </button>
                </Link>
            </div>
        </div>
    )
}
