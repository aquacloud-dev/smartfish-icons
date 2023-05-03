import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CurrencyBitcoinIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M9.5 2V4M9.5 20V22M13.5 2V4M13.5 20V22M7.5 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H7.5H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H7.5M7.5 4H5.5M7.5 4V20M7.5 20H5.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CurrencyBitcoinIcon;
