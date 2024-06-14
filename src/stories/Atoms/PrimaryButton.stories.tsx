import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  args: {
    disabled: false,
    onClick: fn(),
    children: "Button Name",
  },
  argTypes: {
    disabled: { description: "Disable button" },
    onClick: { description: "onClick handler" },
    children: { description: "Button label" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;
export const PrimaryStory: Story = { name: "Primary Button" };
