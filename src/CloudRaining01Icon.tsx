import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CloudRaining01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M2 11.5C2 9.15643 3.79151 7.23129 6.07974 7.01937C6.54781 4.17213 9.02024 2 12 2C14.9798 2 17.4522 4.17213 17.9203 7.01937C20.2085 7.23129 22 9.15643 22 11.5C22 13.0602 21.206 14.435 20 15.2422H4C2.79401 14.435 2 13.0602 2 11.5Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M20 15.2422C21.206 14.435 22 13.0602 22 11.5C22 9.15643 20.2085 7.23129 17.9203 7.01937C17.4522 4.17213 14.9798 2 12 2C9.02024 2 6.54781 4.17213 6.07974 7.01937C3.79151 7.23129 2 9.15643 2 11.5C2 13.0602 2.79401 14.435 4 15.2422M8 18V20M8 12V14M16 18V20M16 12V14M12 20V22M12 14V16"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CloudRaining01Icon;
