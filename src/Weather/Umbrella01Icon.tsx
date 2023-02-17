import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Umbrella01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 2C7.01953 2 2.88948 5.64091 2.12627 10.4063C2.05178 10.8714 2.01453 11.1039 2.10805 11.3523C2.18246 11.55 2.36463 11.7636 2.54801 11.8684C2.7785 12 3.05232 12 3.59997 12H20.4C20.9476 12 21.2214 12 21.4519 11.8684C21.6353 11.7636 21.8175 11.55 21.8919 11.3523C21.9854 11.1039 21.9482 10.8714 21.8737 10.4063C21.1104 5.64091 16.9804 2 12 2Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M17 19.4C17 20.8359 15.8807 22 14.5 22C13.1193 22 12 20.8359 12 19.4V12M2.12627 10.4063C2.88948 5.64091 7.01953 2 12 2C16.9804 2 21.1104 5.64091 21.8737 10.4063C21.9482 10.8714 21.9854 11.1039 21.8919 11.3523C21.8175 11.55 21.6353 11.7636 21.4519 11.8684C21.2214 12 20.9476 12 20.4 12H3.59997C3.05232 12 2.7785 12 2.54801 11.8684C2.36463 11.7636 2.18246 11.55 2.10805 11.3523C2.01453 11.1039 2.05178 10.8714 2.12627 10.4063Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Umbrella01Icon;
