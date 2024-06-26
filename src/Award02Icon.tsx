import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Award02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M17 15.0903C15.6731 16.2779 13.9209 17.0001 12 17.0001C10.0791 17.0001 8.32689 16.2779 7 15.0903V22.0001L11.7029 20.1189C11.8126 20.075 11.8675 20.0531 11.9242 20.0444C11.9744 20.0367 12.0256 20.0367 12.0758 20.0444C12.1325 20.0531 12.1874 20.075 12.2971 20.1189L17 22.0001V15.0903Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M7 15.0903V22L11.7029 20.1188C11.8126 20.0749 11.8675 20.053 11.9242 20.0443C11.9744 20.0366 12.0256 20.0366 12.0758 20.0443C12.1325 20.053 12.1874 20.0749 12.2971 20.1188L17 22V15.0903M19.5 9.5C19.5 13.6421 16.1421 17 12 17C7.85786 17 4.5 13.6421 4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Award02Icon;
