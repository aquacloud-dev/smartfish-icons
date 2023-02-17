import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const FramerIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M12 15.5V22.5L5 15.5H12Z" fill="currentColor" opacity="0.12" />
		<path
			d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default FramerIcon;
