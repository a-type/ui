import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { tipTapClassName, tipTapReadonlyClassName } from './index.js';

const meta = {
	title: 'richEditor',
	argTypes: {
		readonly: { control: 'boolean' },
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<{ readonly: boolean }>;

export default meta;

type Story = StoryObj<{ readonly: boolean }>;

export const Default: Story = {
	render(args) {
		return (
			<div
				className={clsx(
					tipTapClassName,
					args.readonly && tipTapReadonlyClassName,
				)}
			>
				<div className="ProseMirror">
					<p>{paragraphText}</p>
					<h1>Heading 1</h1>
					<p>{paragraphText}</p>
					<h2>Heading 2</h2>
					<p>{paragraphText}</p>
					<p>{paragraphText}</p>
					<hr />
					<p>{paragraphText}</p>

					<blockquote>{paragraphText}</blockquote>
					<h3>Heading 3</h3>
					<ul>
						<li>{paragraphText}</li>
						<li>{paragraphText}</li>
					</ul>
					<p>{paragraphText}</p>
					<ol>
						<li>{paragraphText}</li>
						<li>{paragraphText}</li>
					</ol>
					<h4>Heading 4</h4>
					<p>{paragraphText}</p>
					<p>
						<mark>Highlighted</mark> text
					</p>
					<p>
						<a href="#">Link</a>
					</p>
					<p>
						<strong>Bold</strong> text
					</p>
					<p>
						<em>Italic</em> text
					</p>
				</div>
			</div>
		);
	},
};

const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
