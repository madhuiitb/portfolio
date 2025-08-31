import styles from './page.module.css';
import {PROJECT_DETAILS} from "@/lib/constants";
import Card from "@/components/Card";
const Projects = () => {
    return (
        <div className={styles.projects}>
            {PROJECT_DETAILS.map((item, index) => (
                <Card
                    key={item.id}
                    title={item.title}
                    tags={item.tags}
                    description={item.description}
                    links={item.links}
                />
            ))}
        </div>
    )
}

export default Projects;