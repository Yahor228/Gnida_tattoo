import React, {useEffect} from "react";
import AppRoutes from "../routes/routes";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../SideBar/SideBar";
import {useDispatch} from "react-redux";
import {getCategories} from "../../featuers/categories/categoriesSlice";
import {getProducts} from "../../featuers/products/productSlice";
const App = () =>{

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getCategories());
        dispatch(getProducts());
    },[dispatch]);

    return(
        <div className="app">
            <Header/>

            <div className="container">
                <SideBar/>
                <AppRoutes/>

            </div>


            <Footer/>
        </div>
    );
};

export default App