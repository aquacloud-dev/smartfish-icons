import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Crop01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M9.2 18L18 18V9.2C18 8.0799 18 7.51984 17.782 7.09202C17.5903 6.71569 17.2843 6.40973 16.908 6.21799C16.4802 6 15.9201 6 14.8 6H6V14.8C6 15.9201 6 16.4802 6.21799 16.908C6.40974 17.2843 6.7157 17.5903 7.09202 17.782C7.51984 18 8.0799 18 9.2 18Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.07989 18 9.2V22M22 18L9.2 18C8.07989 18 7.51984 18 7.09202 17.782C6.71569 17.5903 6.40973 17.2843 6.21799 16.908C6 16.4802 6 15.9201 6 14.8V2"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Crop01Icon;
