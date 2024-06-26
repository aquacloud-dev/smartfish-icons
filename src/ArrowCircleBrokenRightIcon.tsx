import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ArrowCircleBrokenRightIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M22.0001 12C22.0001 6.47715 17.5229 2 12.0001 2C8.29866 2 5.06694 4.01099 3.33789 7V17C5.06694 19.989 8.29866 22 12.0001 22C17.5229 22 22.0001 17.5228 22.0001 12Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C17.5229 2 22.0001 6.47715 22.0001 12C22.0001 17.5228 17.5229 22 12.0001 22C8.29866 22 5.06694 19.989 3.33789 17M12 16L16 12M16 12L12 8M16 12H2"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ArrowCircleBrokenRightIcon;
