import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CloudOffIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M6.5 18.9998C4.01472 18.9998 2 16.9851 2 14.4998C2 12.1562 3.79151 10.2311 6.07974 10.0192C6.24759 8.99817 6.67317 8.06399 7.28746 7.28564L18.8112 18.8058C18.3963 18.9319 17.9561 18.9998 17.5 18.9998H6.5Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M21.7003 16.1181C21.8939 15.616 22 15.0704 22 14.5C22 12.1564 20.2085 10.2313 17.9203 10.0194C17.4522 7.17213 14.9798 5 12 5C11.5534 5 11.1183 5.04879 10.6995 5.14132M7.28746 7.28585C6.67317 8.06419 6.24759 8.99838 6.07974 10.0194C3.79151 10.2313 2 12.1564 2 14.5C2 16.9853 4.01472 19 6.5 19H17.5C17.9561 19 18.3963 18.9322 18.8112 18.806M3 3L21 21"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CloudOffIcon;
