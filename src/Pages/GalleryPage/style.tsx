import styled from "styled-components";

export const GalleryContainerSectionDiv = styled.div`
    height: 86vh;
    overflow-y: scroll;
`;

export const GalleryContainerBoxSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

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
    }
`;

export const GalleryLeftDiv = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-areas: 
        'A B'
        'A C'
    ;
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
`;