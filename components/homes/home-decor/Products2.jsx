"use client";

import ProductCard11 from "@/components/shopCards/ProductCard11";
import { products14 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="d-flex flex-row px-0">
          <div className="flat-title align-items-start">
            <span className="title wow fadeInUp" data-wow-delay="0s">
              Best Seller
            </span>
            <p className="sub wow fadeInUp" data-wow-delay="0s">
              Find beautiful interior decor objects that create impact in any
              room
            </p>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-product-sell wrap-sw-over"
            slidesPerView={4}
            breakpoints={{
              768: { slidesPerView: 4 },
              480: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp151",
              nextEl: ".snbn151",
            }}
          >
            {[...products14]

              //   .sort((a, b) => (Math.random() > 0.5 ? -1 : 1))
              .map((product, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <ProductCard11 product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product-header box-icon w_46 round snbp151">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product-header box-icon w_46 round snbn151">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
