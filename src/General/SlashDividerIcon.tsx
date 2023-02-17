import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const SlashDividerIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M7 22L17 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
	</svg>
));

export default SlashDividerIcon;
