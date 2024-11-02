
import useMousePosition from "../hooks/useMousePosition";

const CustomCursor = () => {
    // 1.
    const { x, y } = useMousePosition();
    return (
        <>
            {/* 2. */}
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className="
                    fixed top-0 left-0 w-[20px] aspect-square
                    border-2 border-solid border-white
                    translate-x-[-50%] translate-y-[-50%]
                    ease-in-out z-[999] pointer-events-none
                "
            ></div>
            {/* 3. */}
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className="
                    fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    w-[4px] h-[4px] bg-white rounded-[100%] z-[999]
                    pointer-events-none
                "
            ></div>
        </>
    );
};

export default CustomCursor;


