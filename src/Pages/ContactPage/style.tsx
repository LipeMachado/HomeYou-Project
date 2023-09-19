import styled from "styled-components";
import ContactBackgroundPage from '../../Assets/Images/ContactBackgroundImage.png'

export const ContactContainerSectionDiv = styled.div`
    height: 63vh;
    background-image: url(${ContactBackgroundPage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #F9F9F9;

    @media only screen and (max-width: 900px){
        height: 100vh;
    }
`;

export const ContactFilterDiv = styled.div`
    backdrop-filter: brightness(30%);
    height: 100%;
`;

export const ContactContentsSectionDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    align-items: start;
    height: 100%;
    color: #fff;
    padding: 5rem 1rem 1rem 1rem;

    @media only screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    @media only screen and (max-width: 550px){
        gap: 1rem;
    }
`;

export const ContactTextsContentDiv = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: 35px;
        
        @media only screen and (max-width: 900px){
            text-align: center;
        }
    }

    p {
        width: 85%;
        font-size: 20px;

        @media only screen and (max-width: 900px){
            width: 100%;
            text-align: center;
        }
    }
`;

export const ContactFormContainerDiv = styled.div`
    width: 450px;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media only screen and (max-width: 900px){
        text-align: center;
    }

    @media only screen and (max-width: 550px){
        width: 100%;
    }

    input {
        width: 100%;
        height: 40px;
        border-radius: 2px;
        border: none;
        padding: 0 1rem;
        font-size: 15px;
        outline: none;
        background-color: #fff;
    }

    textarea {
        width: 100%;
        height: 50%;
        border-radius: 2px;
        border: none;
        padding: .5rem 1rem;
        font-size: 15px;
        outline: none;
        background-color: #fff;
    }

    button {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 15px;
        color: #fff;
        background: transparent;
        border: none;
        cursor: pointer;

        &:hover {
            color: #e6e6e6;
        }

        &:focus {
            outline: none;
        }
    }
`;