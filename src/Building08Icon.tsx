import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Building08Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M11.576 2.26498C11.7298 2.16884 11.8067 2.12077 11.8892 2.10203C11.9621 2.08546 12.0379 2.08546 12.1108 2.10203C12.1933 2.12077 12.2702 2.16884 12.424 2.26498L20 6.99998H4L11.576 2.26498Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M3 21H21M6 18V9.99998M10 18V9.99998M14 18V9.99998M18 18V9.99998M20 6.99998L12.424 2.26498C12.2702 2.16884 12.1933 2.12077 12.1108 2.10203C12.0379 2.08546 11.9621 2.08546 11.8892 2.10203C11.8067 2.12077 11.7298 2.16884 11.576 2.26498L4 6.99998H20Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Building08Icon;
