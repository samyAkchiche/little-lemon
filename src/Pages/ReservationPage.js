import ReservationForm from "../Components/ReservationForm";

export default function ReservationPage({ availableTimes, dispatch }) {
    console.log(availableTimes);
    return (
        <>
            <ReservationForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </>
    );
}
