import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const BluetoothSignalIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M14 17L8 22V12V2L14 7L8 12L14 17Z" fill="currentColor" opacity="0.12" />
		<path
			d="M2 7L14 17L8 22V2L14 7L2 17M20.1445 6.5C21.2581 8.04804 21.914 9.94743 21.914 12C21.914 14.0526 21.2581 15.952 20.1445 17.5M17 8.85724C17.6214 9.74811 17.9858 10.8315 17.9858 12.0001C17.9858 13.1686 17.6214 14.2521 17 15.143"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default BluetoothSignalIcon;
