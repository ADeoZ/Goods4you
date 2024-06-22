import { Input } from "@/components/entities/Input";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { contextRender } from "./common/contextRender";

describe("Input component", () => {
  it("render input", () => {
    contextRender(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("input placeholder", () => {
    contextRender(<Input placeholder="Test placeholder" />);
    const input = screen.getByPlaceholderText("Test placeholder");
    expect(input).toBeInTheDocument();
  });

  it("input attributes", () => {
    contextRender(<Input aria-label="testLabel" name="testName" type="email" disabled />);
    const input = screen.getByRole("textbox", { name: "testLabel" });
    expect(input).toHaveAttribute("name", "testName");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toBeDisabled();
    expect(input).toHaveDisplayValue("");
  });

  it("input focus", async () => {
    contextRender(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).not.toHaveFocus();
    const user = userEvent.setup();
    await user.tab();
    expect(input).toHaveFocus();
    await user.tab({ shift: true });
    expect(input).not.toHaveFocus();
    await user.click(input);
    expect(input).toHaveFocus();
  });

  it("input controls", async () => {
    contextRender(<Input />);
    const input = screen.getByRole("textbox");
    const user = userEvent.setup();
    await user.type(input, "test value");
    expect(input).toHaveValue("test value");
    await user.keyboard("{Backspace}".repeat(6));
    expect(input).toHaveValue("test");
    await user.clear(input);
    expect(input).toHaveValue("");
  });
});
