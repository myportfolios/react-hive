import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    /**methods to handle events on Button component*/
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    children: "Primary Button",
  },
};
