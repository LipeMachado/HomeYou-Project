import {
    GalleryContainer,
    GalleryContainerTitleParagraph,
    GalleryImagesContainer
} from "./style";
import Aos from 'aos';
import { useEffect } from 'react';

import GalleryImage1V from '../../../../Assets/Images/GalleryImage1V.png'
import GalleryImage2V from '../../../../Assets/Images/GalleryImage2V.png'
import GalleryImage3V from '../../../../Assets/Images/GalleryImage3V.png'

export function GallerySection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })

    return (
        <>
            <GalleryContainer>
                <GalleryContainerTitleParagraph>
                    <h2 data-aos="zoom-in-down">Galeria</h2>
                    <p data-aos="zoom-in">
                        Se você está entediado com a aparência da decoração de interiores da casa comuns,
                        trabalhamos com designs diferentes e inovadores.
                    </p>
                </GalleryContainerTitleParagraph>
                <GalleryImagesContainer>
                    <img src={GalleryImage1V} data-aos="zoom-in-up" />
                    <img src={GalleryImage2V} data-aos="zoom-in-up" />
                    <img src={GalleryImage3V} data-aos="zoom-in-up" />
                </GalleryImagesContainer>
            </GalleryContainer>
        </>
    )
}