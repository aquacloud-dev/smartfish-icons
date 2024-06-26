import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Database01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 8C16.9706 8 21 6.65685 21 5V18.9998C21 20.6598 17 21.9998 12 21.9998C7 21.9998 3 20.6598 3 18.9998V5C3 6.65685 7.02944 8 12 8Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Database01Icon;
