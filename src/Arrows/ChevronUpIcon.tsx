import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ChevronUpIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M18 15L12 9L6 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
	</svg>
));

export default ChevronUpIcon;
