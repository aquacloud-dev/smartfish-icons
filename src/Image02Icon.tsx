import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Image02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M8.5 10.5C9.60457 10.5 10.5 9.60457 10.5 8.5C10.5 7.39543 9.60457 6.5 8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5C6.5 9.60457 7.39543 10.5 8.5 10.5Z"
				fill="currentColor"
			/>
			<path
				d="M21.4052 15.4053C20.0123 19.2516 16.3271 22 11.9999 22C9.74853 22 7.6709 21.256 5.99951 20.0004L14.8686 11.1314C15.2646 10.7354 15.4626 10.5373 15.6909 10.4632C15.8918 10.3979 16.1081 10.3979 16.3089 10.4632C16.5373 10.5373 16.7353 10.7354 17.1313 11.1314L21.4052 15.4053Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M5.99958 20.0004L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21.4053 15.4053M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Image02Icon;
