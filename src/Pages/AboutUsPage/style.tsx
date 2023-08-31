import styled from "styled-components";

import AboutUsBanner from '../../Assets/Images/AboutUs.jpg'

export const AboutUsContainerSectionDiv = styled.div`
    height: 68vh;
    background-image: url(${AboutUsBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const AboutUsFilterDiv = styled.div`
    backdrop-filter: brightness(30%);
    height: 100%;
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
`;

export const AboutUsParagraphDiv = styled.div`
    max-width: 50%;
    line-height: 2rem;
    font-size: 1rem;
`;