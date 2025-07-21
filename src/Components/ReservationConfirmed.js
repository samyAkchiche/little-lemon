import styles from "./CssComponents/reservationConfirmed.module.css";
import { ReactComponent as CircleCheck } from "../icons_assets/circle-check.svg";

export default function ReservationConfirmed() {
    return (
        <h1 className={styles.container}>
            <CircleCheck className={styles.checkIcon} />
            Your Reservation has been<span>confirmed !</span>
        </h1>
    );
}
