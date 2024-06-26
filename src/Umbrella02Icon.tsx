import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Umbrella02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 2C6.47715 2 2 6.47715 2 12C2 12 3.38983 11 5 11C6.61017 11 8 12 8 12C8 12 10.3898 11 12 11C13.6102 11 16 12 16 12C16 12 17.3898 11 19 11C20.6102 11 22 12 22 12C22 6.47715 17.5228 2 12 2Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M7 19.4C7 20.8359 8.11929 22 9.5 22C10.8807 22 12 20.8359 12 19.4V11M12 11C10.3898 11 8 12 8 12C8 12 6.61017 11 5 11C3.38983 11 2 12 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12 20.6102 11 19 11C17.3898 11 16 12 16 12C16 12 13.6102 11 12 11Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Umbrella02Icon;
