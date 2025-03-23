import "../css/sponsors.css";
import img1 from "../assets/sponsors/GrizzHacks.png";
import img2 from "../assets/sponsors/oucu.png";
import img3 from "../assets/sponsors/365.png";
import img4 from "../assets/sponsors/people-health.png";
import img5 from "../assets/sponsors/kla.png";
import img6 from "../assets/sponsors/martinrea.png";
import img7 from "../assets/sponsors/mlh.png";
import img8 from "../assets/sponsors/github-logo.png";
import img9 from "../assets/sponsors/whisker.png";
import img10 from "../assets/sponsors/87.png";
import img11 from "../assets/sponsors/cyber.png";
import img12 from "../assets/sponsors/freewili.png";
import img13 from "../assets/sponsors/ogrizzlys.png";
import img14 from "../assets/sponsors/stand-out-stickers.png";

const Sponsors = () => {
    const images = [
        img1, img2, img3, img4, img5, img6, img7,img8,
        img9, img10, img11, img12, img13, img14
    ];

    const allImages = [...images, ...images];

    return (
        <div className="image-scroller">
        <div className="image-scroller-track">
            {allImages.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="image" />
            ))}
        </div>
        </div>
    );

};

export default Sponsors;
