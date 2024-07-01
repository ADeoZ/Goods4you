import { SearchBar } from "@/components/widgets/SearchBar";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  args: {
    searchHandler: fn(),
  },
  argTypes: {
    searchHandler: { description: "onChange and onSubmit handler" },
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

type Story = StoryObj<typeof SearchBar>;
export const SearchBarStory: Story = { name: "SearchBar" };
