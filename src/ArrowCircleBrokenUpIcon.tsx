import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ArrowCircleBrokenUpIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 2C6.47715 2 2 6.47715 2 12C2 15.7014 4.01099 18.9331 7 20.6622H17C19.989 18.9331 22 15.7014 22 12C22 6.47715 17.5228 2 12 2Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M7 20.6621C4.01099 18.933 2 15.7013 2 11.9999C2 6.47703 6.47715 1.99988 12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 15.7013 19.989 18.933 17 20.6621M16 11.9999L12 7.99995M12 7.99995L8 11.9999M12 7.99995V21.9999"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ArrowCircleBrokenUpIcon;
