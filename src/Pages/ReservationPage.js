import ReservationForm from "../Components/ReservationForm";

export default function ReservationPage({
    availableTimes,
    dispatch,
    submitForm,
}) {
    return (
        <>
            <ReservationForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </>
    );
}
