import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const LogIn04Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M11.9999 22C17.5228 22 21.9999 17.5228 21.9999 12C21.9999 6.47715 17.5228 2 11.9999 2C8.29853 2 5.06682 4.01099 3.33777 7V17C5.06682 19.989 8.29853 22 11.9999 22Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 8L16 12M16 12L12 16M16 12H3M3.33782 7C5.06687 4.01099 8.29859 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.29859 22 5.06687 19.989 3.33782 17"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default LogIn04Icon;
