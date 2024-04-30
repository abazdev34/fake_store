import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
const Meal = () => {
  const { mea } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
const product = useSelector((state) => state.products);

  // const getResults=(mea)=>{
  //     axios(` https://www.themealdb.com/api/json/v1/1/search.php?s=${mea}`)
  //     .then(({data})=>{
  //     setResults(data.meals)
  //     })
  // }
  const getResults = async (mea) => {
    try {
      setLoading(true);
      const link = await axios(
        ` =${mea}`
      );

      const { data } = await link;
      setTimeout(() => {
        setLoading(false);
        setResults(data.meals);
        setError(false);
      }, 1000);
    } catch (e) {
      setLoading(true);
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getResults(mea);
  }, [mea, error]);
  return (
    <div className="popular">
      <div className="popular">
        {loading ? (
          <h1>loading..</h1>
        ) : results ? (
          product.map((el) => (
            <div className="bloc" key={el.idMeal}>
              <Link to={`/seurc_meal/:${el.idMeal}`}>
                <img src={el.strMealThumb} alt="" />
              </Link>
              <h2>{product.title}</h2>
              <p>{el.strArea}</p>
            </div>
          ))
        ) : (
          <h1>Nothing is foud</h1>
        )}
      </div>
    </div>
  );
};

export default Meal;
