import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Trash03Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M18.2987 16.5193L19 6H5L5.70129 16.5193C5.8065 18.0975 5.85911 18.8867 6.19998 19.485C6.50009 20.0118 6.95276 20.4353 7.49834 20.6997C8.11803 21 8.90891 21 10.4907 21H13.5093C15.0911 21 15.882 21 16.5017 20.6997C17.0472 20.4353 17.4999 20.0118 17.8 19.485C18.1409 18.8867 18.1935 18.0975 18.2987 16.5193Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Trash03Icon;
