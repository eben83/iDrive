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
                    <a>
                        <img src='/images/002.jpg' alt='image' />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='/images/007.jpg' alt='image' />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='/images/014.jpg' alt='image' />
                    </a>
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
    cursor: pointer;
    position: relative;
    
    a {
        border-radius: 4px;
        box-shadow: rgb (0 0 0 / 69%) 0 26px 30px -10px,
                    rgb (0 0 0 / 73%) 0 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        
        img {
            width: 100%;
            height: 42vh;
            object-fit: cover
        }
        
        &:hover {
            padding: 0;
            border: 4px solid rgba(249,249,249,0.8);
            transition-duration: 300ms;
        }
    }
`;
export default ImageSlider;