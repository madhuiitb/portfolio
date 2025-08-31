'use client';

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import * as d3 from "d3";
import styles from "./Chart.module.css";

const data = [30, 80, 45, 60, 20, 90, 50];

const Chart = () => {
    const [scale, setScale] = useState(null);

    useEffect(() => {
        const y = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 200]);
        setScale(()=>y);
    },[])

    return (
        <div className={styles.chart}>
            {scale && data.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.bar}
                    initial={{ height: 0 }}
                    animate={{height: scale(item)}}
                    transition={{duration: 0.8, delay: index*0.1}}
                />
            ))}
        </div>
    )

}
export default Chart;