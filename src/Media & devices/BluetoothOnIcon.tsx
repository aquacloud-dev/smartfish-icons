import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const BluetoothOnIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M18 17L12 22V12V2L18 7L12 12L18 17Z" fill="currentColor" opacity="0.12" />
		<path
			d="M6 7L18 17L12 22V2L18 7L6 17"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default BluetoothOnIcon;
