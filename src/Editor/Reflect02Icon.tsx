import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Reflect02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 3V6M12 10.5V13.5M12 18V21M22 12H15.5M15.5 12L19.5 16M15.5 12L19.5 8M2 12H8.5M8.5 12L4.5 16M8.5 12L4.5 8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Reflect02Icon;
