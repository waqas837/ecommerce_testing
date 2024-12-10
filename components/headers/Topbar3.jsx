"use client";

import { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Topbar3({
  parentClass = "announcement-bar bg_orange-2",
}) {
  useEffect(() => {
    var closeAnnouncement = function () {
      document
        .querySelectorAll(".close-announcement-bar")
        .forEach(function (btn) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            var announcementBar = this.closest(".announcement-bar");
            var height = announcementBar.offsetHeight + "px";

            announcementBar.style.marginTop = `-${height}`;

            setTimeout(function () {
              announcementBar.style.display = "none";
              announcementBar.remove();
            }, 600); // Simulating fadeOut with a timeout
          });
        });
    };
    closeAnnouncement();
  }, []);
  return (
    <div className={parentClass}>
      <div className="px_15 lg-px_40">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-md-4 col-12 text-center wrap-announcement-bar-2">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              speed={1000}
              autoplay={{ delay: 2000 }}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".snbp102",
                nextEl: ".snbn102",
              }}
            >
              <SwiperSlide className="swiper-slide">
                <p className="noti-bar-text text-white fw-5">
                  Welcome to our store
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p className="noti-bar-text text-white fw-5">
                  The best Nextjs theme
                </p>
              </SwiperSlide>
            </Swiper>
            <div className="navigation-topbar nav-next-topbar snbp102">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="navigation-topbar nav-prev-topbar snbn102">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
        <span className="icon-close close-announcement-bar" />
      </div>
    </div>
  );
}
