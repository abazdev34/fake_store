import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../Redux/types";
import { RiDeleteBinLine } from "react-icons/ri";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const totalSum = basket.reduce((acc, el) => {
    return acc + el.price * el.guantity;
  }, 0);

  const totalQty = basket.reduce((acc, el) => {
    return acc + el.guantity;
  }, 0);
  return (
    <div className="basket">
      <div className="blocb">
        {totalQty > 0 ? (
          <div className="nf">
            <h6>корзина</h6>
            <p>{totalQty}</p>
          </div>
        ) : (
          ""
        )}

        {basket.map((item, idx) => (
          <div className="basket-block">
            <div className="basket-img">
              <img src={item.image} />
            </div>

            <div className="basket-gty">
              <h1>{item.title}</h1>

              <h1>{item.price * item.guantity}p</h1>
            </div>
            <div className="basket-d">
              <button
                className="b-btn2"
                onClick={() =>
                  dispatch({
                    type: actionTypes.DECREASE_QUATITY_FROM_BASKET,
                    payload: item.id,
                  })
                }
              >
                -
              </button>
              <h2>{item.guantity}</h2>
              <button
                className="b-btn1"
                onClick={() =>
                  dispatch({
                    type: actionTypes.ADD_PRODUCTS_TO_BASKET,
                    payload: item,
                  })
                }
              >
                +
              </button>
            </div>
            <div className="abaz">
              <button
                onClick={() =>
                  dispatch({
                    type: actionTypes.ROMEVE_PRODUCTS_FROM_BASKET,
                    payload: item.id,
                  })
                }
                className="b-btn3"
              >
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalQty > 0 ? (
        <div className="opsh">
          <h2>сума</h2>
          <h2>{totalSum} рубль</h2>

          <h2>{totalQty} Отовар</h2>
          {totalQty > 0 ? (
            <div className="chek">
              {basket.map((item) => (
                <div className="chev">
                  <p>{item.title}</p>
                  <h2>{item.guantity}</h2>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Basket;
