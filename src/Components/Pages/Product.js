import React from 'react'
import Header from '../../Common/Header'
import "../../Style/product.css"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { GoChevronDown } from "react-icons/go"
import Footer from '../../Common/Footer';

function Product() {
    return (
        <div>
            <Header />
            <div class="itemnumber">
                <span style={{ fontSize: "26px", marginLeft: "53px" }}>Eorssm <p style={{ fontSize: "20px", position: "relative", top: "5px", fontWeight: 300 }}>- 85 items</p> </span>
            </div>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3 ">
                        <div class="row">
                            <div class="col-3">
                                <div class="cards">
                                    <div class="card-body">
                                        <h2 class="card-text">Filters</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-9 ">
                        <div class="row">
                            <div class="col-3">
                                <div class="card-body">
                                    <p class="card-text">Air,Fuel,Emission & Exhaust</p>
                                </div>
                            </div>

                            <div class="col-3">
                                <div class="card-body">
                                    <p class="card-text" style={{ display: "flex", justifyContent: "end" }}>Electronics & Navigation</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-2">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-xl-12" >
                        <hr />
                    </div>
                </div>
            </div>


            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-xl-2">
                        <div class="row">

                            <div class="col-12">
                                <p class="category">CATEGORIES</p>
                                <form>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Smart watch(40)</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="bands" name="bands" value="bands" />
                                        <label for="subscribeNews">Fitness Bands(3)</label>
                                    </div>
                                    <hr></hr>
                                    <h2 class="category">BRAND</h2>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Fire-Boltt(40)</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Noise(20)</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">BoAt(10)</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Realme(8)</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">HAMMER(4)</label>
                                    </div>
                                    <hr></hr>
                                    <h2 class="category">PRICE</h2>

                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Rs.999 to Rs.5749</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Rs.5749 to Rs.8449</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Rs.9999 to Rs.12549</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Rs.13500 to 18500</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Rs.19000 to Rs.25500</label>
                                    </div>
                                    <hr></hr>

                                    <h2 class="category">COLOR</h2>

                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Black</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Blue</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Grey</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Pink</label>
                                    </div>
                                    <div class="filtres">
                                        <input type="checkbox" id="watch" name="watch" value="watch" />
                                        <label class="n" for="subscribeNews">Green</label>
                                    </div>
                                    <hr></hr>
                                </form>
                            </div>

                            <div class="col-3">
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-8 col-xl-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">

                                <AliceCarousel autoPlay autoPlayInterval="2500" style={{ width: "10px" }} class="hovre">

                                    <img src={"https://m.media-amazon.com/images/I/715tMn+N6uL._SX679_.jpg"} class="card-img-top" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/61bzqhQXbIL._SX679_.jpg"} class="card-img-top" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/61XcbHhJnjL._SX679_.jpg"} class="card-img-top" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/610d5dbMf1L._SX679_.jpg"} class="card-img-top" alt="" />

                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" style={{ width: "40px" }}>
                                    <img src={"https://m.media-amazon.com/images/I/61xUszFF0xL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/71lmBZZHbwL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/61jNYtCyUcL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/611jc6k2fLL._SX679_.jpg"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" style={{ width: "40px" }}>
                                    <img src={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1675178955/Croma%20Assets/Communication/Wearable%20Devices/Images/246684_3_pqhsqa.png/mxw_2256,f_auto"} class="sliderimg" alt="" />
                                    <img src={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1675178954/Croma%20Assets/Communication/Wearable%20Devices/Images/246684_2_bxetor.png/mxw_2256,f_auto"} class="sliderimg" alt="" />
                                    <img src={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1675178947/Croma%20Assets/Communication/Wearable%20Devices/Images/246684_1_ghcl1x.png/mxw_2256,f_auto"} class="sliderimg" alt="" />
                                    <img src={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1675178957/Croma%20Assets/Communication/Wearable%20Devices/Images/246684_0_m6sbj5.png/mxw_2256,f_auto"} class="sliderimg" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" >
                                    <img src={"https://m.media-amazon.com/images/I/71PnmS24PdL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/71pnoRH4MaL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/71EeViWxY0L._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/41c64oyhXrL._SX300_SY300_QL70_FMwebp_.jpg"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://m.media-amazon.com/images/I/61-8450yNkL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/61cSMrIDRfL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/71rrzNqSWQL._SX679_.jpg"} class="sliderimg" alt="" />
                                    <img src={"https://m.media-amazon.com/images/I/51vHAEYKeWL._SX300_SY300_QL70_FMwebp_.jpg"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}
export default Product

