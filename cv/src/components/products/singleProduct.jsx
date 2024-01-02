import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

import { useGetProductQuery } from "../../featuers/api/apiSlice";


const SingleProduct = () => {
    const{ id } = useParams();
    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

     console.log('ID:', id);
     console.log(data);
    const navigate = useNavigate();
    // useEffect(() => {
    //     if(!isFetching && isLoading && !isSuccess){
    //         navigate(ROUTES.HOME);
    //     }
    // }, [isLoading, isFetching, isSuccess]);

    return (
        <div>
            Single Product
        </div>
    );
};

export default SingleProduct;
