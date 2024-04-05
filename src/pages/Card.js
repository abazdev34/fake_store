import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../Redux/types';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import { FaHeart } from "react-icons/fa";
=======
import { CiHeart } from "react-icons/ci";
>>>>>>> b513a5415fb1416100a0fc424c674dfd3571fc9f

const Card = ({product}) => {
const notify = (str) => toast(str);

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket)
    const liked = useSelector((state) => state.liked);

    const isAdded=basket.find(el=>el.id===product.id)
    const isliked = liked.find((el) => el.id === product.id);

    console.log(isAdded);
    return (
      <div className="bloc">
      
        <div className="blocs">
          <img src={product.image} />
          <h1>{product.title}</h1>
          <hr/>
          <p>{product.description}</p>
          <h1>{product.price}рубль</h1>
          <div className="btn">
            {isAdded ? (
              <button className="btn1" onClick={() => navigate("/basket")}>
                перейти в корзину
              </button>
            ) : (
              <button
<<<<<<< HEAD
              className='b-add-to-basket'
=======
>>>>>>> b513a5415fb1416100a0fc424c674dfd3571fc9f
                onClick={() => {
                  notify("добавлен в корзину");
                  dispatch({
                    type: actionTypes.ADD_PRODUCTS_TO_BASKET,
                    payload: product,
                  });
                }}
              >
                Добавить в
              </button>
            )}
            <button
              onClick={() => {
                dispatch({
                  type: actionTypes.ADD_PRODUCTS_TO_LIKED,
                  payload: product,
                });
                notify("добавлен в избранное");
              }}
              className="b-btn3"
            >
<<<<<<< HEAD
              <FaHeart 
                style={{
                  color: isliked ? "red" : "" ,
=======
              <CiHeart
                style={{
                  color: isliked ? "" : "red",
>>>>>>> b513a5415fb1416100a0fc424c674dfd3571fc9f
                  fontSize: "20px",
                  width: "20px",
                }}
              />
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    );
};

export default Card;