import { useState } from "react";
import styles from "./CssComponents/reservationForm.module.css";

export default function ReservationForm({
    availableTimes,
    dispatch,
    submitForm,
}) {
    const [dateError, setDateError] = useState("");
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday",
    });

    const validateDate = (selectedDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const chosen = new Date(selectedDate);

        if (chosen < today) {
            setDateError("* Please select a date that is today or later");
        } else {
            setDateError("");
            return true;
        }
    };

    const isGuestsInvalid =
        form.guests !== 1 && (form.guests < 1 || form.guests > 10);

    const getIsFormValid = () => {
        return (
            form.date &&
            form.time &&
            !isGuestsInvalid &&
            form.occasion &&
            !dateError
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(form);
        console.log(form);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose Date</label>
            <input
                type="date"
                id="res-date"
                value={form.date}
                required
                onChange={(e) => {
                    const newDate = e.target.value;
                    setForm({ ...form, date: newDate, time: "" });
                    validateDate(newDate);
                    dispatch({ type: "update", payload: newDate });
                }}
            />
            {dateError && <p>{dateError}</p>}
            <label htmlFor="res-time">Choose Time</label>
            <select
                id="res-time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
            >
                <option value="" disabled>
                    Select a Time
                </option>
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
            <label htmlFor="guests">Number of Guests</label>
            <input
                type="number"
                placeholder="1"
                min={1}
                max={10}
                id="guests"
                value={form.guests}
                onChange={(e) =>
                    setForm({ ...form, guests: Number(e.target.value) })
                }
                aria-invalid={isGuestsInvalid}
                aria-describedby="guests-error"
                required
            ></input>
            {isGuestsInvalid && (
                <p id="guests-error" className={styles.errorText} role="alert">
                    * Please enter a number between 1 and 10.
                </p>
            )}
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                required
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input
                type="submit"
                value="Make Your Reservation"
                className={styles.submitButton}
                disabled={!getIsFormValid()}
                aria-label="On Click"
            />
        </form>
    );
}
