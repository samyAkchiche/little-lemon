import styles from "./CssComponents/reservationTable.module.css";

export default function ReservationTable({ reservations }) {
    return (
        <div className={styles.container}>
            <h1>Reservation Details</h1>
            {reservations && reservations.length > 0 ? (
                <table className={styles.reservationsTable}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Occasion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations
                            .slice(-5)
                            .reverse()
                            .map((reservation, index) => (
                                <tr key={index}>
                                    <td>{reservation.date}</td>
                                    <td>{reservation.time}</td>
                                    <td>{reservation.guests}</td>
                                    <td>{reservation.occasion}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            ) : (
                <p>No reservations found.</p>
            )}
        </div>
    );
}
