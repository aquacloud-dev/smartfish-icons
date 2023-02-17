import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Cryptocurrency01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M17.8779 20.0899C16.1694 21.3312 14.1118 21.9998 12 21.9998C9.88821 21.9998 7.83063 21.3312 6.12215 20.0899M16.3837 3.01182C18.2818 3.93756 19.8381 5.44044 20.8295 7.30504C21.8209 9.16964 22.1966 11.3002 21.9027 13.3915M2.09742 13.3914C1.80352 11.3002 2.1792 9.16955 3.17063 7.30494C4.16205 5.44034 5.71832 3.93747 7.61639 3.01172M17.5 11.9998C17.5 15.0373 15.0376 17.4998 12 17.4998C8.96244 17.4998 6.50001 15.0373 6.50001 11.9998C6.50001 8.96219 8.96244 6.49976 12 6.49976C15.0376 6.49976 17.5 8.96219 17.5 11.9998Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Cryptocurrency01Icon;
