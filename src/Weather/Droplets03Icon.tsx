import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Droplets03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M7 15.7798C9.2 15.7798 11 13.9498 11 11.7298C11 10.5698 10.43 9.46979 9.29 8.53979C8.15 7.60979 7.29 6.22979 7 4.77979C6.71 6.22979 5.86 7.61979 4.71 8.53979C3.56 9.45979 3 10.5798 3 11.7298C3 13.9498 4.8 15.7798 7 15.7798Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12.56 6.08C13.2478 4.98112 13.7353 3.76904 14 2.5C14.5 5 16 7.4 18 9C20 10.6 21 12.5 21 14.5C21.0057 15.8823 20.6009 17.2352 19.8368 18.3871C19.0727 19.539 17.9838 20.4382 16.7081 20.9705C15.4324 21.5028 14.0274 21.6444 12.6712 21.3773C11.3149 21.1101 10.0685 20.4463 9.09 19.47M7 15.78C9.2 15.78 11 13.95 11 11.73C11 10.57 10.43 9.47 9.29 8.54C8.15 7.61 7.29 6.23 7 4.78C6.71 6.23 5.86 7.62 4.71 8.54C3.56 9.46 3 10.58 3 11.73C3 13.95 4.8 15.78 7 15.78Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Droplets03Icon;
