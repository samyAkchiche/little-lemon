import styles from "./CssComponents/reservationConfirmed.module.css";
import { ReactComponent as CircleCheck } from "../icons_assets/circle-check.svg";
import { useLocation } from "react-router-dom";
import ReservationTable from "./ReservationTable";

export default function ReservationConfirmed() {
    const location = useLocation();
    const reservations = location.state?.reservations;

    return (
        <div className={styles.container}>
            <CircleCheck className={styles.checkIcon} />
            <h1>
                Your Reservation has been <span>confirmed!</span>
            </h1>
            {reservations && reservations.length > 0 ? (
                <ReservationTable reservations={reservations} />
            ) : (
                <p>No reservation details to display.</p>
            )}
        </div>
    );
}
