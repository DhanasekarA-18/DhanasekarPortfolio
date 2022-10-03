import Image from "next/image";
import styles from "../styles/WorkingHistory.module.scss"
const WorkingHistory=()=>{
    return(
        <>
        <div className={styles.WorkingHistoryContainer}>
            <div>
               <Image src="/zolvitBlackTransparent.gif" width={200} height={100}/> 
                <p className={styles.passingYear}>10-07-2022 - 00-00-0000 </p>
               <p className={styles.internTitle}>UI INTERNSHIP</p>
               <p><span className={styles.skill}>Skills : </span><span className={styles.skillSet}>React JS,Next JS</span></p>
                <div className={styles.internDescription}>            
               <p>A ---- Month Internship at VakilSearch(ZOLVIT)</p>
               <p>Meticulous web developer with over 4 Months of front end experience and passion for responsive website design and a firm believer in the mobile-first approach</p>
              <p>I Stretch my mental capacity to learn and develope as per the given content.</p>
              </div> 
            </div>
          
        </div>
        </>
    )
};
export default WorkingHistory;
