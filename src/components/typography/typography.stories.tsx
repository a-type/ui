import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/Box.js';
import { Heading, HeroText, Text } from './typography.js';

const meta = {
	title: 'Components/typography',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render() {
		return (
			<Box col gap>
				<HeroText emphasis="primary">
					Hero Text: Lorem ipsum dolor sit amet etc etc
				</HeroText>
				<Heading emphasis="primary">
					Heading Primary: Lorem ipsum dolor sit amet etc etc
				</Heading>
				<Heading emphasis="secondary">
					Heading Secondary: Lorem ipsum dolor sit amet etc etc
				</Heading>
				<Heading emphasis="ambient">
					Heading Ambient: Lorem ipsum dolor sit amet etc etc
				</Heading>
				<Text emphasis="primary">
					Text Primary: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the
					more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
					going through the cites of the word in classical literature,
					discovered the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
					of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
					on the theory of ethics, very popular during the Renaissance. The
					first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
					a line in section 1.10.32.
				</Text>
				<Text emphasis="secondary">
					Text Secondary: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the
					more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
					going through the cites of the word in classical literature,
					discovered the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
					of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
					on the theory of ethics, very popular during the Renaissance. The
					first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
					a line in section 1.10.32.
				</Text>
				<Text emphasis="ambient">
					Text Ambient: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the
					more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
					going through the cites of the word in classical literature,
					discovered the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
					of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
					on the theory of ethics, very popular during the Renaissance. The
					first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
					a line in section 1.10.32.
				</Text>

				<hr />

				<Text emphasis="secondary" italic underline strikethrough>
					Text Secondary: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the
					more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
					going through the cites of the word in classical literature,
					discovered the undoubtable source.
				</Text>
			</Box>
		);
	},
};

export const Modes: Story = {
	argTypes: {
		mode: {
			control: 'select',
			options: ['hero', 'heading', 'normal'],
		},
	},
	args: {
		mode: 'normal',
	},
	render({ mode }: any) {
		return (
			<Box col gap className={`@mode-${mode}`}>
				<Text emphasis="primary">
					Text Primary: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old.
				</Text>
				<Text emphasis="secondary">
					Text Secondary: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old.
				</Text>
				<Text emphasis="ambient">
					Text Ambient: Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old.
				</Text>
			</Box>
		);
	},
};
