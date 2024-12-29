
import { useEffect, useState } from 'react';
import Header from '../../../Shared/Header/Header';
import ChefCard from './ChefCard';

const ChefRecommends = () => {
        const [menu, setMenu] = useState([]);
        useEffect(()=>{
            fetch('menu.json')
            .then(res=> res.json())
            .then(data=>{
                const popularItems = data.slice(0,3)
                setMenu(popularItems)
            })
        },[])
    return (
        <section className='w-[90%] mx-auto max-w-7xl my-16 md:my-20'>
            <Header title={'Should Try'} subTitle={'CHEF RECOMMENDS'}></Header>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    menu.map(item=> <ChefCard key={item._id} item={item}></ChefCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;