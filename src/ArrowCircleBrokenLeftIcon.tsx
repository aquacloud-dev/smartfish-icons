import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ArrowCircleBrokenLeftIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M2 12C2 17.5228 6.47715 22 12 22C15.7014 22 18.9331 19.989 20.6622 17V7C18.9331 4.01099 15.7014 2 12 2C6.47715 2 2 6.47715 2 12Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M20.6621 17C18.933 19.989 15.7013 22 11.9999 22C6.47703 22 1.99988 17.5228 1.99988 12C1.99988 6.47715 6.47703 2 11.9999 2C15.7013 2 18.933 4.01099 20.6621 7M11.9999 8L7.99995 12M7.99995 12L11.9999 16M7.99995 12H21.9999"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ArrowCircleBrokenLeftIcon;
