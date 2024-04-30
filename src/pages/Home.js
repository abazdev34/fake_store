import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'


const Home = () => {
    const products=useSelector(state=>state.products)

    const dispatch=useDispatch()


    
    return (
      <div className="container">
        <div className="bloc">
          {products.map((item) => (
            <Card product={item} key={item.id} />
            
          ))}
        </div>
        
      </div>
    );
};

export default Home;