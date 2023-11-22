import React , {Fragment} from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import PopularMenu from '../components/PopularMenu';
import ChooseUs from '../components/ChooseUs';
import MenuPack from '../components/MenuPack';

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSlider/>
      <PopularMenu/>
      <ChooseUs/>
      <MenuPack/>
    </Fragment>
  );
};

export default Home
