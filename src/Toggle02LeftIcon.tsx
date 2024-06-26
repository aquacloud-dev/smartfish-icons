import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Toggle02LeftIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M10.0005 16H18C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8H10.0005C11.2147 8.91223 12 10.3644 12 12C12 13.6356 11.2147 15.0878 10.0005 16Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M10.0005 16H18C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8H10.0005M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Toggle02LeftIcon;
