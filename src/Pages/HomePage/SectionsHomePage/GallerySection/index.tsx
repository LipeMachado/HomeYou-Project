import {
    GalleryContainer,
    GalleryContainerTitleParagraph,
    GalleryImagesContainer
} from "./style";
import Aos from 'aos';
import { useEffect } from 'react';

import GalleryImage1 from '../../../../Assets/Images/GalleryImage1.png'
import GalleryImage2 from '../../../../Assets/Images/GalleryImage2.png'
import GalleryImage3 from '../../../../Assets/Images/GalleryImage3.png'

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
                    <img src={GalleryImage1} data-aos="zoom-in-up" />
                    <img src={GalleryImage2} data-aos="zoom-in-up" />
                    <img src={GalleryImage3} data-aos="zoom-in-up" />
                </GalleryImagesContainer>
            </GalleryContainer>
        </>
    )
}