import styles from './page.module.css';
import Chart from "@/components/Chart";
import SkillsChart from "@/components/SkillsChart";

const AboutPage = () => {
    return (
        <div className={styles.about}>
            <h2 className={styles.heading}>About Me</h2>
           <div className={styles.detailsContainer}>
               <div className={styles.chart}>
                   <SkillsChart />
               </div>
               <div className={styles.line}></div>
               <section className={styles.details}>
                   <p className={styles.introduction}>
                       Hi, I’m <strong>Madhu Kalapala</strong> 👋 — a
                       <strong> Senior Frontend Engineer</strong> with 6+ years of experience building
                       <strong> scalable, accessible, and user-friendly applications</strong> for web and mobile.
                       I hold a Master’s degree in Computer Science from IIT Bombay and work at
                       <strong> IBM India</strong>, where I design and deliver enterprise-grade UI solutions.
                   </p>
                   <p className={styles.skills}>
                       I specialize in <strong>React, Next.js, React Native, JavaScript (ES6+), and TypeScript</strong>,
                       with expertise in <strong>state management, API integration, and modern styling</strong>.
                   </p>
                   <ul className={styles.experience}>
                       <h4> Over the years, I’ve:</h4>
                       <li>
                           Boosted accessibility (WCAG 2.1 AA) across core enterprise modules, raising Lighthouse scores from 78 → 96.

                       </li>
                       <li>   Built dynamic forms, booking apps, and event-driven interfaces that streamlined workflows and reduced redundant code by 60%.

                       </li>
                       <li> Led React Native development for a cross-platform booking app with reusable components, smooth navigation, and optimized performance.

                       </li>
                       <li>  Maintained 90%+ test coverage with Jest, RTL, and Cucumber to ensure reliable, production-ready apps.

                       </li>
                   </ul>
                   <p className={styles.outside}>
                       Outside of work, I love building side projects like a <strong>Dynamic Form Builder</strong>,
                       <strong>E-Commerce Dashboard</strong>, and <strong>School Management System</strong>.
                       These reflect my passion for <strong>clean UI, performance, and accessibility</strong>.
                   </p>
               </section>
           </div>
            <div className={styles.tagline}>
                <h1 className={styles.heading}>
                    I craft scalable, accessible, and delightful web & mobile experiences
                </h1>
                <p>
                    with React, Next.js, and React Native
                </p>
            </div>
        </div>
    )
}

export default AboutPage;