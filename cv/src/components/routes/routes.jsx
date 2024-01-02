import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import {ROUTES} from "../../utils/routes";
import SingleProduct from "../products/singleProduct";
const AppRoutes = () => (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}></Route>
        </Routes>
    );

export default AppRoutes