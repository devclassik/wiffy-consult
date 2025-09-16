"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const tags = [
    {
        name: "Web Design",
        url: "/",
    },
    {
        name: "Social Media",
        url: "/",
    },
    {
        name: "Product",
        url: "/",
    },
];

const social = [
    {
        url: "/",
        icon: "fab fa-facebook-f",
        color: "facebook-color",
    },
    {
        url: "/",
        icon: "fab fa-twitter",
        color: "twitter-color",
    },
    {
        url: "/",
        icon: "fab fa-google-plus-g",
        color: "google-plus-color",
    },
    {
        url: "/",
        icon: "fab fa-linkedin-in",
        color: "linkedin-color",
    },
];

export default function WorkModal() {
    const { workInfo } = useSelector((state) => state.work);

    if (!workInfo) return null;

    return (
        <div
            className="modal fade"
            id="workModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="workModal"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="close-icon float-right pt-10 pr-10">
                        <button
                            type="button"
                            className="close d-inline-block"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">
                                <i className="fa fa-times" />
                            </span>
                        </button>
                    </div>
                    <div className="modal-content border-0">
                        <div className="modal-body pl-50 pr-50 pt-10 pb-20">
                            <div className="blog-modal-img">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    className="img-grayscale h-auto w-100"
                                    src={workInfo?.imgUrl}
                                    alt="product image 02"
                                    style={{
                                        height: "634px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                    <div className="content-wrapper">
                                        <h2 className="modal-title f-700">
                                            {workInfo?.brief}
                                        </h2>
                                        <p>
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est
                                            laborum.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dignissimos laudantium fuga
                                            molestiae, aut eius minus
                                            reprehenderit.
                                        </p>
                                        <p className="mb-0">
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                    <div className="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mt-40 mb-10">
                                        <ul className="item-meta">
                                            <li>
                                                Project Type :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    {workInfo?.title}
                                                </span>
                                            </li>
                                            <li>
                                                Clien :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    Juwel Khan
                                                </span>
                                            </li>
                                            <li>
                                                Duration :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    2 Weeks
                                                </span>
                                            </li>
                                            <li>
                                                Task :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    UI/UX, Frontend
                                                </span>
                                            </li>
                                            <li>
                                                Budget :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    $2000
                                                </span>
                                            </li>
                                        </ul>
                                        <a
                                            href="#"
                                            className="btn position-relative over-hidden text-white theme-bg theme-border2 text-uppercase mt-20 pt-2 pb-2"
                                        >
                                            View Live
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-modal-footer mt-30 mb-45">
                                <div className="row align-items-center justify-content-md-between">
                                    <div className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                        <div className="modal-tags d-sm-flex align-items-center pt-25">
                                            <h6 className="primary-font-family mb-0 pr-15 black-color f-700">
                                                Tags :
                                            </h6>
                                            <ul className="tag-list">
                                                {/* tag start */}
                                                {tags?.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="d-inline-block pr-10 f-700"
                                                    >
                                                        <Link
                                                            className="secondary-color3 d-block"
                                                            href={item.url}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* tag end */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5  col-md-12 col-sm-10 col-12">
                                        <div className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                            <h6 className="primary-font-family pr-15 f-700 mb-0 black-color">
                                                Share this product :
                                            </h6>
                                            <ul className="social-link text-md-right">
                                                {/* social link start */}
                                                {social?.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="d-inline-block"
                                                    >
                                                        <a
                                                            className={`${item.color} text-center pl-15 d-inline-block transition-3`}
                                                            href={item.url}
                                                        >
                                                            <i
                                                                className={
                                                                    item.icon
                                                                }
                                                            />
                                                        </a>
                                                    </li>
                                                ))}
                                                {/* social link end */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
