import { Helmet } from 'react-helmet';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import Header from '../../../Shared/Header/Header';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title={'our menu'} description={'Would you like to try a dish?'}></Cover>
            <div className='mt-16 md:mt-20'>
                <Header title={`Don't miss`} subTitle={`TODAY'S OFFER`}></Header>
            </div>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} img={dessertBg} title={'dessert'} description={'Indulge in the ultimate dessert experience with our meticulously crafted sweet creations, made to enchant your senses and satisfy every craving.'}></MenuCategory>
            {/* pizza*/}
            <MenuCategory items={pizza} img={pizzaBg} title={'pizza'} description={'Savor the perfect fusion of crispy crust, gooey cheese, and fresh toppings in every slice of our handcrafted pizzas.'}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} img={saladBg} title={'salad'} description={'Refresh your palate with our vibrant salads, brimming with fresh greens, colorful veggies, and flavorful dressings.'}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} img={soupBg} title={'soup'} description={'Warm up with our hearty soups, made from scratch to offer comfort in every spoonful, perfect for every mood.'}></MenuCategory>
        </div>
    );
};

export default Menu;