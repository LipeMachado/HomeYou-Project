import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { NavBarSectionContainer } from "../HomePage/style";

import {
    GalleryContainerSectionDiv,
    GalleryContainerBoxSectionDiv,
    GalleryLeftDiv,
    GalleryMiddleDiv,
    GalleryRightDiv
} from './style'

import GalleryImage1V from '../../Assets/Images/GalleryImage1V.png'
import GalleryImage2V from '../../Assets/Images/GalleryImage2V.png'
import GalleryImage3V from '../../Assets/Images/GalleryImage3V.png'
import GalleryImage1H from '../../Assets/Images/GalleryImage1H.jpg'
import GalleryImage2H from '../../Assets/Images/GalleryImage2H.jpg'
import GalleryImage3H from '../../Assets/Images/GalleryImage3H.jpg'

export function GalleryPage() {
    return (
        <>
            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>

            <GalleryContainerSectionDiv>
                <GalleryContainerBoxSectionDiv>
                    <GalleryLeftDiv>
                        <div className="gallery-img vertical">
                            <img src={GalleryImage1V} alt="" />
                        </div>
                        <div className="gallery-img small">
                            <img src={GalleryImage1H} alt="" />
                        </div>
                        <div className="gallery-img small">
                            <img src={GalleryImage2H} alt="" />
                        </div>
                    </GalleryLeftDiv>
                    <GalleryMiddleDiv>
                        <div className="gallery-img middle">
                            <img src={GalleryImage3H} alt="" />
                        </div>
                    </GalleryMiddleDiv>
                    <GalleryRightDiv>
                        <div className="gallery-img small">
                            <img src={GalleryImage1H} alt="" />
                        </div>
                        <div className="gallery-img small">
                            <img src={GalleryImage2H} alt="" />
                        </div>
                        <div className="gallery-img vertical">
                            <img src={GalleryImage2V} alt="" />
                        </div>
                    </GalleryRightDiv>
                </GalleryContainerBoxSectionDiv>
            </GalleryContainerSectionDiv>
        </>
    )
}