import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="ex"
        />
        <div className="home__row">
          <Product
            id={164743}
            title="The Lean Startup"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={938572}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, DOugh Hook and Whisk, 5 Litre Class Bowl"
            price={239.0}
            rating={4}
            image="https://images.homedepot-static.com/productImages/8e9ac8a0-7e72-44bf-baae-e0f8229c01d3/svn/white-cuisinart-stand-mixers-sm-50-64_600.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={337583}
            title="Brand New Fitbit Inspire HR Activity Tracker + Heart Rate - Black"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={123842}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Light Fabric"
            price={98.99}
            rating={5}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWzjKA650ZqBQ1o_k6TogH8PHPbv_Kjnfsod1Lq0pN8lYSVYQTVBaIwlmMG7WHcNnr4iykDv8cHnIk8sACf7WqdFgkz9KF"
          />
          <Product
            id={850274}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation"
            price={599.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583551131102"
          />
        </div>
        <div className="home__row">
          <Product
            id={235761}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
            price={1099.99}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/0286/6960/8020/products/71_Qph9E_RL._AC_SL1500_1024x1024@2x.jpg?v=1594467906"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
