import React from "react";
import { render, screen } from "@testing-library/react";
import App, {headerText} from "../app";

test("renders app", () => {
    render(<App />);
});

test("renders header text", () => {
    render(<App />);
    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
});
