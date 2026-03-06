import { Container, Content } from "./styles";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { register } from "swiper/element";
import { Navigation } from 'swiper/modules';

register();

export function Section({title, children}) {
    
    return(
        <Container>
            <h2>{title}</h2>
            <Content>
                <Swiper
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    >
                      {
                        children.map(child =>  <SwiperSlide key={child.key} className="mySwiper">{child}</SwiperSlide>)
                      }
                </Swiper>
            </Content>
        </Container>
    )
}