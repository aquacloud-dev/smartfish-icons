import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CurrencyEuroIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M19 5.51903C17.5176 4.25973 15.5975 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12C5 16.6944 8.80558 20.5 13.5 20.5C15.5975 20.5 17.5176 19.7403 19 18.481M3 14H13M3 10H13"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CurrencyEuroIcon;
