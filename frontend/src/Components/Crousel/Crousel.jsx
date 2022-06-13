import Carousel from 'react-bootstrap/Carousel'
// import CarouselCaption from './CarouselCaption';
// import CarouselItem from './CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from 'react-router-dom';

export const Crousel = ()=>{
       
         return   <div id = "carousel">
         <Carousel>
            <Carousel.Item>
              <img style={{height:"400px",width:"100%"}}
                className="d-block w-100"
                src="https://cdn.shopclues.com/images/banners/2022/may/13/HB5_JDD_Web_Esha_13May22.jpg"
                 alt="First slide"
    
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to = "/"><img style={{height:"400px",width:"100%"}}
                className="d-block w-100"
                src={`https://cdn.shopclues.com/images/banners/2022/may/13/HB3_NewLaunch_Web_NCP_13May22.jpg`}
                 alt="Second slide"
                 
                 
              /></Link>
          
              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{height:"400px",width:"100%"}}
                className="d-block w-100"
                src={`https://cdn.shopclues.com/images/banners/2022/may/22/HB4_SpinandWin_Web_NCP_22May22.jpg`}
                 alt="Third slide"
                 
              />
          
              <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{height:"400px",width:"100%"}}
                className="d-block w-100"
                src="https://cdn.shopclues.com/images/banners/2022/may/22/HB1_SFM_Web_Esha_22May22.jpg"
                 alt="First slide"
                
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{height:"400px",width:"100%"}}
                className="d-block w-100"
                src={`https://cdn.shopclues.com/images/banners/2022/lp/timesale/time_sale_web_header_banner.jpg`}
                 alt="First slide"
                
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
          <br />
          </div>
          
}