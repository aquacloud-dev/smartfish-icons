import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const LifeBuoy01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M9.20733 14.7927C8.46249 14.0662 8 13.0516 8 11.929C8 10.8425 8.43318 9.85714 9.13626 9.13628L4.92893 4.92896C1.02369 8.8342 1.02369 15.1658 4.92893 19.0711L9.20733 14.7927Z"
				fill="currentColor"
			/>
			<path
				d="M14.79 9.20735C15.5349 9.93382 15.9974 10.9484 15.9974 12.0711C15.9974 13.1576 15.5642 14.1429 14.8611 14.8638L19.0684 19.0711C22.9737 15.1658 22.9737 8.8342 19.0684 4.92896L14.79 9.20735Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default LifeBuoy01Icon;
