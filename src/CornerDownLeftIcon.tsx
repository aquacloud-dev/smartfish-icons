import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CornerDownLeftIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M20 4V5.4C20 8.76031 20 10.4405 19.346 11.7239C18.7708 12.8529 17.8529 13.7708 16.7239 14.346C15.4405 15 13.7603 15 10.4 15H4M4 15L9 10M4 15L9 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CornerDownLeftIcon;