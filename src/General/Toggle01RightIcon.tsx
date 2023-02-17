import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Toggle01RightIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C14.2386 17 12 14.7614 12 12C12 9.23858 14.2386 7 17 7H7Z"
			fill="currentColor"
			fillRule="evenodd"
			opacity="0.12"
		/>
		<path
			d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7M17 17C14.2386 17 12 14.7614 12 12C12 9.23858 14.2386 7 17 7"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Toggle01RightIcon;
