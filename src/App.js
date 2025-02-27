import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route><Route path="/*" Component={DefaultLayout}></Route></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
