'use client';

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import ZafronUniversity from '@/components/University/ZafronUniversity';
import Image from 'next/image';

const Slides = () => {
  const progressCircle = useRef<React.SVGProps<SVGSVGElement> & { style: any }>(
    null
  );
  const progressContent = useRef<
    React.HTMLProps<HTMLSpanElement> & { textContent: any }
  >(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          // loop: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:h-[750px]">
            <div className="overflow-hidden ">
              <Image
                alt="content"
                className="object-cover object-center"
                src={'/assets/Zafronunivrsity.jpg'}
                height={737}
                width={1257}
              />
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div>
        <ZafronUniversity />
      </div>
    </>
  );
};

export default Slides;
