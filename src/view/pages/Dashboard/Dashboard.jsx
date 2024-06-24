import img from "../../../images/Group1770.png";
import close from "../../../images/Close.png";

export function Dashboard() {
    return (
        <div className="flex flex-wrap border-2 h-fit w-full rounded-lg">
            <div className="w-full flex justify-between">
                <h1 className="text-[24px] font-semibold font-sans ml-4 mt-4 mb-1">Welcome back, John Doe</h1>
                <img className="h-[9em] absolute right-28" src={img} alt=""/>
                <img className="h-[24px] mr-4 mt-4" src={close} alt=""/>
            </div>
            <div className="ml-4 mb-4">
                <p className="text-[14px] font-normal font-sans">The end of the year is coming. Are you planning
                    your performance interviews? You can do this super efficiently with Acmy.</p>
                <span className="text-[14px] text-[#BC006D] font-normal font-sans hover:cursor-pointer underline">Look here for more information</span>
            </div>
        </div>
    )
}
