import styled from "styled-components";

export const GaleryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 55px 0;
    gap: 30px;

    @media only screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
    }
`;

export const GaleryContainerTitleParagraph = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;

    h2 {
        font-family: 'MontserratSemiBold';
        font-weight: 600;
        font-size: 32px;
    }

    p {
        font-family: 'MontserratMedium';
        font-weight: 500;
        font-size: 18px;
        width: 70%;

        @media only screen and (max-width: 480px){
            width: 100%;
        }
    }
`;

export const GaleryImagesContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    img {
        width: 350px;
        height: 450px;

        @media only screen and (max-width: 650px){
            width: 300px;
            height: 400px;
        }
    }

    @media only screen and (max-width: 1180px){
        grid-template-columns: 1fr 1fr;
    
        @media only screen and (max-width: 768px){
            grid-template-columns: 1fr;
        }
    }
`;