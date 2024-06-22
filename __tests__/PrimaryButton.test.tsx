import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { contextRender } from "./common/contextRender";

const mockFn = vi.fn();

describe("PrimaryButton component", () => {
  it("render button", () => {
    contextRender(<PrimaryButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeEmptyDOMElement();
  });

  it("button with text", () => {
    contextRender(<PrimaryButton>Test button</PrimaryButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Test button");
  });

  it("button click event", async () => {
    contextRender(<PrimaryButton onClick={() => mockFn()} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
    await user.dblClick(button);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("disabled button", () => {
    contextRender(<PrimaryButton disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("button attributes", () => {
    contextRender(<PrimaryButton name="testName" type="submit" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("name", "testName");
    expect(button).toHaveAttribute("type", "submit");
  });
});
