import React , {useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { BsBasket3Fill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import ImageChanger from './ImageChanger/ImageChanger';
const Header = () => {
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  const hGty = basket.reduce((acc, el) => {
    return acc + el.guantity;
  }, 0);

  const pPrace = basket.reduce((acc, el) => {
    return acc + el.price * el.guantity;
  }, 0);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const hendlNavigate = () => {
    navigate(`/seurch_meal/${search}`);
  };

  const handleEnter = (e) => {
    // console.log(e);
    if (e.code === "Enter") {
      navigate(`/seurch_meal/${search}`);
    }
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <NavLink to={"/Home"}>
            <IoMdHome />
          </NavLink>

          <h3>TACOLAND</h3>
          <input
            onChange={handleSearch}
            className="header--inp"
            type="text"
            placeholder="искать"
          />

					<NavLink to={"/image_changer"}>
						Image Changer
					</NavLink>
          <div className="nav">
            <NavLink to={"/liked"}>
              <FcLike />
            </NavLink>
            <div className="bts">
              <NavLink className="bas" to={"/basket"}>
                <SlBasket />
              </NavLink>
              {hGty > 0 ? (
                <div className="sena">
                  <p>{hGty}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
