import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Link05Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M17 17H15.7778C15.3482 17 15 16.6518 15 16.2222V7.77778C15 7.34822 15.3482 7 15.7778 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M8 12L18 12M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9M15.7778 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15.7778C15.3482 7 15 7.34822 15 7.77778V16.2222C15 16.6518 15.3482 17 15.7778 17Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Link05Icon;
