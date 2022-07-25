import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../components/Form/LoginForm";

describe("<LoginForm />", () => {
  const setup = () => {
    render(<LoginForm />);
    const ID = screen.getByPlaceholderText("ID");
    const Password = screen.getByPlaceholderText("Password");
    const Submit = screen.getByText("로그인");
    return { ID, Password, Submit };
  };

  it("Render Component", () => {
    const { ID, Password, Submit } = setup();

    expect(ID).toBeTruthy();
    expect(Password).toBeTruthy();
    expect(Submit).toBeTruthy();
  });

  it("Change Input", () => {
    const { ID, Password } = setup();

    fireEvent.change(ID, { target: { value: "test" } });
    fireEvent.change(Password, { target: { value: "test" } });

    expect(ID).toHaveAttribute("value", "test");
    expect(Password).toHaveAttribute("value", "test");
  });
});
