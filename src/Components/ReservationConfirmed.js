import styles from "./CssComponents/reservationConfirmed.module.css";
import { ReactComponent as CircleCheck } from "../icons_assets/circle-check.svg";
import { useLocation } from "react-router-dom";
import ReservationTable from "./ReservationTable";

export default function ReservationConfirmed() {
    const location = useLocation();
    const reservation = location.state?.reservation;

    return (
        <>
            <div className={styles.confirmationContainer}>
                <CircleCheck className={styles.checkIcon} />
                <h1>
                    Your Reservation has been<span>confirmed !</span>
                </h1>
            </div>
            {reservation && <ReservationTable reservations={[reservation]} />}
        </>
    );
}
