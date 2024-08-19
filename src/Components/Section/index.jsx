import { Container, Content } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
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
                    slidesPerView={4}
                    navigation={true}
                    modules={[Navigation]}
                    >
                      {
                        children.map(child =>  <SwiperSlide className="mySwiper">{child}</SwiperSlide>)
                      }
                </Swiper>
            </Content>
        </Container>
    )
}