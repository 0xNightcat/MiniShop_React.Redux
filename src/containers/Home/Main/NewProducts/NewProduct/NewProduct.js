import './NewProduct.scss';
import { Col, Card, Row } from 'react-bootstrap';
import MyButton from '../../../../../components/UI/Button/MyButton';

// new product component
function NewProduct({ Newprods }) {
  return (
   <div className='mt-5'>
      <Row>
      {
         Newprods ? Newprods.map((product) => {
            return (
               <Col key={product.id} md={3}>
                  <Card className='text-center'>
                     <Card.Img src={`${product.src}`}  className='m-auto' />
                     <Card.Title>{product.name}</Card.Title>
                     <Card.Body>
                        <div className='price'>
                           قیمت: <span>{product.price} تومان</span>
                        </div>
                        <div className='category'>
                           <span>{product.category}</span>
                        </div>
                        <MyButton class='add block mt-3'>مشاهده محصول</MyButton>
                     </Card.Body>
                  </Card>
               </Col>
            )
         }) : null
      }
      </Row>
   </div>
  )
}

export default NewProduct;