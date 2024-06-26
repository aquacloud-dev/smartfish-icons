import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Contrast03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M16.0001 8.50008C16.0001 12.6422 12.6422 16.0001 8.50008 16.0001C7.88541 16.0001 7.28802 15.9261 6.71631 15.7867C7.89593 17.4298 9.82301 18.5001 12.0001 18.5001C15.5899 18.5001 18.5001 15.5899 18.5001 12.0001C18.5001 9.82301 17.4298 7.89593 15.7867 6.71631C15.9261 7.28802 16.0001 7.88541 16.0001 8.50008Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M16 8.5C16 12.6421 12.6421 16 8.5 16C7.88534 16 7.28795 15.9261 6.71623 15.7866C7.89585 17.4297 9.82294 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 9.82294 17.4297 7.89585 15.7866 6.71623C15.9261 7.28795 16 7.88534 16 8.5Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Contrast03Icon;
