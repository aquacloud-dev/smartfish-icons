import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CompassIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 9C13.3807 9 14.5 7.88071 14.5 6.5C14.5 5.11929 13.3807 4 12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9C13.3807 9 14.5 7.88071 14.5 6.5C14.5 5.11929 13.3807 4 12 4ZM12 4V2M21 14.9375C18.8012 17.4287 15.5841 19 12 19C8.41592 19 5.19883 17.4287 3 14.9375M10.7448 8.66169L3 22M13.2552 8.66169L21 22"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CompassIcon;
