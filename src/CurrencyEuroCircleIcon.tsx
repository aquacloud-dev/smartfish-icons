import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CurrencyEuroCircleIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M15.3333 8.27316C14.4487 7.48142 13.2806 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C13.2806 17 14.4487 16.5186 15.3333 15.7268M6 13.5H11M6 10.5H11M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CurrencyEuroCircleIcon;
