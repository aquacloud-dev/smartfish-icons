import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Download03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M11.896 21.9994C17.4185 22.0569 21.942 17.6265 21.9995 12.104C22.0569 6.58142 17.6266 2.05794 12.104 2.0005C6.58146 1.94305 2.05799 6.37339 2.00054 11.8959C1.9431 17.4185 6.37344 21.942 11.896 21.9994Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Download03Icon;
