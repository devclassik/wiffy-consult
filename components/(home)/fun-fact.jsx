"use client";
import CountUp from "react-countup";

export default function FunFact() {
    return (
        <div
            className="fun-fact-area fun-fact-bg over-hidden pt-105 pb-80"
            data-aos="fade-up"
            data-aos-duration={1800}
        >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-10 ">
                        <div className="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="theme-color f-700 d-inline-block counter">
                                    <CountUp end={12} enableScrollSpy={true} />
                                </span>
                            </div>
                            <h3 className="text-white f-700 text-uppercase mb-0">
                                Years of <br /> Experience
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-10  d-lg-flex justify-content-center">
                        <div className="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="theme-color f-700 d-inline-block counter">
                                    <CountUp end={200} enableScrollSpy={true} />
                                </span>
                                <span className="per d-inline-block f-700 theme-color mt-1">
                                    +
                                </span>
                            </div>
                            <h3 className="text-white f-700 text-uppercase mb-0">
                                Worldwide <br /> Clients
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12 d-lg-flex justify-content-end">
                        <div className="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="theme-color f-700 d-inline-block counter">
                                    <CountUp end={9} enableScrollSpy={true} />
                                </span>
                                <span className="theme-color f-700 d-inline-block pr-1">
                                    k
                                </span>
                                <span className="per d-inline-block f-700 theme-color mt-1">
                                    +
                                </span>
                            </div>
                            <h3 className="text-white f-700 text-uppercase mb-0">
                                Total <br /> Projects
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
