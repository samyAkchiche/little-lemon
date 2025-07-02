import styles from "./CssComponents/button.module.css";

export default function Button({ props }) {
    return <button className={styles.button}>{props}</button>;
}
