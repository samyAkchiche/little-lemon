import { useState } from "react";
import styles from "./CssComponents/reservationForm.module.css";

export default function ReservationForm({
    availableTimes,
    dispatch,
    submitForm,
}) {
    const [dateError, setDateError] = useState("");
    const [step, setStep] = useState(1);
    const [touched, setTouched] = useState({});
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        specialRequest: "",
        acceptedPolicy: false,
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

    const getIsFormValidStepOne = () => {
        return (
            form.date &&
            form.time &&
            !isGuestsInvalid &&
            form.occasion &&
            !dateError
        );
    };

    const getIsFormValidStepTwo = () => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        return (
            form.firstName.trim() &&
            form.lastName.trim() &&
            emailValid &&
            form.phoneNumber &&
            form.acceptedPolicy
        );
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (getIsFormValidStepOne()) {
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(form);
        console.log(form);
    };

    return (
        <>
            {step === 1 && (
                <form className={styles.form} onSubmit={handleNext}>
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
                    {dateError && <p role="alert">{dateError}</p>}
                    <label htmlFor="res-time">Choose Time</label>
                    <select
                        id="res-time"
                        value={form.time}
                        onChange={(e) =>
                            setForm({ ...form, time: e.target.value })
                        }
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
                    />
                    {isGuestsInvalid && (
                        <p
                            id="guests-error"
                            className={styles.errorText}
                            role="alert"
                        >
                            * Please enter a number between 1 and 10.
                        </p>
                    )}
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={form.occasion}
                        onChange={(e) =>
                            setForm({ ...form, occasion: e.target.value })
                        }
                        required
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    <input
                        type="submit"
                        value="Make Your Reservation"
                        className={styles.submitButton}
                        disabled={!getIsFormValidStepOne()}
                        aria-label="On Click"
                    />
                </form>
            )}
            {step === 2 && (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) => {
                            setForm({ ...form, firstName: e.target.value });
                        }}
                        onBlur={() => {
                            setTouched({ ...touched, firstName: true });
                        }}
                        required
                    />
                    {!form.firstName && touched.firstName && (
                        <p role="alert">First name is required</p>
                    )}
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) => {
                            setForm({ ...form, lastName: e.target.value });
                        }}
                        onBlur={() => {
                            setTouched({ ...touched, lastName: true });
                        }}
                        required
                    />
                    {!form.lastName && touched.lastName && (
                        <p role="alert">Last name is required</p>
                    )}
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                        }}
                        onBlur={() => {
                            setTouched({ ...touched, email: true });
                        }}
                        required
                    />
                    {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
                        touched.email && <p role="alert">Email is required</p>}
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={form.phoneNumber}
                        onChange={(e) => {
                            const value = e.target.value
                                .replace(/[^0-9+]/g, "")
                                .trim();
                            setForm({ ...form, phoneNumber: value });
                        }}
                        onBlur={() => {
                            setTouched({ ...touched, phoneNumber: true });
                        }}
                        required
                    />
                    {!form.phoneNumber &&
                        touched.phoneNumber &&
                        !/^\+?[0-9]{7,15}$/.test(form.phoneNumber) && (
                            <p role="alert">*Enter a valid phone number</p>
                        )}
                    <label htmlFor="specialRequest">Special Request</label>
                    <textarea
                        id="specialRequest"
                        type="text"
                        value={form.specialRequest}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                specialRequest: e.target.value,
                            });
                        }}
                    ></textarea>
                    <div className={styles.checkboxGroup}>
                        <input
                            type="checkbox"
                            id="acceptedPolicy"
                            checked={form.acceptedPolicy}
                            onChange={(e) => {
                                setForm({
                                    ...form,
                                    acceptedPolicy: e.target.checked,
                                });
                            }}
                            onBlur={() => {
                                setTouched({
                                    ...touched,
                                    acceptedPolicy: true,
                                });
                            }}
                            required
                        />
                        <label htmlFor="acceptedPolicy">
                            I agree to the
                            <span
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </span>
                        </label>
                        {!form.acceptedPolicy && touched.acceptedPolicy && (
                            <p role="alert">
                                * You must accept the Privacy Policy
                            </p>
                        )}
                    </div>
                    <input
                        type="submit"
                        value="Confirm Your Reservation"
                        aria-label="on Click"
                        className={styles.submitButton}
                        disabled={!getIsFormValidStepTwo()}
                    />
                </form>
            )}
        </>
    );
}
