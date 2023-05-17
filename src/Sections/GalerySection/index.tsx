import {
    GaleryContainer,
    GaleryContainerTitleParagraph,
    GaleryImagesContainer
} from "./style";
import Aos from 'aos';
import { useEffect } from 'react';

import GaleryImage1 from '../../Assets/Images/GaleryImage1.png'
import GaleryImage2 from '../../Assets/Images/GaleryImage2.png'
import GaleryImage3 from '../../Assets/Images/GaleryImage3.png'

export function GalerySection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })

    return (
        <>
            <GaleryContainer>
                <GaleryContainerTitleParagraph>
                    <h2 data-aos="zoom-in-down">Galeria</h2>
                    <p data-aos="zoom-in">
                        Se você está entediado com a aparência da decoração de interiores da casa comuns,
                        trabalhamos com designs diferentes e inovadores.
                    </p>
                </GaleryContainerTitleParagraph>
                <GaleryImagesContainer>
                    <img src={GaleryImage1} data-aos="zoom-in-up" />
                    <img src={GaleryImage2} data-aos="zoom-in-up" />
                    <img src={GaleryImage3} data-aos="zoom-in-up" />
                </GaleryImagesContainer>
            </GaleryContainer>
        </>
    )
}