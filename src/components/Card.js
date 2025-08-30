
import styles from './Card.module.css';
import Link from "next/link";
import Tag from "@/components/Tag";
import {FaGithub, FaLink, FaSquareJs,FaCss3Alt, FaReact,FaHtml5} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

const Card = ({title, tags, links, description}) => {
    // console.log(title, tags, links);
    return <div className={styles.card}>
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
                <div className={styles.details}>
                    <p>{description}</p>
                </div>
            <div className={styles.tags}>
                {tags.map(tag => (
                    <Tag
                        key={tag}
                        tag={tag.name}
                        icon={tag.icon}
                    />
                ))}
            </div>
            <div className={styles.borderLine}>

            </div>
            <div className={styles.links}>
                <Link href={links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32}/>
                    <span>Code</span>
                </Link>
                <Link href={links.demo} target="_blank" rel="noopener noreferrer">
                    <FaLink size={32}/>
                    <span>Live</span>
                </Link>
            </div>
        </div>
    </div>
}

export default Card;