import styles from '../styles/Education.module.scss'
const Education=()=>{
    return(
        <>
        <div className={styles.educationContainer}>
        <div className={styles.box1}>
           <span> <p className={styles.educationArea}>sri shakthi institute of engineering and technology</p>
            <p>BACHELOR OF ENGINEERING IN ELECTRONICS AND COMMUNICATION </p> </span>
          <span> <p className={styles.passingYear}>2019-2023</p></span>
        </div>
        <div className={styles.box1}>
          <span> <p className={styles.educationArea}>P A Vidya Bhavan Higher Secondary School</p>
            <p>HSC</p>
            </span>
          <span > <p className={styles.passingYear}>2017-2019</p></span> 
        </div>
        <div className={styles.box1}>
           <span> <p className={styles.educationArea}>arumugam academy</p>
            <p>SSLC</p>
            </span>
            <span > <p className={styles.passingYear}>2016-2017</p></span>
        </div>
        </div>
        </>
    )
}
export default Education;