import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const DropperIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 7.99981L17 2.99981C18.1046 1.89524 19.8954 1.89525 21 2.99981C22.1046 4.10438 22.1046 5.89525 21 6.99981L16 11.9998L12 7.99981Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M10.5 6.49981L17.5 13.4998M2 21.9998C2 21.9998 6.5 21.4998 9 18.9998L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99982C19.8954 1.89525 18.1046 1.89524 17 2.99981L5 14.9998C2.5 17.4998 2 21.9998 2 21.9998Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default DropperIcon;
