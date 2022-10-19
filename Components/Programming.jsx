import styles from '../styles/Programming.module.scss'
const Programming=()=>{
    const skills=["HTML","CSS","SCSS","JavaScript","React JS","Redux","Next JS","Node JS","JAVA","MySQL"]
    return(
        <>
        <div className={styles.ProgrammingtextContainer}>
        {skills.map(item => {
          return <><div className={styles.Programmingtext} key={Math.random()}>
          {item}</div>
           <div className={styles.percentage}>
           <span className={styles.box1}>&nbsp;</span>
           <span className={styles.box2}>&nbsp;</span>
       </div>
       </>
        })}
     
        </div>
        </>
    )
};
export default Programming;