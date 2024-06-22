import { Input } from "@/components/entities/Input";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    disabled: false,
    onChange: fn(),
    type: "text",
    placeholder: "Placeholder",
  },
  argTypes: {
    disabled: { description: "Disable input" },
    onChange: { description: "onChange handler" },
    type: {
      description: "Input type",
      options: ["text", "email", "tel", "url", "search", "password", "number"],
      control: { type: "select" },
    },
    placeholder: { description: "Placeholder" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;
export const InputStory: Story = { name: "Input" };
