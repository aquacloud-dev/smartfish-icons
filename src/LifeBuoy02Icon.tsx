import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const LifeBuoy02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M15.5355 15.5355C14.6307 16.4404 13.3807 17 12 17C10.6193 17 9.3693 16.4404 8.46448 15.5355L4.92896 19.0711C8.8342 22.9763 15.1658 22.9763 19.0711 19.0711L15.5355 15.5355Z"
				fill="currentColor"
			/>
			<path
				d="M8.4645 8.46448C9.36932 7.55965 10.6193 7 12 7C13.3808 7 14.6307 7.55964 15.5356 8.46445L19.0711 4.92893C15.1658 1.02369 8.8342 1.02369 4.92896 4.92893L8.4645 8.46448Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M8.46445 8.46448L4.92893 4.92896M4.92893 19.0711L8.46448 15.5355M15.5355 15.5355L19.0711 19.071M19.0711 4.92891L15.5355 8.46445M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default LifeBuoy02Icon;
