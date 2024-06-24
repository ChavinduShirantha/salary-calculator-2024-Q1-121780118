import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";

export function MainContent() {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Dashboard}></Route>
            </Routes>
        </div>
    )
}
