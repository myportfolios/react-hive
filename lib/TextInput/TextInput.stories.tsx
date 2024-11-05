import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextInput } from "./TextInput";

export const ActionsData = {
  handleUserInput: fn(),
};
const meta: Meta = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export default meta;
export const Small: StoryObj = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge: StoryObj = {
  args: {
    size: "xl",
  },
};
