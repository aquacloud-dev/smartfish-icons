import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CurrencyBitcoinCircleIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M9.5 7.5H13.75C14.9926 7.5 16 8.50736 16 9.75C16 10.9926 14.9926 12 13.75 12H9.5H14.25C15.4926 12 16.5 13.0074 16.5 14.25C16.5 15.4926 15.4926 16.5 14.25 16.5H9.5M9.5 7.5H8M9.5 7.5V16.5M9.5 16.5H8M10 6V7.5M10 16.5V18M13 6V7.5M13 16.5V18M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CurrencyBitcoinCircleIcon;
