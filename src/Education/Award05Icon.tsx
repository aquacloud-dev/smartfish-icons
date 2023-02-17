import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Award05Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M7.13515 11.189L3.3304 4.38052C2.89291 3.59765 2.67417 3.20621 2.71103 2.88573C2.7432 2.60611 2.8917 2.353 3.1201 2.18852C3.38188 2 3.83029 2 4.72711 2H6.96193C7.29523 2 7.46187 2 7.61135 2.04813C7.74362 2.09073 7.86556 2.16042 7.96939 2.25276C8.08674 2.35712 8.17132 2.5007 8.3405 2.78788L12.0001 9C10.3366 9 8.67311 9.6346 7.40391 10.9038C7.31091 10.9968 7.22133 11.0919 7.13515 11.189Z"
				fill="currentColor"
			/>
			<path
				d="M16.8651 11.189L20.6698 4.38052C21.1073 3.59765 21.326 3.20621 21.2892 2.88573C21.257 2.60611 21.1085 2.353 20.8801 2.18852C20.6183 2 20.1699 2 19.2731 2H17.0383C16.705 2 16.5383 2 16.3889 2.04813C16.2566 2.09073 16.1347 2.16042 16.0308 2.25276C15.9135 2.35712 15.8289 2.5007 15.6597 2.78788L12.0001 9C13.6636 9 15.3271 9.6346 16.5963 10.9038C16.6893 10.9968 16.7789 11.0919 16.8651 11.189Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M7.13515 11.189L3.3304 4.38052C2.89291 3.59765 2.67417 3.20621 2.71103 2.88573C2.7432 2.60611 2.8917 2.353 3.1201 2.18852C3.38188 2 3.83029 2 4.72711 2H6.96193C7.29523 2 7.46187 2 7.61135 2.04813C7.74362 2.09073 7.86556 2.16042 7.96939 2.25276C8.08674 2.35712 8.17132 2.5007 8.3405 2.78788L12.0001 9L15.6597 2.78788C15.8289 2.5007 15.9135 2.35712 16.0308 2.25276C16.1347 2.16042 16.2566 2.09073 16.3889 2.04813C16.5383 2 16.705 2 17.0383 2H19.2731C20.1699 2 20.6183 2 20.8801 2.18852C21.1085 2.353 21.257 2.60611 21.2892 2.88573C21.326 3.20621 21.1073 3.59765 20.6698 4.38052L16.8651 11.189M10.5001 14L12.0001 13V18M10.7501 18H13.2501M16.5963 10.9038C19.1347 13.4422 19.1347 17.5578 16.5963 20.0962C14.0579 22.6346 9.94232 22.6346 7.40391 20.0962C4.8655 17.5578 4.8655 13.4422 7.40391 10.9038C9.94231 8.3654 14.0579 8.3654 16.5963 10.9038Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Award05Icon;
