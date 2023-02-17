import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Toggle01LeftIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H7C9.76142 7 12 9.23858 12 12C12 14.7614 9.76142 17 7 17Z"
			fill="currentColor"
			fillRule="evenodd"
			opacity="0.12"
		/>
		<path
			d="M7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H7M7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Toggle01LeftIcon;
