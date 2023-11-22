import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {popularMenuFood} from '../assets/fake-data/products'
import ProductCart from './ProductCart';
const PopularMenu = () => {
  return (<section className='pt-0'>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h2>Popular food menu</h2>
        </Col>

        {
          popularMenuFood.map(item=>(
            <Col lg='3' key={item.id}>
              <ProductCart item={item}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  </section>
  );
};

export default PopularMenu
