import React, {} from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ImageSlider = (props) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <>
            <Carousel {...settings}>
                <Wrap>
                    <img src='/images/002.jpg' alt='image' />
                </Wrap>
                <Wrap>
                    <img src='/images/007.jpg' alt='image' />
                </Wrap>
                <Wrap>
                    <img src='/images/014.jpg' alt='image' />
                </Wrap>
            </Carousel>
        </>
    );
}
const Carousel = styled(Slider)`
    
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s
        }
    }
    
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }
    
    .slick-list {
        overflow: initial;
    }
    
    .slick-prev {
        left: 1rem;
    }
    
    .slick-next {
        right: 1rem;
    }
    
   
`;

const Wrap = styled.div`
    border-radius: 4px;
    position: relative;
    
    img {
            width: 100%;
            height: 42vh;
            object-fit: cover
        }
    }
    @media(max-width: 400) {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover
        }
    }
`;
export default ImageSlider;