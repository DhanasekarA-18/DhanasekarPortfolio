import styles from "../styles/Button.module.scss";
const Button=(props)=>{
    return(
        <>
         <button type="button" className={styles.submitButton}>
            {props.buttonName}
        </button>
        </>
    )
};
export default Button;