import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Pilcrow02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M14 20V4H17.5V20H14Z" fill="currentColor" opacity="0.12" />
		<path
			d="M17.5 4V20M19.5 4H9C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12H14M14 4V20M12 20H19.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Pilcrow02Icon;
