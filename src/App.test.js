import { render, screen } from "@testing-library/react";
import ReservationForm from "./Components/ReservationForm";
import { initializeTimes, updateTimes } from "./Components/utils/times";
import userEvent from "@testing-library/user-event";

test("renders the ReservationForm heading", () => {
    render(<ReservationForm />);
    const labelElement = screen.getByText(/Number of Guests/i);
    expect(labelElement).toBeInTheDocument();
});

describe("ReservationForm reducer function", () => {
    test("initializeTimes returns expected initial times", () => {
        const expectedTimes = [
            "17:00",
            "17:30",
            "19:30",
            "20:00",
            "21:00",
            "23:00",
        ];
        expect(initializeTimes()).toEqual(expectedTimes);
    });
});

test("Submit the ReservationForm", async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(
        <ReservationForm
            dispatch={mockDispatch}
            availableTimes={["17:00", "17:30"]}
            submitForm={mockSubmitForm}
        />
    );

    const dateInput = screen.getByLabelText(/Choose Date/i);
    const timeSelect = screen.getByLabelText(/Choose Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole("button", {
        name: /Make Your Reservation/i,
    });

    await user.type(dateInput, "2025-12-25");
    await user.selectOptions(timeSelect, "17:00");
    await user.type(guestsInput, "4");
    await user.selectOptions(occasionSelect, "Birthday");
    await user.click(submitButton);
});
