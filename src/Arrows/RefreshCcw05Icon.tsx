import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const RefreshCcw05Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M8.54661 19.7675C10.9457 20.8319 13.8032 20.7741 16.2502 19.3613C20.3157 17.0141 21.7086 11.8156 19.3614 7.75008L19.1114 7.31706M4.63851 16.2502C2.2913 12.1847 3.68424 6.98619 7.74972 4.63898C10.1967 3.22621 13.0542 3.16841 15.4533 4.23277M2.49341 16.3338L5.22546 17.0659L5.95751 14.3338M18.0426 9.6659L18.7747 6.93385L21.5067 7.6659"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default RefreshCcw05Icon;
