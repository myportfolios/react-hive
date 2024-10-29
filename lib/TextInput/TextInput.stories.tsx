import { fn } from "@storybook/test";
import { TextInput } from "./TextInput";

export const ActionsData = {
  handleUserInput: fn(),
};
export default {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    ...ActionsData,
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge = {
  args: {
    size: "xl",
  },
};
