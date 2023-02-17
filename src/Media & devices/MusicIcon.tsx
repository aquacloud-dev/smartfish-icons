import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const MusicIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M11.5 21C13.1569 21 14.5 19.6569 14.5 18C14.5 16.3431 13.1569 15 11.5 15C9.84315 15 8.5 16.3431 8.5 18C8.5 19.6569 9.84315 21 11.5 21Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M14.5 18V5.58888C14.5 4.73166 14.5 4.30306 14.6805 4.04492C14.8382 3.81952 15.0817 3.669 15.3538 3.6288C15.6655 3.58276 16.0488 3.77444 16.8155 4.1578L20.5 6.00003M14.5 18C14.5 19.6569 13.1569 21 11.5 21C9.84315 21 8.5 19.6569 8.5 18C8.5 16.3432 9.84315 15 11.5 15C13.1569 15 14.5 16.3432 14.5 18ZM6.5 10V4.00003M3.5 7.00003H9.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default MusicIcon;
