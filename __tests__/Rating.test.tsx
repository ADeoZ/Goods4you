import { Rating } from "@/components/entities/Rating";
import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { contextRender } from "./common/contextRender";

const mockProps = { value: 3 };

describe("Rating component", () => {
  it("render rating", () => {
    contextRender(<Rating {...mockProps} />);
    const rating = screen.getByTestId("RatingComponent");
    expect(rating).toBeInTheDocument();
  });

  it("rating contain star", async () => {
    contextRender(<Rating {...mockProps} />);
    const rating = screen.getByTestId("RatingComponent");
    const starsInRating = await within(rating).findAllByTestId("RatingStar");
    expect(starsInRating.length).toBe(mockProps.value);
  });

  it("rating empty", async () => {
    contextRender(<Rating value={0} />);
    const rating = screen.getByTestId("RatingComponent");
    expect(rating).toBeEmptyDOMElement();
  });

  it("rating correct rounding", async () => {
    contextRender(<Rating value={4.785} />);
    const rating = screen.getByTestId("RatingComponent");
    const starsInRating = await within(rating).findAllByTestId("RatingStar");
    expect(starsInRating.length).toBe(5);
  });

  it("rating accessibility", () => {
    contextRender(<Rating {...mockProps} />);
    const rating = screen.getByTestId("RatingComponent");
    expect(rating).toHaveAccessibleDescription(`Current rating value is ${mockProps.value}`);
    expect(rating).toHaveAttribute("aria-hidden", "true");
    const nextHiddenText = rating.nextElementSibling;
    expect(nextHiddenText).toHaveTextContent(`Current rating value is ${mockProps.value}`);
    expect(nextHiddenText).toHaveStyle("width: 1px");
    expect(nextHiddenText).toHaveStyle("height: 1px");
  });
});
