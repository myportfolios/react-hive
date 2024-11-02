import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./Login";

const ActionData = {};
const meta: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Data$/,
  args: {
    ...ActionData,
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    title: "Enter details to login",
  },
};
