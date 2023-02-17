import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const RefreshCw03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M14 22C14 22 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C17.1187 4.39077 15.5993 3.58669 14 3.22383M14 22H20M14 22L14 16M10 2.00019C10 2.00019 9.15076 2.12152 5.63604 5.63624C2.12132 9.15095 2.12132 14.8494 5.63604 18.3642C6.88131 19.6094 8.40072 20.4135 10 20.7764M10 2.00019L4 2M10 2.00019L10 8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default RefreshCw03Icon;
