import { Story, Meta } from "@storybook/react";
import Preview, { PreviewProps } from "./PreviewBulma";
import { sampleNames } from "./sample";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Preview/Bulma",
  component: Preview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      options: sampleNames,
      control: { type: "select" },
    },
  },
} as Meta<PreviewProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<PreviewProps> = (args) => <Preview {...args} />;

export const Primary = Template.bind({});
