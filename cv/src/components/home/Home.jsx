import React, {useEffect} from "react";
import Poster from "../poster/poster";
import Products from "../products/products";
import {useDispatch, useSelector} from "react-redux";
import Categories from "../Categories/categories";
import Banner from "../Banner/banner";
import {filterByPrice} from "../../featuers/products/productSlice";

const Home = () => {
  const dispatch  = useDispatch()
  const { products: { list, filtred },
          categories,

        } = useSelector((state) => state)

    useEffect(() =>{
      if(!list.length) return;

      dispatch(filterByPrice(100))
  }, [dispatch, list.length]);

  return (
    <>
      <Poster/>
      <Products products={list} amount={5} title ="Trending"/>
      <Categories products={categories.list} amount={5} title ="Worth seeing"/>
      <Banner></Banner>
      <Products products={filtred} amount={5} title ="Le"/>
    </>
  );
};

export default Home;
