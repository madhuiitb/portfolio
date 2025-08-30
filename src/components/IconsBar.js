import Link from "next/link";
import {FaCode, FaHome} from "react-icons/fa";
import {FaArrowDownLong,FaInstagram, FaXTwitter, FaYoutube,FaGithub} from "react-icons/fa6";
import styles from "./IconsBar.module.css";

const IconsBar = () => {
    return(
        <nav className={styles.iconsContainer}>

            <div className={styles.text}>
                FOLLOW ME
            </div>
            <div className={styles.arrow}>
                <FaArrowDownLong  />
            </div>
            <Link href="https://x.com/madhubabu_iitb" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
            </Link>
            <Link href="https://www.youtube.com/@madhuiitb-cse" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </Link>
            <Link href="https://github.com/madhuiitb/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </Link>
        </nav>
    )
};

export default IconsBar;