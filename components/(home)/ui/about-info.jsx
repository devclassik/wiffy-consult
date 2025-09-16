import Image from "next/image";

export default function AboutInfo() {
    return (
        <div className="about-content position-relative mb-50">
            <div className="position-relative">
                <div className="title">
                    <span className="theme-color f-700 text-uppercase d-block mb-6 mt--5">
                        About Me
                    </span>
                    <h2 className="f-700 text-uppercase mb-30">
                        I Develop System that Works
                    </h2>
                </div>
            </div>
            <p className="mb-25">
                Shaping knowledge into impact — education and consultancy for growth and innovation.
            </p>
            <p>
                Through education and consultancy, we empower individuals and organizations with the knowledge and guidance they need to grow, succeed, and create lasting impact.
            </p>
            <div className="about-info-wrapper pt-10">
                <div className="row">
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-45">
                                <p className="primary-color f-700 mb-6">Name</p>
                                {/* <p className="primary-color f-700 mb-6">Age</p> */}
                                <p className="primary-color f-700 mb-6">
                                    Occupation
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Education
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">Deborah Toluwase</p>
                                {/* <p className="mb-6">29 Years</p> */}
                                <p className="mb-6">Journalist</p>
                                <p className="mb-6">BA French</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-45">
                                <p className="primary-color f-700 mb-6">
                                    Phone
                                </p>
                                {/* <p className="primary-color f-700 mb-6">
                                    Email
                                </p> */}
                                <p className="primary-color f-700 mb-6">
                                    Nationality
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Freelance
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">+2348147383503</p>
                                {/* <p className="mb-6">kolawoletoluwasedeborah@gmail.com</p> */}
                                <p className="mb-6">Nigeria</p>
                                <p className="mb-6">Available</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /about-info-wrapper */}
            <div className="about-footer-content d-sm-flex align-items-center">
                <div className="signature mt-20 pr-45">
                    <Image
                        height={99}
                        width={178}
                        src="/images/about/signature.png"
                        alt="signeture"
                    />
                </div>
                <div className="about-footer-content-right mt-20 text-left">
                    <h6 className="d-xl-inline-block text-uppercase pr5 mb-0">
                        DTK
                    </h6>
                    <span className=" secondary-color2">
                        Senior correspodence, Punch newspaper.
                    </span>
                </div>
            </div>
            {/* /about-footer-content */}
        </div>
    );
}
