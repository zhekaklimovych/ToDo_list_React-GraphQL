import preloader from "../assets/preloader.gif";

import "./../styles/common.css";

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt={"preloader"} />
        </div>
    );
};

export default Preloader;
