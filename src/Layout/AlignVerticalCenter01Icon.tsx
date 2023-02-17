import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const AlignVerticalCenter01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M3 12H21M12 2V8.5M12 8.5L16 4.5M12 8.5L8 4.5M12 22V15.5M12 15.5L16 19.5M12 15.5L8 19.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default AlignVerticalCenter01Icon;
