import { useRef } from "react";
import { usePortfolioStore } from "../../usePortfolioStore";
import CustomCursor from "../components/CustomCursor";

const Home = () => {
    const { bears } = usePortfolioStore();

    const scrollContainerRef = useRef(null); // Reference for the scrollable container
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const moreRef = useRef(null);

    const handleScroll = (section, duration = 700) => {
        const container = scrollContainerRef.current;
        const start = container.scrollLeft;
        const end = section.current.offsetLeft;
        const change = end - start;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            container.scrollLeft = start + change * progress;

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <div className="bg-blue-900 text-white h-screen flex flex-col cursor-none">
            <CustomCursor />
            {/* Scrollable container */}
            <div ref={scrollContainerRef} className="flex h-full overflow-x-auto scroll-smooth">
                <div ref={homeRef} className="min-w-[100vw] h-full bg-red-700 flex items-center justify-center text-white">
                    <div className="font-bold text-4xl">Home</div>
                </div>
                <div ref={aboutRef} className="min-w-[100vw] h-full bg-blue-800 flex items-center justify-center text-white">
                    <div className="font-bold text-4xl">About</div>
                </div>
                <div ref={moreRef} className="min-w-[100vw] h-full bg-green-900 flex items-center justify-center text-white">
                    <div className="font-bold text-4xl">More</div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] bg-black p-6 rounded-xl text-white flex items-center justify-center">
                <div className="" onClick={() => handleScroll(homeRef)}>Home</div>
                <div className="mx-12" onClick={() => handleScroll(aboutRef)}>About</div>
                <div className="" onClick={() => handleScroll(moreRef)}>More</div>
            </div>
        </div>
    );
};

export default Home;