import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Strikethrough02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M14 20C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12H10.5C12.7091 12 14.5 13.7909 14.5 16C14.5 18.2091 12.7091 20 10.5 20H14Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12M10.5 20C12.7091 20 14.5 18.2091 14.5 16C14.5 13.7909 12.7091 12 10.5 12M18 8C18 5.79086 16.2091 4 14 4H10C7.79086 4 6 5.79086 6 8M13.5 4C11.2909 4 9.5 5.79086 9.5 8M3 12H21"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Strikethrough02Icon;
