import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Globe03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 2C15 4 15.9228 8.29203 16 12C15.9228 15.708 15 20 12 22C9 20 8.07725 15.708 8 12C8.07725 8.29204 9 4 12 2Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 2C15 4 15.9228 8.29203 16 12C15.9228 15.708 15 20 12 22M12 2C9 4 8.07725 8.29203 8 12C8.07725 15.708 9 20 12 22M12 2C6.47715 2 2 6.47715 2 12M12 2C17.5228 2 22 6.47715 22 12M12 22C17.5229 22 22 17.5228 22 12M12 22C6.47716 22 2 17.5228 2 12M22 12C20 15 15.708 15.9228 12 16C8.29203 15.9228 4 15 2 12M22 12C20 9 15.708 8.07725 12 8C8.29203 8.07725 4 9 2 12"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Globe03Icon;
