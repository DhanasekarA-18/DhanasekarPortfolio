import styles from "../styles/Education.module.scss";
const Projects = () => {
  return (
    <>
      <div className={styles.educationContainer}>
        <div className={styles.box1}>
          <span>
            {" "}
            <p className={styles.educationArea}>PERSONAL PORTFOLIO WEBSITE</p>
            <p className={styles.technologyTitle}>
              Technologies Used : React JS,Next JS{" "}
            </p>
            <p>
              A Personal Portfolio website to showcase all my details and
              projects at one place
            </p>
          </span>
          <span>
            {" "}
            <p className={styles.passingYear}>2022</p>
          </span>
        </div>

        <div className={styles.box1}>
          <span>
            {" "}
            <p className={styles.educationArea}>
              RESULT MANAGEMENT SYSTEM - FULL STACK
            </p>
            <p className={styles.technologyTitle}>
              Technologies Used : HTML ,CSS , Bootstrap,JavaScript,Embedded
              JavaScript, Node Js ,MySQL{" "}
            </p>
            <p>
              It is to provide the examination result to the student in a simple
              way. This project is useful for students and Institutions for
              getting the results in simple manner.
              <span className={styles.technologyTitle}>(CRUD Operations)</span>
            </p>
          </span>
          <span>
            {" "}
            <p className={styles.passingYear}>2021</p>
          </span>
        </div>

        <div className={styles.box1}>
          <span>
            {" "}
            <p className={styles.educationArea}>
              ATM CARD MANAGEMENT SYSTEM - CONSOLE
            </p>
            <p className={styles.technologyTitle}>
              Technologies Used: JAVA,JDBC,MySQL
            </p>
            <p>
              It is designed to carry day-to-day financial transactions and they
              are convenient and easy to use, it allows consumers to perform
              quick self-service transactions
            </p>
          </span>
          <span>
            {" "}
            <p className={styles.passingYear}>2021</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Projects;
