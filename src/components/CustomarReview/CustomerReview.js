import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const CustomerReview = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h1 className="text-start py-3">Customer Review</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 1500,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="py-2">
                        <SwiperSlide>
                            <div className="review_container text-start shadow m-3 p-2 rounded-3">
                                <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ea impedit nam
                                        praesentium maiores vitae expedita.
                                    </p>
                                </div>
                                <div className="customer bg-dark bg-gradient py-2 mt-1 ps-3 text-white rounded-3">
                                    <h5>Laura Willson</h5>
                                    <small>Feb 05, 2020</small>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review_container text-start shadow m-3 p-2 rounded-3">
                                <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ea impedit nam
                                        praesentium maiores vitae expedita.
                                    </p>
                                </div>
                                <div className="customer bg-dark bg-gradient py-2 mt-1 ps-3 text-white rounded-3">
                                    <h5>Rafael Marquez</h5>
                                    <small>Dec 19, 2020</small>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review_container text-start shadow m-3 p-2 rounded-3">
                                <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ea impedit nam
                                        praesentium maiores vitae expedita.
                                    </p>
                                </div>
                                <div className="customer bg-dark bg-gradient py-2 mt-1 ps-3 text-white rounded-3">
                                    <h5>Richard Davis</h5>
                                    <small>Feb 14, 2020</small>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review_container text-start shadow m-3 p-2 rounded-3">
                                <div className="review-text bg-light bg-gradient p-4 rounded-3">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ea impedit nam
                                        praesentium maiores vitae expedita.
                                    </p>
                                </div>
                                <div className="customer bg-dark bg-gradient py-2 mt-1 ps-3 text-white rounded-3">
                                    <h5>Adrian Lewis</h5>
                                    <small>Dec 13, 2020</small>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default CustomerReview;
