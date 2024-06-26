import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Server02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12H6C3.79086 12 2 10.2091 2 8Z"
				fill="currentColor"
			/>
			<path
				d="M2 16C2 13.7909 3.79086 12 6 12H18C20.2091 12 22 13.7909 22 16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M6 8H6.01M6 16H6.01M6 12H18M6 12C3.79086 12 2 10.2091 2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12M6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Server02Icon;
