import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow_left from "@/components-assets/icons/arrow-left.svg"
import arrow_right from "@/components-assets/icons/arrow-right.svg"
import Image from "next/image";

export function MyCaruel({ children }) {
    
return (
    <>
        <Carousel showStatus={false} showIndicators={false} autoPlay={false}
            thumbWidth={100}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                (
                    <button type="button" onClick={onClickHandler} title={label} className="absolute z-10 h-12 w-12 bottom-2 left-1">
                        <Image src={arrow_left} alt="" />
                    </button>)}
            renderArrowNext={(onClickHandler, hasNext, label) =>
                (
                    <button type="button" onClick={onClickHandler} title={label} className="absolute z-10 h-12 w-12 bottom-2 right-1">
                        <Image src={arrow_right} alt="" />
                    </button>
            )
            }
            renderThumbs={(children) => {
                return children.map((item, index) => item.props.children)
            }}
        >
            {children}
                
        </Carousel>
    </>
    )
}