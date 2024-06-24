import bell from '../../../images/Bell-off.png';
import profile from '../../../images/Profile.png';
import chevron from '../../../images/Chevron-down.png';

export function NavBar() {
    return (
        <div className="w-full p-2 shadow-lg flex justify-between h-[80px]">

            <div className="flex">
                <h1 className="ml-2 mt-4 text-black text-center text-[20px] font-semibold font-sans">Dashboard</h1>
            </div>


            <div className="flex flex-wrap">
                <img className="flex pr-5 mt-4 h-[24px]" src={bell} alt=""/>

                <img className="flex pr-1 mt-2 h-[40px]" src={profile} alt=""/>

                <img className="flex pr-5 mt-4 h-[24px]" src={chevron} alt=""/>
            </div>
        </div>
    )
}
