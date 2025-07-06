import { useState } from "react";
import styles from "./CssComponents/reservationForm.module.css";

export default function ReservationForm() {
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });

    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    console.log(form);
    return (
        <form className={styles.form}>
            <label htmlFor="res-date">Choose Date</label>
            <input
                type="date"
                id="res-date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <label htmlFor="res-time">Choose Time</label>
            <select
                id="res-time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
            >
                {availableTimes.map((time) => {
                    return (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    );
                })}
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input
                type="number"
                placeholder="1"
                min={"1"}
                max={"10"}
                id="guests"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
            ></input>
            <label htmlFor="occasion">Occasion</label>
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
