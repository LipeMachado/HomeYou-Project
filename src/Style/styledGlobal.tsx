import { createGlobalStyle } from 'styled-components';
import MontserratMedium from '../Assets/Fonts/MontserratMedium.ttf'
import MontserratSemiBold from '../Assets/Fonts/MontserratSemiBold.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'MontserratMedium';
        src: url(${MontserratMedium});
        font-weight: 400;
    }

    @font-face {
        font-family: 'MontserratSemiBold';
        src: url(${MontserratSemiBold});
        font-weight: 600;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'MontserratMedium';
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #ffffff;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #767676;
        border-radius: 8px;
    }
`;