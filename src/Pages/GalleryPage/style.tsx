import styled from "styled-components";

export const GalleryContainerSectionDiv = styled.div`
    height: 86vh;
    overflow-y: scroll;
    background-color: #F9F9F9;
`;

export const GalleryContainerBoxSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 0 1rem 0 1rem;

    @media only screen and (max-width: 76.8rem){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        overflow: hidden;
    }

    .gallery-img {
        overflow: hidden;
    }

    .gallery-img.vertical {
        width: 30rem;
        height: auto;
        grid-area: A;
    }

    .gallery-img.small {
        width: 30rem;
        height: 26rem;
    }

    .gallery-img.middle {
        display: flex;
        justify-content: center;
        width: 65rem;
        height: 36rem;
    }

    img {
        height: 100%;
        object-position: center;
        object-fit: cover;

        @media only screen and (max-width: 76.8rem){
            width: 100%;
        }
    }
`;

export const GalleryLeftDiv = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-areas: 
        'A B'
        'A C'
    ;

    @media only screen and (max-width: 76.8rem){
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }
`;

export const GalleryMiddleDiv = styled.div`

`;

export const GalleryRightDiv = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-areas: 
        'B A'
        'C A'
    ;

    @media only screen and (max-width: 76.8rem){
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }
`;