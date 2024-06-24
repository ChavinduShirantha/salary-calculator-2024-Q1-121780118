import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";

export function MainContent() {
    return (
        <div className="w-full flex flex-wrap h-auto justify-center p-8">
            <Routes>
                <Route path="/" Component={Dashboard}></Route>
            </Routes>
        </div>
    )
}
