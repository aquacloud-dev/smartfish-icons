import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Perspective01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H5.4C5.96005 3 6.24008 3 6.45399 3.10899C6.64215 3.20487 6.79513 3.35785 6.89101 3.54601C7 3.75992 7 4.03995 7 4.6V5.4C7 5.96005 7 6.24008 6.89101 6.45399C6.79513 6.64215 6.64215 6.79513 6.45399 6.89101C6.24008 7 5.96005 7 5.4 7H4.6C4.03995 7 3.75992 7 3.54601 6.89101C3.35785 6.79513 3.20487 6.64215 3.10899 6.45399C3 6.24008 3 5.96005 3 5.4V4.6Z"
				fill="currentColor"
			/>
			<path
				d="M3 18.6C3 18.0399 3 17.7599 3.10899 17.546C3.20487 17.3578 3.35785 17.2049 3.54601 17.109C3.75992 17 4.03995 17 4.6 17H5.4C5.96005 17 6.24008 17 6.45399 17.109C6.64215 17.2049 6.79513 17.3578 6.89101 17.546C7 17.7599 7 18.0399 7 18.6V19.4C7 19.9601 7 20.2401 6.89101 20.454C6.79513 20.6422 6.64215 20.7951 6.45399 20.891C6.24008 21 5.96005 21 5.4 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V18.6Z"
				fill="currentColor"
			/>
			<path
				d="M17 6.6C17 6.03995 17 5.75992 17.109 5.54601C17.2049 5.35785 17.3578 5.20487 17.546 5.10899C17.7599 5 18.0399 5 18.6 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V7.4C21 7.96005 21 8.24008 20.891 8.45399C20.7951 8.64215 20.6422 8.79513 20.454 8.89101C20.2401 9 19.9601 9 19.4 9H18.6C18.0399 9 17.7599 9 17.546 8.89101C17.3578 8.79513 17.2049 8.64215 17.109 8.45399C17 8.24008 17 7.96005 17 7.4V6.6Z"
				fill="currentColor"
			/>
			<path
				d="M17 16.6C17 16.0399 17 15.7599 17.109 15.546C17.2049 15.3578 17.3578 15.2049 17.546 15.109C17.7599 15 18.0399 15 18.6 15H19.4C19.9601 15 20.2401 15 20.454 15.109C20.6422 15.2049 20.7951 15.3578 20.891 15.546C21 15.7599 21 16.0399 21 16.6V17.4C21 17.9601 21 18.2401 20.891 18.454C20.7951 18.6422 20.6422 18.7951 20.454 18.891C20.2401 19 19.9601 19 19.4 19H18.6C18.0399 19 17.7599 19 17.546 18.891C17.3578 18.7951 17.2049 18.6422 17.109 18.454C17 18.2401 17 17.9601 17 17.4V16.6Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M19 9V15M5 7V17M17 6.71429L7 5.28571M17 17.2857L7 18.7143M4.6 7H5.4C5.96005 7 6.24008 7 6.45399 6.89101C6.64215 6.79513 6.79513 6.64215 6.89101 6.45399C7 6.24008 7 5.96005 7 5.4V4.6C7 4.03995 7 3.75992 6.89101 3.54601C6.79513 3.35785 6.64215 3.20487 6.45399 3.10899C6.24008 3 5.96005 3 5.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V5.4C3 5.96005 3 6.24008 3.10899 6.45399C3.20487 6.64215 3.35785 6.79513 3.54601 6.89101C3.75992 7 4.03995 7 4.6 7ZM4.6 21H5.4C5.96005 21 6.24008 21 6.45399 20.891C6.64215 20.7951 6.79513 20.6422 6.89101 20.454C7 20.2401 7 19.9601 7 19.4V18.6C7 18.0399 7 17.7599 6.89101 17.546C6.79513 17.3578 6.64215 17.2049 6.45399 17.109C6.24008 17 5.96005 17 5.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3578 3.10899 17.546C3 17.7599 3 18.0399 3 18.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21ZM18.6 9H19.4C19.9601 9 20.2401 9 20.454 8.89101C20.6422 8.79513 20.7951 8.64215 20.891 8.45399C21 8.24008 21 7.96005 21 7.4V6.6C21 6.03995 21 5.75992 20.891 5.54601C20.7951 5.35785 20.6422 5.20487 20.454 5.10899C20.2401 5 19.9601 5 19.4 5H18.6C18.0399 5 17.7599 5 17.546 5.10899C17.3578 5.20487 17.2049 5.35785 17.109 5.54601C17 5.75992 17 6.03995 17 6.6V7.4C17 7.96005 17 8.24008 17.109 8.45399C17.2049 8.64215 17.3578 8.79513 17.546 8.89101C17.7599 9 18.0399 9 18.6 9ZM18.6 19H19.4C19.9601 19 20.2401 19 20.454 18.891C20.6422 18.7951 20.7951 18.6422 20.891 18.454C21 18.2401 21 17.9601 21 17.4V16.6C21 16.0399 21 15.7599 20.891 15.546C20.7951 15.3578 20.6422 15.2049 20.454 15.109C20.2401 15 19.9601 15 19.4 15H18.6C18.0399 15 17.7599 15 17.546 15.109C17.3578 15.2049 17.2049 15.3578 17.109 15.546C17 15.7599 17 16.0399 17 16.6V17.4C17 17.9601 17 18.2401 17.109 18.454C17.2049 18.6422 17.3578 18.7951 17.546 18.891C17.7599 19 18.0399 19 18.6 19Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Perspective01Icon;
