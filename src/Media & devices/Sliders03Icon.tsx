import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Sliders03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M15.0505 9H5.5C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4H15.0505C14.4022 4.63526 14 5.52066 14 6.5C14 7.47934 14.4022 8.36474 15.0505 9Z"
				fill="currentColor"
			/>
			<path
				d="M8.94971 20H18.5002C19.8809 20 21.0002 18.8807 21.0002 17.5C21.0002 16.1193 19.8809 15 18.5002 15H8.94971C9.59798 15.6353 10.0002 16.5207 10.0002 17.5C10.0002 18.4793 9.59798 19.3647 8.94971 20Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M15.0505 9H5.5C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4H15.0505M8.94949 20H18.5C19.8807 20 21 18.8807 21 17.5C21 16.1193 19.8807 15 18.5 15H8.94949M3 17.5C3 19.433 4.567 21 6.5 21C8.433 21 10 19.433 10 17.5C10 15.567 8.433 14 6.5 14C4.567 14 3 15.567 3 17.5ZM21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Sliders03Icon;
