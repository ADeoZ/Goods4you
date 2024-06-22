import {
  MinusButton as MinusButtonComponent,
  PlusButton as PlusButtonComponent,
  SecondaryButton,
} from "@/components/entities/SecondaryButton";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
  args: {
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    disabled: { description: "Disable button" },
    onClick: { description: "onClick handler" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SecondaryButton>;
export const MinusButton: Story = {
  render: (args) => <MinusButtonComponent {...args} />,
};

export const PlusButton: Story = {
  render: (args) => <PlusButtonComponent {...args} />,
};
