import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const IntersectCircleIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M16 9C16 12.866 12.866 16 9 16C8.68203 16 8.369 15.9788 8.06227 15.9377C8.0212 15.631 8 15.318 8 15C8 11.134 11.134 8 15 8C15.318 8 15.631 8.0212 15.9377 8.06227C15.9788 8.369 16 8.68203 16 9Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M15 22C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8C11.134 8 8 11.134 8 15C8 18.866 11.134 22 15 22Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default IntersectCircleIcon;
