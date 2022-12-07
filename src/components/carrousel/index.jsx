import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import imgDoacao from '../../assets/images/imgDoacao.png';
import imgDoar from '../../assets/images/doacao2.png';
import imgMap from '../../assets/images/map.png';

export function ImgCaroussel() {
    return (
        <div style={{display: 'block', width: 1000, height: 10, alignContent: "center"}}>
        <Carousel indicators="true">
        <Carousel.Item>
            <img
              src={imgMap}
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imgDoacao}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imgDoar}
              alt="Image Two"
            />
          </Carousel.Item>
          </Carousel>
      </div>
    )
}