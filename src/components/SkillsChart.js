'use client';
import {motion} from "framer-motion";
import * as d3 from "d3";
import styles from "./SkillsChart.module.css";
import {SKILLS} from "@/lib/constants";

const SkillsChart = () => {

    const xScale = d3.scaleLinear().domain([0, 100]).range([0, 300]);
    return (
        <div className={styles.container}>
            <div className={styles.title}>My Skills</div>
            <div className={styles.chart}>
                {SKILLS.map((skill, i) => (
                    <div className={styles.row} key={i}>
                        <span className={styles.label}>
                            {skill.name} ({skill.years} yrs)
                        </span>
                        <motion.div
                            className={styles.bar}
                            initial={{width:0}}
                            animate={{width: xScale(skill.percent)}}
                            transition={{duration: 1.5, delay: i*0.2, ease:"easeOut"}}
                        />
                        <span className={styles.percent}>{skill.percent}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SkillsChart;