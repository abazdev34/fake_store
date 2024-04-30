import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import CardSk from './CardSk';
import Card from './Card';

const Slayder = () => {
    const slyder = useSelector((state) => state.slyder);
    const dispatch = useDispatch();

    return (
        <div>
            {
                slyder.map(el=>{
               <Card slyder={el} key={el.id}/>
             
                })
            }
        </div>
    );
};

export default Slayder;