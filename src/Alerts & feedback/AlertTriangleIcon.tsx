import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const AlertTriangleIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M2.39043 18.0983L10.6153 3.89171C11.0699 3.10655 11.2972 2.71396 11.5937 2.58211C11.8524 2.4671 12.1476 2.4671 12.4063 2.58211C12.7028 2.71396 12.9301 3.10654 13.3847 3.89171L21.6096 18.0983C22.0658 18.8863 22.2939 19.2803 22.2602 19.6037C22.2308 19.8857 22.083 20.142 21.8536 20.3088C21.5907 20.5 21.1354 20.5 20.2249 20.5H3.77511C2.86459 20.5 2.40933 20.5 2.14637 20.3088C1.91701 20.142 1.76924 19.8857 1.73984 19.6037C1.70612 19.2803 1.93423 18.8863 2.39043 18.0983Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 8.99999V13M12 17H12.01M10.6153 3.89171L2.39043 18.0983C1.93423 18.8863 1.70612 19.2803 1.73984 19.6037C1.76924 19.8857 1.91701 20.142 2.14637 20.3088C2.40933 20.5 2.86459 20.5 3.77511 20.5H20.2249C21.1354 20.5 21.5907 20.5 21.8536 20.3088C22.083 20.142 22.2308 19.8857 22.2602 19.6037C22.2939 19.2803 22.0658 18.8863 21.6096 18.0983L13.3847 3.89171C12.9301 3.10654 12.7028 2.71396 12.4063 2.58211C12.1476 2.4671 11.8524 2.4671 11.5937 2.58211C11.2972 2.71396 11.0699 3.10655 10.6153 3.89171Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default AlertTriangleIcon;
