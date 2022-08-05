import React from 'react';
import "./Home.css";
import Product from './Product';

function Home(){
    return(
        <div className="home">
            <div className="home__container">
          
               <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" alt = "amazon original"/>
            
           </div>
          
            <div className="home__row">
                <Product id= "1" title='Lenovo Legion 5 Pro Intel Core i7 11th Gen 16"(40.64cm) 500nits WQXGA Gaming Laptop' price={192990} image="https://m.media-amazon.com/images/I/71glTO3lJNL._SX679_.jpg" rating={4} totalRating={786}/>

                <Product id="2"  title="2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey" price={329900} image="https://m.media-amazon.com/images/I/61aUBxqc5PL._SX679_.jpg" rating={5} totalRating={1012}/>
            </div>
            <div className="home__row">
                <Product id="3"  title="Apple Watch Series 7 (GPS, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular" price={44900} image= "https://m.media-amazon.com/images/I/71fxj9HPLPL._SX679_.jpg" rating={4} totalRating={1869}/>

                <Product id="4"  title="New Apple AirPods (3rd Generation)" price={17500} image= "https://m.media-amazon.com/images/I/615ekapl+pL._SX679_.jpg" rating={4} totalRating={960}/>

                <Product id="5"  title="Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)" price={1699} image= "https://images-eu.ssl-images-amazon.com/images/I/21NRFbsQoEL._SX342_SY445_QL70_FMwebp_.jpg" rating={4} totalRating={45303}/>
            </div>
            <div className="home__row">
            <Product id="6"  title="Samsung QA98QN90A 98 Inch LED 4K, 3840 X 2160 Pixels TV" price={1897000} image= "https://img4.gadgetsnow.com/gd/images/products/additional/original/G367885_View_1/electronics/televisions/samsung-qa98qn90a-98-inch-led-4k-3840-x-2160-pixels-tv.jpg" rating={4} totalRating={568}/>

            <Product id="7"  title="Apple iPhone 13 Pro Max (512GB) - Sierra Blue" price={155900} image="https://pngimg.com/uploads/iphone_13/iphone_13_PNG29.png" rating={5} totalRating={988}/>

            <Product id="8"  title="Creative 3D Car Wheel Rotating Watch Men" price={12000} image="https://m.media-amazon.com/images/I/61MzRVRAOhL._UX679_.jpg" rating={3} totalRating={15000}/>
            <Product id="9"  title="Nvidia RTX A4000 with 16GB of GDDR6 Memory(ECC) 6144 CUDA Cores DirectX 12" price={79999} image="https://m.media-amazon.com/images/I/41al1qSKQOL._SX522_.jpg" rating={5} totalRating={14980}/>
            </div>
        </div>
    )
}
export default Home;