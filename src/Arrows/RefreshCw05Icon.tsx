import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const RefreshCw05Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M20.4532 12.893C20.1754 15.5029 18.6966 17.9487 16.2496 19.3614C12.1842 21.7086 6.98564 20.3157 4.63843 16.2502L4.38843 15.8172M3.54637 11.107C3.82418 8.49711 5.30297 6.05138 7.74995 4.63862C11.8154 2.29141 17.014 3.68434 19.3612 7.74983L19.6112 8.18285M3.49341 18.0661L4.22546 15.334L6.95751 16.0661M17.0426 7.93401L19.7747 8.66606L20.5067 5.93401"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default RefreshCw05Icon;
