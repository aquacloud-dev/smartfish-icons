import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const InfinityIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M18.1782 8C23.2742 8 23.2742 16 18.1782 16C13.0832 16 11.0452 8 5.43924 8C0.854238 8 0.854238 16 5.43924 16C11.0452 16 13.0832 8 18.1792 8H18.1782Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M18.178 8C23.274 8 23.274 16 18.178 16C13.083 16 11.045 8 5.43899 8C0.853994 8 0.853994 16 5.43899 16C11.045 16 13.083 8 18.179 8H18.178Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default InfinityIcon;
