import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from "./Components/ReservationForm";
import { initializeTimes } from "./Components/utils/times";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

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
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30",
            "23:30",
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
    await user.clear(guestsInput);
    await user.type(guestsInput, "4");
    await user.selectOptions(occasionSelect, "Birthday");

    expect(submitButton).not.toBeDisabled();

    await user.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();
});

test("Write reservation Data to localStorage", async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();

    Storage.prototype.setItem = jest.fn();

    const mockSubmitForm = (formData) => {
        const reservations = [formData];
        localStorage.setItem("reservations", JSON.stringify(reservations));
    };

    render(
        <ReservationForm
            dispatch={mockDispatch}
            submitForm={mockSubmitForm}
            availableTimes={["17:00", "17:30"]}
        />
    );

    await user.type(screen.getByLabelText(/Choose Date/i), "2025-12-25");
    await user.selectOptions(screen.getByLabelText(/Choose Time/i), "17:00");
    await user.clear(screen.getByLabelText(/Number of Guests/i));
    await user.type(screen.getByLabelText(/Number of Guests/i), "4");
    await user.selectOptions(screen.getByLabelText(/Occasion/i), "Birthday");
    await user.click(
        screen.getByRole("button", { name: /Make Your Reservation/i })
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
        "reservations",
        expect.stringContaining("2025-12-25")
    );
});

test("Reads reservations from localStorage on component mount", async () => {
    const mockReservations = [
        {
            date: "2025-12-25",
            time: "17:00",
            guests: "4",
            occasion: "Birthday",
        },
    ];

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockReservations));

    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    expect(localStorage.getItem).toHaveBeenCalledWith("reservations");
});

describe("ReservationForm - HTML attributes validation", () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Date input should have the required attributes", () => {
        render(
            <ReservationForm
                availableTimes={["17:00"]}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toBeRequired();
        expect(dateInput).toHaveAttribute("type", "date");
    });

    test("Time select should have the required attributes", () => {
        render(
            <ReservationForm
                availableTimes={["17:00"]}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toBeRequired();
    });
    test("Guests input should have the min and max attributes", () => {
        render(
            <ReservationForm
                availableTimes={["17:00"]}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toBeRequired();
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
    });
    test("Occasion select should have the required attributes", () => {
        render(
            <ReservationForm
                availableTimes={["17:00"]}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toBeRequired();
    });
});

describe("ReservationForm - JavaScript Validation Form ", () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    const setup = () => {
        render(
            <ReservationForm
                availableTimes={["17:30"]}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
    };

    test("Form should be valid when all fields meet criteria", () => {
        setup();

        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: { value: "2025-12-25" },
        });
        fireEvent.change(screen.getByLabelText(/choose time/i), {
            target: { value: "17:30" },
        });
        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: { value: "4" },
        });
        fireEvent.change(screen.getByLabelText(/occasion/i), {
            target: { value: "Birthday" },
        });

        const submitButton = screen.getByRole("button", {
            name: /make your reservation/i,
        });

        expect(submitButton).toBeEnabled();
    });
    test("Guests input should show error when outside valid range", () => {
        setup();

        const guestsInput = screen.getByLabelText(/number of guests/i);

        fireEvent.change(guestsInput, {
            target: { value: 15 },
        });

        expect(
            screen.getByText("* Please enter a number between 1 and 10.")
        ).toBeInTheDocument();
        expect(guestsInput).toHaveAttribute("aria-invalid", "true");
    });
    test("Form submit should call submitForm with correct data", () => {
        setup();

        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: { value: "2025-12-25" },
        });
        fireEvent.change(screen.getByLabelText(/choose time/i), {
            target: { value: "17:30" },
        });
        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: { value: "4" },
        });
        fireEvent.change(screen.getByLabelText(/occasion/i), {
            target: { value: "Anniversary" },
        });

        fireEvent.click(
            screen.getByRole("button", { name: /make your reservation/i })
        );

        expect(mockSubmitForm).toHaveBeenCalledWith({
            date: "2025-12-25",
            time: "17:30",
            guests: 4,
            occasion: "Anniversary",
        });
    });
});
