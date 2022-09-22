import React from 'react'
import "./headerBanner.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
  } from 'swiper';
SwiperCore.use([Autoplay,EffectFade,Navigation,Pagination]);

export default function HeaderBanner() {
  return (
    <div className='header-banner'>
        <Swiper spaceBetween={30} slidesPerView={1} effect={'fade'}  autoplay={{delay:4000}} loop >
            <SwiperSlide>
                <div className="banner-elt">
                    <div className="banner-elt-text">
                        <h2>
                            More than 60,000 TV 
                        </h2>
                        <h2>
                            Channels
                        </h2>
                        <h4>
                            10,000 to 24,000 VODs 
                        </h4>
                        <pre>
                            Watch your favorite TV Shows, Movies, Live Shows, News Channels,{"\n"}
                            Sports Games, Live Events, Cartoons for your children and even more.
                        </pre>
                        <span>
                            4K HD Quality
                        </span> 
                    </div>
                    <img src={`/images/headerBannerImgs/slide_01.jpg`} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="banner-elt">
                    <div className="banner-elt-text">
                        <h2>
                            Get Ready for all football
                        </h2>
                        <h4>
                            Don’t lose your favorite match
                        </h4>
                        <pre>
                            We offer a large variety of sports TV channels that supports live football matches.{"\n"}
                            Select your interested period offer and enjoy watching your favorite team games.
                        </pre>
                        <span>
                            Channels and VODs update continually! 
                        </span> 
                    </div>
                    <img src={`/images/headerBannerImgs/slide_02.jpg`} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="banner-elt">
                    <div className="banner-elt-text">
                        <h2>
                            Get Ready for all football
                        </h2>
                        <h4>
                            Don’t lose your favorite match
                        </h4>
                        <pre>
                            We offer a large variety of sports TV channels that supports live football matches.{"\n"}
                            Select your interested period offer and enjoy watching your favorite team games.
                        </pre>
                        <span>
                            Channels and VODs update continually! 
                        </span> 
                    </div>
                    <img src={`/images/headerBannerImgs/slide_03.jpg`} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="banner-elt">
                    <div className="banner-elt-text">
                        <h2>
                            Get Ready for all football
                        </h2>
                        <h4>
                            Don’t lose your favorite match
                        </h4>
                        <pre>
                            We offer a large variety of sports TV channels that supports live football matches.{"\n"}
                            Select your interested period offer and enjoy watching your favorite team games.
                        </pre>
                        <span>
                            Channels and VODs update continually! 
                        </span> 
                    </div>
                    <img src={`/images/headerBannerImgs/slide_04.jpg`} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="bg-diagonal"></div>
    </div>
  )
}
