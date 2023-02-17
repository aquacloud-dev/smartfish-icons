import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const FileSearch01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M18 21.5C19.933 21.5 21.5 19.933 21.5 18C21.5 16.067 19.933 14.5 18 14.5C16.067 14.5 14.5 16.067 14.5 18C14.5 19.933 16.067 21.5 18 21.5Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default FileSearch01Icon;
