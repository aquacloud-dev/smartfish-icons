import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CurrencyPoundIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M17.5 20.5H6.5C6.5 20.5 10 17.7413 10 13.5C10 10.6725 7.91376 9.66123 7.8837 7.30497C7.88566 2.64078 13.5005 2.88877 15.4521 4.74258M6.5 13.5H15"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CurrencyPoundIcon;
