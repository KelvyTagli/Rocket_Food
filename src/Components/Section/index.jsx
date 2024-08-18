import { Container, Content } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { register } from "swiper/element";

register();

export function Section({title, children}) {
    
    return(
        <Container>
            <h2>{title}</h2>
            <Content>
                <Swiper
                    slidesPerView={1}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    >
                    
                   <SwiperSlide className="mySwiper">
                        {children}
                   </SwiperSlide>
                </Swiper>
            </Content>
        </Container>
    )
}