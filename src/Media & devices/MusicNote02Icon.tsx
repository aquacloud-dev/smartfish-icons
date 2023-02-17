import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const MusicNote02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M9 21C10.6569 21 12 19.6569 12 18C12 16.3431 10.6569 15 9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 18V5.58888C12 4.73166 12 4.30306 12.1805 4.04492C12.3382 3.81952 12.5817 3.669 12.8538 3.6288C13.1655 3.58276 13.5488 3.77444 14.3155 4.1578L18 6.00003M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3432 7.34315 15 9 15C10.6569 15 12 16.3432 12 18Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default MusicNote02Icon;
