import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import IconsBar from "@/components/IconsBar";
import {PROJECT_DETAILS} from "../lib/constants";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          {PROJECT_DETAILS.map((item, index) => (
              <Card
                  key={item.id}
                  title={item.title}
                  tags={item.tags}
                  description={item.description}
                  links={item.links}
              />
          ))}
      </main>
        <div className={styles.sideBar}>
            <IconsBar />
        </div>
    </div>
  );
}
