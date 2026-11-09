import { useEffect, useRef, useState } from "react";

import mascotBody from "../../assets/images/mascotBody.png";
import mascotEye from "../../assets/images/mascotEye.png";

export default function Intro() {
    const [eyePosition, setEyePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            if (mascotRef.current) {
                let bounds = mascotRef.current.getBoundingClientRect();

                let centerX = bounds.left + bounds.width / 2;
                let centerY = bounds.top + bounds.height / 2;

                let distanceX = event.clientX - centerX;
                let distanceY = event.clientY - centerY;

                let moveX = distanceX / 30;
                let moveY = distanceY / 30;

                let limitX = Math.min(Math.max(moveX, -3), 3);
                let limitY = Math.min(Math.max(moveY, -3), 3);

                setEyePosition({
                    x: limitX,
                    y: limitY,
                });
            }
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const mascotRef = useRef<HTMLDivElement>(null);

    return (
        <section
            className="
            flex-1 w-full
            flex flex-col md:flex-row
            items-center justify-center
            gap-6 md:gap-10 lg:gap-16
            px-4 sm:px-8 lg:px-12
            py-8
        ">
            <div
                className="
                relative
                w-72 h-37
                sm:w-80 sm:h-40
                md:w-88 md:h-48
                lg:w-[24rem] lg:h-53
                max-w-full
                shrink-0
            ">
                <div
                    className="
                    absolute inset-0
                    rounded-3xl
                    border-4 border-primary
                    z-10
                    pointer-events-none
                "
                />

                <div
                    ref={mascotRef}
                    className="
                    absolute
                    -bottom-1.75
                    left-1/2
                    -translate-x-1/2
                    w-[85%]
                    origin-bottom
                    z-20
                    pointer-events-none
                    sm:w-[85%] sm:-bottom-2
                    md:w-[90%] md:-bottom-2.25
                    lg:w-[90%] lg:-bottom-2.5
                ">
                    <img
                        src={mascotBody}
                        alt="Edan Read mascot"
                        className="
                            block
                            w-full
                            h-auto
                        "
                    />
                    <img
                        src={mascotEye}
                        alt=""
                        style={{ marginLeft: `${eyePosition.x}px`, marginTop: `${eyePosition.y}px` }}
                        aria-hidden="true"
                        className="
                            absolute
                            top-[28%]
                            left-[60%]
                            w-[7%]
                            -translate-x-1/2
                            -translate-y-1/2
                            -z-50
                        "
                    />
                    <img
                        src={mascotEye}
                        alt=""
                        style={{ marginLeft: `${eyePosition.x}px`, marginTop: `${eyePosition.y}px` }}
                        aria-hidden="true"
                        className="
                            absolute
                            top-[32%]
                            left-[70%]
                            w-[7%]
                            -translate-x-1/2
                            -translate-y-1/2
                            -z-50
                        "
                    />
                </div>
            </div>
            <div
                className="
                flex flex-col justify-center
                items-center md:items-start
                text-center md:text-left
                gap-1
                w-full max-w-xl
                relative z-30
            ">
                <p
                    className="
                    text-heading-2
                    text-sm sm:text-base
                    font-bold uppercase tracking-widest
                ">
                    Portfolio
                </p>

                <h1
                    className="
                    text-heading-1
                    text-5xl sm:text-6xl
                    md:text-6xl lg:text-7xl
                    font-bold leading-tight
                ">
                    Edan Read
                </h1>

                <p
                    className="
                    text-body
                    text-base sm:text-lg
                    leading-relaxed
                ">
                    Welcome to my portfolio, here you will find my range of experience along with what I have done and the things I'm proud of.
                </p>
            </div>
        </section>
    );
}
