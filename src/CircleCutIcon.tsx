import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CircleCutIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M7 3.33789C4.01099 5.06694 2 8.29866 2 12.0001C2 15.7015 4.011 18.9332 7 20.6622C9.98901 18.9332 12 15.7015 12 12.0001C12 8.29866 9.98901 5.06694 7 3.33789Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M7 20.6622C9.98901 18.9331 12 15.7014 12 12C12 8.29859 9.98901 5.06687 7 3.33782M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CircleCutIcon;
