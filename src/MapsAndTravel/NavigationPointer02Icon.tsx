import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const NavigationPointer02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M5.03636 21.3258C4.45167 21.583 4.15933 21.7117 3.97993 21.6552C3.82441 21.6062 3.70254 21.4845 3.65339 21.329C3.59668 21.1497 3.72497 20.8572 3.98154 20.2722L11.2629 3.67068C11.4945 3.14261 11.6103 2.87857 11.7722 2.79776C11.9128 2.72757 12.0782 2.72757 12.2188 2.79776C12.3807 2.87857 12.4966 3.14261 12.7282 3.67069L20.0095 20.2722C20.2661 20.8572 20.3944 21.1497 20.3377 21.329C20.2885 21.4845 20.1667 21.6062 20.0111 21.6552C19.8317 21.7117 19.5394 21.583 18.9547 21.3258L12.3177 18.4055C12.199 18.3533 12.1397 18.3272 12.0781 18.3169C12.0234 18.3077 11.9676 18.3077 11.913 18.3169C11.8514 18.3272 11.792 18.3533 11.6733 18.4055L5.03636 21.3258Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M5.03654 21.3253C4.45186 21.5826 4.15951 21.7112 3.98012 21.6547C3.8246 21.6057 3.70273 21.484 3.65357 21.3285C3.59686 21.1492 3.72515 20.8567 3.98172 20.2717L11.2631 3.6702C11.4947 3.14212 11.6105 2.87808 11.7724 2.79727C11.913 2.72708 12.0784 2.72708 12.219 2.79727C12.3809 2.87808 12.4967 3.14212 12.7283 3.6702L20.0097 20.2717C20.2663 20.8567 20.3946 21.1492 20.3379 21.3285C20.2887 21.484 20.1668 21.6057 20.0113 21.6547C19.8319 21.7112 19.5396 21.5826 18.9549 21.3253L12.3179 18.405C12.1992 18.3528 12.1399 18.3267 12.0782 18.3164C12.0236 18.3072 11.9678 18.3072 11.9132 18.3164C11.8516 18.3267 11.7922 18.3528 11.6735 18.405L5.03654 21.3253Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default NavigationPointer02Icon;