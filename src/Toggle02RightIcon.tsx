import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Toggle02RightIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M14 16H6.00049C3.79135 16 2.00049 14.2091 2.00049 12C2.00049 9.79086 3.79135 8 6.00049 8H14C12.7858 8.91223 12.0005 10.3644 12.0005 12C12.0005 13.6356 12.7858 15.0878 14 16Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M14 16H6.00049C3.79135 16 2.00049 14.2091 2.00049 12C2.00049 9.79086 3.79135 8 6.00049 8H14M22 12C22 14.7614 19.7614 17 17 17C14.2386 17 12 14.7614 12 12C12 9.23858 14.2386 7 17 7C19.7614 7 22 9.23858 22 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Toggle02RightIcon;
