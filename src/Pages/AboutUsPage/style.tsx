import styled from "styled-components";

import AboutUsBanner from '../../Assets/Images/AboutUs.jpg'

export const AboutUsContainerSectionDiv = styled.div`
    height: 63vh;
    background-image: url(${AboutUsBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 778px){
        height: 100vh;
    }
`;

export const AboutUsTextsSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 3rem;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
`;

export const AboutUsTitleDiv = styled.div`
    font-size: 3rem;

    @media only screen and (max-width: 1105px){
        font-size: 2rem;
    }

    @media only screen and (max-width: 568px){
        font-size: 1.5rem;
    }
`;

export const AboutUsParagraphDiv = styled.div`
    max-width: 50%;
    line-height: 2rem;
    font-size: 1rem;

    @media only screen and (max-width: 778px){
        max-width: 80%;
    }

    @media only screen and (max-width: 568px){
        max-width: 100%;
    }
`;