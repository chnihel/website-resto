import React,{useState,useEffect} from 'react'
import { Container, Row, Col} from 'reactstrap'
import ProductCart from './ProductCart'
import { fastFoodProducts,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } from '../assets/fake-data/products'
import './menuPack.css'
const MenuPack = () => {

  const [filter,setFilter] = useState('REIC-MENU')
  const [products, setProducts] = useState (riceMenuProducts)

  useEffect(() =>{
    if(filter =='RICE-MENU'){
      setProducts(riceMenuProducts)
    }
    if (filter == 'FAST-FOOD'){
      setProducts(fastFoodProducts)
    }
    if (filter =='PIZZA'){
      setProducts(pizzaProducts)
    }
    if (filter =='DESSERT'){
      setProducts(dessertProducts)
    }
    if (filter =='COFFE'){
      setProducts(coffeeProducts)
    }
  },[filter])
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-4'>
            <h3 className='menu__title'>Our Menu Pack</h3>
          </Col>
          <Col lg='12' className='text-center mb-5'>
             <button className={`filter-btn ${filter === 'FAST-FOOD' ? 'active__btn' : ''}`} onClick={() => setFilter('FAST-FOOD')}>Fast Food</button>

             <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`} onClick={()=> setFilter('RICE-MENU')}>Rice Menu</button>
             <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={()=> setFilter('PIZZA')}>Pizza</button>
             <button className={`filter-btn ${filter === 'DESSERT' ? 'active__btn' : ''}`} onClick={()=> setFilter('DESSERT')}>Desserts</button>
             <button className={`filter-btn ${filter === 'COFEE' ? 'active__btn' : ''}`} onClick={()=> setFilter('COFFE')}>Coffee</button>
          </Col>

          {
            products.map(item=>(
              <Col lg='3' key={item.id} className='mb-4'>
                {" "}
                <ProductCart item={item}/></Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default MenuPack
