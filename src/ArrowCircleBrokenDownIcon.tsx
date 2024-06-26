import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ArrowCircleBrokenDownIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 8.29866 19.989 5.06694 17 3.33789H7C4.01099 5.06694 2 8.29866 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M17 3.33782C19.989 5.06687 22 8.29859 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.29859 4.01099 5.06687 7 3.33782M8 12L12 16M12 16L16 12M12 16V2"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ArrowCircleBrokenDownIcon;
