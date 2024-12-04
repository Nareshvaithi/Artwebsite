import { useLocation, useNavigate } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextProvide } from "../ContextAPI/CreateContext";

const ArtworkID = () => {
    const { images } = useContext(ContextProvide);
    const location = useLocation();
    const { _id, main_title, sub_title, url, year, style, index } = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize and refresh AOS after rendering new content
        AOS.init();
        AOS.refreshHard();
    }, [location]); // Trigger AOS recalculation when location changes

    const handleNext = () => {
        if (images && images.length > 0) {
            const nextIndex = (index + 1) % images.length;
            const nextArtwork = images[nextIndex];

            navigate(`/artwork/${encodeURIComponent(nextArtwork.main_title)}`, {
                state: {
                    _id: nextArtwork._id,
                    main_title: nextArtwork.main_title,
                    sub_title: nextArtwork.sub_title,
                    url: nextArtwork.url,
                    year: nextArtwork.year,
                    style: nextArtwork.style,
                    index: nextIndex,
                },
            });
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (images && images.length > 0) {
            const prevIndex = (index - 1 + images.length) % images.length;
            const prevArtwork = images[prevIndex];

            navigate(`/artwork/${encodeURIComponent(prevArtwork.main_title)}`, {
                state: {
                    _id: prevArtwork._id,
                    main_title: prevArtwork.main_title,
                    sub_title: prevArtwork.sub_title,
                    url: prevArtwork.url,
                    year: prevArtwork.year,
                    style: prevArtwork.style,
                    index: prevIndex,
                },
            });
            window.scrollTo(0, 0);
        }
    };

    return (
        <div
            key={_id} // Force re-render for AOS animations
            data-aos="zoom-in"
            className="w-full h-auto py-20 lg:py-10 px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
        >
            <div
                onClick={() => {
                    navigate('/artwork');
                    window.scrollTo(0, 0);
                }}
                className="flex w-full lg:w-1/12 gap-2 items-center justify-center py-5 lg:py-0 rotate-0 lg:rotate-90 font-Aboreto"
            >
                <h1 className="transform -rotate-90"><GoArrowUp /></h1>
                <h1>Artwork</h1>
            </div>
            <div className="w-10/12 flex flex-col-reverse lg:flex-row items-center gap-5">
                <div className="w-full">
                    <div className="border-b py-5 border-gray-400 font-Aboreto">
                        <h1 className="text-lg lg:text-2xl">{main_title}</h1>
                        <p>{sub_title}</p>
                    </div>
                    <div className="border-b py-5 border-gray-400 font-Aboreto">
                        <h1 className="">Style</h1>
                        <p>{style}</p>
                    </div>
                    <div className="border-b py-5 border-gray-400 font-Aboreto">
                        <h1 className="">Year</h1>
                        <p>{year}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <img className="w-full h-full" src={`http://${url}`} alt="" />
                </div>
            </div>
            <div className="w-1/12 rotate-0 lg:rotate-90">
                <div className="-rotate-90 lg-rotate-90 flex flex-col gap-2 items-center font-Aboreto">
                    <button
                        onClick={handlePrev}
                        className="rotate-90 lg:rotate-0 rounded-full px-2 py-3 border border-gray-400"
                    >
                        prev
                    </button>
                    <div className="w-[1px] h-16 bg-gray-400"></div>
                    <button
                        onClick={handleNext}
                        className="rotate-90 lg:rotate-0 rounded-full px-2 py-3 border border-gray-400"
                    >
                        next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArtworkID;
