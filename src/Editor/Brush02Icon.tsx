import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Brush02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M6 10H18V10.2C18 11.8802 18 12.7202 17.673 13.362C17.3854 13.9265 16.9265 14.3854 16.362 14.673C15.9123 14.9021 15.3652 14.9707 14.5 14.9912L14.5 19.5C14.5 20.8807 13.3807 22 12 22C10.6193 22 9.5 20.8807 9.5 19.5V14.9912C8.63476 14.9707 8.0877 14.9021 7.63803 14.673C7.07354 14.3854 6.6146 13.9265 6.32698 13.362C6 12.7202 6 11.8802 6 10.2V10Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M18 10V3.6C18 3.03995 18 2.75992 17.891 2.54601C17.7951 2.35785 17.6422 2.20487 17.454 2.10899C17.2401 2 16.9601 2 16.4 2H7.6C7.03995 2 6.75992 2 6.54601 2.10899C6.35785 2.20487 6.20487 2.35785 6.10899 2.54601C6 2.75992 6 3.03995 6 3.6V10M18 10H6M18 10V10.2C18 11.8802 18 12.7202 17.673 13.362C17.3854 13.9265 16.9265 14.3854 16.362 14.673C15.7202 15 14.8802 15 13.2 15H10.8C9.11984 15 8.27976 15 7.63803 14.673C7.07354 14.3854 6.6146 13.9265 6.32698 13.362C6 12.7202 6 11.8802 6 10.2V10M14.5 15V19.5C14.5 20.8807 13.3807 22 12 22C10.6193 22 9.5 20.8807 9.5 19.5V15"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Brush02Icon;
