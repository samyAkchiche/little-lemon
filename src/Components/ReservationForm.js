import { useState } from "react";
import styles from "./CssComponents/reservationForm.module.css";

export default function ReservationForm({ availableTimes, dispatch }) {
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });
    return (
        <form className={styles.form}>
            <label htmlFor="res-date" aria-label="Choose Dates">
                Choose Date
            </label>
            <input
                type="date"
                id="res-date"
                value={form.date}
                onChange={(e) => {
                    const newDate = e.target.value;
                    setForm({ ...form, date: newDate });
                    dispatch({ type: "update_times", date: newDate });
                }}
            />
            <label htmlFor="res-time" aria-label="Choose Time">
                Choose Time
            </label>
            <select
                id="res-time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
            >
                {availableTimes && availableTimes.length > 0 ? (
                    availableTimes.map((time) => {
                        return (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        );
                    })
                ) : (
                    <option disabled>No available times</option>
                )}
            </select>
            <label htmlFor="guests" aria-label="Number of Guests">
                Number of Guests
            </label>
            <input
                type="number"
                placeholder="1"
                min={1}
                max={10}
                id="guests"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
            ></input>
            <label htmlFor="occasion" aria-label="Occasion">
                Occasion
            </label>
            <select
                id="occasion"
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
            >
                <option value={"Birthday"}>Birthday</option>
                <option value={"Anniversary"}>Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}
