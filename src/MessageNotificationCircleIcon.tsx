import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const MessageNotificationCircleIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M11.7075 3.03647C7.3847 3.43621 4.00011 7.07285 4.00011 11.5C4.00011 12.45 4.15596 13.3636 4.44348 14.2166C4.55168 14.5376 4.60578 14.6981 4.61554 14.8214C4.62518 14.9432 4.61789 15.0286 4.58777 15.1469C4.55726 15.2668 4.48991 15.3915 4.35521 15.6408L2.71955 18.6684C2.48624 19.1002 2.36958 19.3161 2.39569 19.4828C2.41843 19.6279 2.50386 19.7557 2.62929 19.8322C2.77329 19.9201 3.01741 19.8948 3.50565 19.8444L8.62668 19.315C8.7817 19.299 8.85931 19.291 8.92997 19.2937C8.99949 19.2963 9.04856 19.3029 9.11635 19.3185C9.18527 19.3344 9.27193 19.3678 9.44527 19.4345C10.3933 19.7998 11.4233 20 12.5001 20C16.9309 20 20.5699 16.6098 20.9646 12.2819M20.1214 3.87868C21.293 5.05025 21.293 6.94975 20.1214 8.12132C18.9499 9.29289 17.0504 9.29289 15.8788 8.12132C14.7072 6.94975 14.7072 5.05025 15.8788 3.87868C17.0504 2.70711 18.9499 2.70711 20.1214 3.87868Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default MessageNotificationCircleIcon;