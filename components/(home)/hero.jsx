"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        icon: "fab fa-facebook-f",
        link: "/",
    },
    {
        icon: "fab fa-twitter",
        link: "/",
    },
    {
        icon: "fab fa-linkedin-in",
        link: "/",
    },
    {
        icon: "fab fa-youtube",
        link: "/",
    },
];

export default function Hero() {
    return (
        <div id="home" className="slider-area slider-bg-color">
            <div className="single-slider slider-height over-hidden position-relative xxl-device-width">
                <div className="container slider-container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  d-flex align-items-center justify-content-center">
                            <div className="slider-wrapper h-100">
                                <div className="slider-content text-center mt-65 text-lg-left position-relative z-index11">
                                    <h1
                                        className="mb-25 text-uppercase white-text"
                                        data-aos="fade-right"
                                        data-aos-duration={2000}
                                        data-aos-delay={800}
                                    >
                                        <span className="sub-heading d-block theme-color mb-10">
                                            Hello I’m
                                        </span>
                                        <span className="!text-red-500">
                                            Deborah Toluwase
                                        </span>
                                        {/* Deborah-Toluwase kolawole */}
                                    </h1>
                                    <h2
                                        className="text-uppercase white-text"
                                        data-aos="fade-right"
                                        data-aos-duration={2500}
                                        data-aos-delay={1000}
                                    >
                                        A Passionate
                                        <span className="d-text d-block d-sm-inline-block">
                                            <TypeAnimation
                                                className="typtyper theme-color d-inline-block pl-2"
                                                sequence={[
                                                    "Journalist",
                                                    1000,
                                                    "Education Analyst",
                                                    1000,
                                                    "Education Consultant",
                                                    1000,
                                                ]}
                                                wrapper="span"
                                                speed={30}
                                                repeat={Infinity}
                                            />
                                        </span>
                                    </h2>
                                    <Link
                                        href="/#contact"
                                        className="btn position-relative over-hidden theme-bg text-white text-uppercase mt-40"
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                    >
                                        Say Hello
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-12 pl-xl-0 d-flex align-items-end h-100">
                            <div className="slider-img ml--40 pt-100 position-relative z-index1 h-100">
                                <Image
                                    height={983}
                                    width={749}
                                    className="img-grayscale h-100 w-auto"
                                    src="/images/slider/per.png"
                                    alt="person"
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-social-link position-absolute right-0 d-block z-index11">
                    <ul className="social pr-25">
                        {/* social links start */}
                        {socialLinks?.map((item, i) => (
                            <li key={i} className="mt-10 mb-10 rotate-hover">
                                <Link
                                    className="text-white text-center d-inline-block rotate"
                                    href={item.link}
                                >
                                    <i className={item.icon} />
                                </Link>
                            </li>
                        ))}
                        {/* social links end */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
