import React from 'react';
import '../../../Style/kidsProduct.css';
import Header from '../../../Common/Header'
import "../../../Style/product.css"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { GoChevronDown } from "react-icons/go"
import Footer from '../../../Common/Footer';

function WomenProduct() {
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

                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-8 col-xl-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/s/a/7/32-1-button-highrise-black-tyffyn-original-imafpanyfbbmvkhg-bb.jpeg?q=70"} class="card-img-top" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/k6xxua80/jean/g/h/c/32-1-button-highrise-blue-tyffyn-original-imafpanypkrksgsj.jpeg?q=70"} class="card-img-top" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/k6xxua80/jean/g/h/c/26-1-button-highrise-blue-tyffyn-original-imafpanydf3vhst8.jpeg?q=70"} class="card-img-top" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/b/x/a/26-1-button-highrise-blue-tyffyn-original-imafwyffmw6n8fg9-bb.jpeg?q=70"} class="card-img-top" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/h/b/w/32-kttladiesjeans1021-kotty-original-imaghpvcjpgwxsnr.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/f/q/e/32-kttladiesjeans1021-kotty-original-imaghpvceucfmr4j.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/h/c/3/32-kttladiesjeans1021-kotty-original-imaghpvcvwquyehz.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/p/n/a/32-kttladiesjeans1021-kotty-original-imaghpvcgzf96kjp.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/t/7/d/6-12-months-mom-dad-adonyx-original-imagkv2ezwmdfw2p.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/z/f/q/6-12-months-mom-dad-adonyx-original-imagkv2ej3fhnh2q.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/w/h/c/1-2-years-mom-dad-adonyx-original-imagkv2ezrwmm8ya.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/i/w/j/1-2-years-mom-dad-adonyx-original-imagkv2emzpehygb.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/t/7/d/6-12-months-mom-dad-adonyx-original-imagkv2ezwmdfw2p.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/z/f/q/6-12-months-mom-dad-adonyx-original-imagkv2ej3fhnh2q.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/w/h/c/1-2-years-mom-dad-adonyx-original-imagkv2ezrwmm8ya.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/i/w/j/1-2-years-mom-dad-adonyx-original-imagkv2emzpehygb.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre" >
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/5/h/6/-original-imagpyvfkhdtbyuh.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/9/w/d/32-kttladiesjeans1028-kotty-original-imaghfbmzfkgvbna.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/n/e/m/32-kttladiesjeans1028-kotty-original-imaghfbmhm7a9hhu.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/v/y/p/32-kttladiesjeans1028-kotty-original-imaghfbmpzxggwaa.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/y/l/h/42-women-single-jeans-tyffyn-original-imagzfrndmfvucvh.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/n/g/s/42-women-single-jeans-tyffyn-original-imagzfrnyayn5kt8.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kmf7ki80/jean/6/4/a/32-women-single-jeans-tyffyn-original-imagfc4hmjuffahs.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/jean/k/d/o/32-women-single-jeans-tyffyn-original-imagfc4hrhqccfng-bb.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-ethnic-set/6/n/q/6-7-years-jute-green-32-deva-creation-original-imagmyrczzphhvxb.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-ethnic-set/q/3/5/6-7-years-jute-green-32-deva-creation-original-imagmyrczzghj7sy.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-ethnic-set/c/g/4/4-5-years-jute-green-28-deva-creation-original-imagmyrcg6fccmhh.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-ethnic-set/v/y/w/4-5-years-jute-green-28-deva-creation-original-imagmyrchdf5q9gh.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/t/7/d/6-12-months-mom-dad-adonyx-original-imagkv2ezwmdfw2p.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/z/f/q/6-12-months-mom-dad-adonyx-original-imagkv2ej3fhnh2q.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/w/h/c/1-2-years-mom-dad-adonyx-original-imagkv2ezrwmm8ya.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/i/w/j/1-2-years-mom-dad-adonyx-original-imagkv2emzpehygb.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/t/7/d/6-12-months-mom-dad-adonyx-original-imagkv2ezwmdfw2p.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/z/f/q/6-12-months-mom-dad-adonyx-original-imagkv2ej3fhnh2q.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/w/h/c/1-2-years-mom-dad-adonyx-original-imagkv2ezrwmm8ya.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/i/w/j/1-2-years-mom-dad-adonyx-original-imagkv2emzpehygb.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://sslimages.shoppersstop.com/sys-master/images/hbd/h2a/29420863520798/S23ANDGDRX189WI_WINE_alt4.jpg_2000Wx3000H"} class="card-img-top" alt="" />
                                    <img src={"https://sslimages.shoppersstop.com/sys-master/images/hb9/h38/29419958272030/S23ANDGDRX189WI_WINE.jpg_2000Wx3000H"} class="card-img-top" alt="" />
                                    <img src={"https://sslimages.shoppersstop.com/sys-master/images/h02/h76/29421970489374/S23ANDGDRX189WI_WINE_alt2.jpg_2000Wx3000H"} class="card-img-top" alt="" />
                                    <img src={"https://sslimages.shoppersstop.com/sys-master/images/h9e/he0/29420735987742/S23ANDGDRX189WI_WINE_alt1.jpg_2000Wx3000H"} class="card-img-top" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/t/7/d/6-12-months-mom-dad-adonyx-original-imagkv2ezwmdfw2p.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/z/f/q/6-12-months-mom-dad-adonyx-original-imagkv2ej3fhnh2q.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/w/h/c/1-2-years-mom-dad-adonyx-original-imagkv2ezrwmm8ya.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/i/w/j/1-2-years-mom-dad-adonyx-original-imagkv2emzpehygb.jpeg?q=70"} class="sliderimg" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/t/7/d/6-12-months-mom-dad-adonyx-original-imagkv2ezwmdfw2p.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/z/f/q/6-12-months-mom-dad-adonyx-original-imagkv2ej3fhnh2q.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/w/h/c/1-2-years-mom-dad-adonyx-original-imagkv2ezrwmm8ya.jpeg?q=70"} class="sliderimg" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/i/w/j/1-2-years-mom-dad-adonyx-original-imagkv2emzpehygb.jpeg?q=70"} class="sliderimg" alt="" />
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


export default WomenProduct