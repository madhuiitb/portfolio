import  styles from './Tag.module.css';
import {ICONS} from "@/lib/constants";

const Tag = ({tag, icon})=>{
    const IconComponent = ICONS[icon];
    return(
        <div className={styles.tag}>
            {IconComponent && <IconComponent />}
            <span>{tag}</span>
        </div>
    )
}
export default Tag;