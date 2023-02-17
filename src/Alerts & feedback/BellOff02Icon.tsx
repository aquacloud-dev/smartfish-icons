import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const BellOff02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M4.34968 14.6055C5.22049 13.206 6.00002 11.0903 6.00002 8.00009C6.00002 7.40415 6.08868 6.81735 6.25869 6.25732L17 17.0001H5.38887C4.19261 17.0001 3.59448 17.0001 3.46179 16.9017C3.31488 16.7927 3.27626 16.7232 3.26134 16.5408C3.24788 16.3762 3.61515 15.786 4.34968 14.6055Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M14 21H10M8.63306 3.03371C9.61959 2.3649 10.791 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 10.1008 18.2702 11.7512 18.6484 13.0324M6.25867 6.25723C6.08866 6.81726 6 7.40406 6 8C6 11.0902 5.22047 13.206 4.34966 14.6054C3.61513 15.7859 3.24786 16.3761 3.26132 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38885 17H17M21 21L3 3"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default BellOff02Icon;
