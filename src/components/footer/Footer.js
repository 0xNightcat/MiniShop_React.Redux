import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './Footer.scss';

import elnemad from '../../assets/images/Enemad/1.png';
import etnemad from '../../assets/images/Enemad/2.png';
import brand from '../../assets/images/logo/logo.png';

function Footer() {
  return (
    <footer className='footer'>
        <Container>
          <div className='footer-top'>
            <Row className='align-items-center'>
              <Col md={6}>
                <div className='footer-right'>
                  <Image src={brand} />
                  <h4>تاینی مارکت</h4>
                </div>
              </Col>
              <Col md={6}>
                <div className='footer-social'>
                  <ul>
                    <li><a href='#'><i className='fa fa-telegram'></i></a></li>
                    <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                    <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                    <li><a href='#'><i className='fa fa-youtube-play'></i></a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <Row className='bottom-row'>
            <Col md={5}>
              <div className='info'>
                <p>
                  فروشگاه اینترنتی تاینی مارکت یکی از برترین برندها  
                  در بین چندین برند در این حوزه می باشد. تاینی مارکت با افتخار
                  تمامی محصولات را بصورت اورجینال و با تضمین خدمت کاربران                   
                  محترم تقدیم نموده و از این نظر احترام ویژه ای برای 
                  مشتریان خود دارد. امید است بتوانیم تجربه های خوبی 
                  برای مشتریان خود داشته باشیم.
                </p>
              </div>
            </Col>
            <Col md={2}>
              <ul>
                <li><a href='#'>خانه</a></li>
                <li><a href='#'>فروشگاه</a></li>
                <li><a href='#'>درباره ما</a></li>
                <li><a href='#'>ارتباط با ما</a></li>
                <li><a href='#'>سوالات متداول</a></li>
              </ul>
            </Col>
            <Col md={2}>
            <ul>
                <li><a href='#'>پوشاک</a></li>
                <li><a href='#'>تکنولوژی</a></li>
                <li><a href='#'>لوازم خانگی</a></li>
                <li><a href='#'>لوازم آرایشی</a></li>
                <li><a href='#'>لوازم تحریر</a></li>
              </ul>
            </Col>
            <Col md={2}>
              <div className='nemad'>
                <Image src={elnemad} />
                <Image src={etnemad} />
              </div>
            </Col>
          </Row>
          <Row className='last-row'>
            <div className='copyright'>
              <p>تمامی حقوق این وبسایت متعلق به تاینی مارکت می باشد</p>
            </div>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer;