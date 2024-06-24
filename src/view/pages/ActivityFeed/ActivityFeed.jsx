import profile1 from "../../../images/profile1.png";
import profile2 from "../../../images/profile2.png";


export function ActivityFeed() {
    return (
        <div className="p-2">
            <h1 className="bg-[#FFFFFF] font-medium mb-0 text-[16px] p-3 border-1 border-[#E4E7EC] rounded-top-2">Activity
                Feed</h1>
            <div className="bg-[#FFFFFF] font-normal mb-0 text-[14px] p-3 border-1 border-[#E4E7EC] rounded-bottom-2">
                <div className="border-b-[.5px] border-[#EAECF0]">
                    <div className="flex">
                        <img className="h-[32px] ml-2 mr-5" src={profile1} alt=""/>
                        <p className="text-[14px] font-sans font-normal"><span
                            className="font-semibold">Kushantha Charuka</span> created <span
                            className="font-semibold text-[#BC006D]">Contract #00124 need John Beige’s signature</span>
                        </p>
                    </div>
                    <small className="text-12px font-normal text-[#757575] ml-14">Sep 16, 2022 at 11:30 AM</small>
                </div>
                <div className="border-b-[.5px] border-[#EAECF0] mt-4">
                    <div className="flex">
                        <img className="h-[32px] ml-2 mr-5" src={profile2} alt=""/>
                        <p className="text-[14px] font-sans font-normal">Lorem ipsum <span
                            className="font-semibold">dolor sit amet</span>, consectetur adipiscing elit.<span
                            className="font-semibold">Maecenas </span> pretium neque
                        </p>
                    </div>
                    <small className="text-12px font-normal text-[#757575] ml-14">Sep 16, 2022 at 11:45 AM</small>
                </div>
                <div className="mt-4">
                    <div className="flex">
                        <img className="h-[32px] ml-2 mr-5" src={profile2} alt=""/>
                        <p className="text-[14px] font-sans font-normal">Lorem ipsum <span
                            className="font-semibold">dolor sit amet</span>, consectetur adipiscing elit.<span
                            className="font-semibold">Maecenas </span> pretium neque
                        </p>
                    </div>
                    <small className="text-12px font-normal text-[#757575] ml-14">Sep 16, 2022 at 11:45 AM</small>
                </div>

            </div>
        </div>
    )
}
