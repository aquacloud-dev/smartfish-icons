import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const LogOut04Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M10.6667 21C5.8802 21 2 16.9706 2 12C2 7.02944 5.8802 3 10.6667 3C12.2452 3 13.7252 3.43827 15 4.20404V19.796C13.7252 20.5617 12.2452 21 10.6667 21Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default LogOut04Icon;
