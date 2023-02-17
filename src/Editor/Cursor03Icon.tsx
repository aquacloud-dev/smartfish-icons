import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Cursor03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M4.71201 3.67446C4.17144 3.46151 3.90116 3.35504 3.72894 3.41232C3.5794 3.46207 3.46207 3.5794 3.41232 3.72894C3.35504 3.90116 3.46151 4.17144 3.67446 4.71201L8.97509 18.1675C9.14661 18.6028 9.23237 18.8205 9.37213 18.9079C9.49397 18.9841 9.64268 19.0041 9.78035 18.963C9.93827 18.9158 10.0787 18.7286 10.3594 18.3542L12.5001 15.5001L15.9494 20.2429C16.139 20.5036 16.2338 20.634 16.3547 20.6885C16.4607 20.7363 16.5801 20.7457 16.6923 20.715C16.8201 20.68 16.9341 20.566 17.1621 20.338L20.338 17.1621C20.566 16.9341 20.68 16.8201 20.715 16.6923C20.7457 16.5801 20.7363 16.4607 20.6885 16.3547C20.634 16.2338 20.5036 16.139 20.2429 15.9494L15.5001 12.5001L18.3542 10.3594C18.7286 10.0787 18.9158 9.93827 18.963 9.78035C19.0041 9.64268 18.9841 9.49397 18.9079 9.37213C18.8205 9.23237 18.6028 9.14661 18.1675 8.97509L4.71201 3.67446Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M4.71201 3.67446C4.17144 3.46151 3.90116 3.35504 3.72894 3.41232C3.5794 3.46207 3.46207 3.5794 3.41232 3.72894C3.35504 3.90116 3.46151 4.17144 3.67446 4.71201L8.97509 18.1675C9.14661 18.6028 9.23237 18.8205 9.37213 18.9079C9.49397 18.9841 9.64268 19.0041 9.78035 18.963C9.93827 18.9158 10.0787 18.7286 10.3594 18.3542L12.5001 15.5001L15.9494 20.2429C16.139 20.5036 16.2338 20.634 16.3547 20.6885C16.4607 20.7363 16.5801 20.7457 16.6923 20.715C16.8201 20.68 16.9341 20.566 17.1621 20.338L20.338 17.1621C20.566 16.9341 20.68 16.8201 20.715 16.6923C20.7457 16.5801 20.7363 16.4607 20.6885 16.3547C20.634 16.2338 20.5036 16.139 20.2429 15.9494L15.5001 12.5001L18.3542 10.3594C18.7286 10.0787 18.9158 9.93827 18.963 9.78035C19.0041 9.64268 18.9841 9.49397 18.9079 9.37213C18.8205 9.23237 18.6028 9.14661 18.1675 8.97509L4.71201 3.67446Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Cursor03Icon;
