import { ItemCountControllers } from "@/components/entities/ItemCountControllers";
import { ItemCountControllersProps } from "@/components/entities/ItemCountControllers/ItemCountControllers.types";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof ItemCountControllers> = {
  component: ItemCountControllers,
  args: {
    currentCount: 2,
  },
  argTypes: {
    currentCount: { description: "Current value" },
    decreaseCountHandler: { description: "Decrease value handler" },
    increaseCountHandler: { description: "Increase value handler" },
    largeSize: { description: "Large block size trigger" },
  },
  tags: ["autodocs"],
};

export default meta;

const ItemCountControllersWithHooks = (args: Partial<ItemCountControllersProps>) => {
  const [currentCount, setCurrentCount] = useState(args.currentCount ?? 0);

  const decreaseCountHandler = () => setCurrentCount((prev) => (prev === 0 ? 0 : prev - 1));
  const increaseCountHandler = () => setCurrentCount((prev) => prev + 1);

  return (
    <ItemCountControllers
      {...args}
      currentCount={currentCount}
      decreaseCountHandler={decreaseCountHandler}
      increaseCountHandler={increaseCountHandler}
    />
  );
};

type Story = StoryObj<typeof ItemCountControllers>;
export const ItemCountControllersStory: Story = {
  name: "ItemCountControllers",
  render: (args) => <ItemCountControllersWithHooks {...args} />,
};
