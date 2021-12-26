import { Meta } from "@storybook/react";
import Input from "@/components/atoms/Input";
import { InputProps } from "@/components/atoms/Input";

export default {
    title: "Input",
    component: Input
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;
export const Default = Template.bind({});