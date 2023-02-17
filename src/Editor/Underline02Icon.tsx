import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Underline02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M5 4V10C5 13.866 8.13401 17 12 17C12.6091 17 13.1999 16.9222 13.7633 16.776L13.6395 16.7501C10.6766 15.9352 8.5 13.2218 8.5 10V4H5Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M19 4V10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10V4M8.5 4V10C8.5 13.2218 10.6766 15.9352 13.6395 16.7501M4 21H20M3 4L10.5 4M17 4L21 4"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Underline02Icon;
