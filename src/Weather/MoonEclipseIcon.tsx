import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const MoonEclipseIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M16.3803 20.9921C15.0575 21.6377 13.5711 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.5711 2 15.0575 2.36229 16.3803 3.00789C16.2542 3.00265 16.1274 3 16 3C11.0294 3 7 7.02944 7 12C7 16.9706 11.0294 21 16 21C16.1274 21 16.2542 20.9974 16.3803 20.9921Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M20.0017 6.00022C22.6667 9.54505 22.6661 14.4578 20 18.0021M12 22C13.5711 22 15.0575 21.6377 16.3803 20.9921C16.2542 20.9974 16.1274 21 16 21C11.0294 21 7 16.9706 7 12C7 7.02944 11.0294 3 16 3C16.1274 3 16.2542 3.00265 16.3803 3.00789C15.0575 2.36229 13.5711 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default MoonEclipseIcon;
