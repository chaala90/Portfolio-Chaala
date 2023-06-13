import React, { useEffect, useState } from "react";
import { useData } from "../../containers/context/index";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Slider.scss";

const Slider = () => {
  const { data } = useData();
  return (
      <>
      {data && data.donnees && data.donnees.length > 0 && (
        <Carousel
          additionalTransfrom
          arrows
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite={true}
          customTransition="translateY 300ms ease-in-out"
          transitionDuration={500}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 5,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 4,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          
         /* */ // Durée de l'animation de défilement en millisecondes
        >

          {data?.donnees?.map((donnee) => (
            <div id="slider" className="border" key={donnee.title}>
              <img className="skills" src={donnee.cover} alt="skills"/>
              <h3>{donnee.title}</h3>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Slider;