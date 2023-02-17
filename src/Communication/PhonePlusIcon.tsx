import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const PhonePlusIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M7.38076 9.85311C8.07676 11.3027 9.02555 12.6614 10.2271 13.8629C11.4287 15.0645 12.7873 16.0133 14.237 16.7093C14.3617 16.7692 14.424 16.7991 14.5029 16.8221C14.7832 16.9038 15.1275 16.8451 15.3649 16.6751C15.4317 16.6273 15.4889 16.5701 15.6032 16.4558C15.9528 16.1062 16.1276 15.9314 16.3034 15.8171C16.9663 15.3861 17.8209 15.3861 18.4838 15.8171C18.6595 15.9314 18.8343 16.1062 19.184 16.4558L19.3788 16.6507C19.9103 17.1821 20.176 17.4478 20.3203 17.7332C20.6074 18.3008 20.6074 18.9711 20.3203 19.5386C20.176 19.824 19.9103 20.0897 19.3788 20.6212L19.2212 20.7788C18.6916 21.3084 18.4268 21.5732 18.0667 21.7755C17.6672 21.9999 17.0467 22.1613 16.5885 22.1599C16.1756 22.1587 15.8933 22.0786 15.3289 21.9184C12.2955 21.0574 9.43313 19.4329 7.04515 17.0449C4.65717 14.6569 3.03269 11.7946 2.17172 8.76119C2.01152 8.19674 1.93141 7.91452 1.93018 7.50157C1.92882 7.04335 2.09018 6.42286 2.3146 6.02336C2.51685 5.66332 2.78166 5.39851 3.31129 4.86889L3.46892 4.71125C4.00036 4.17981 4.26608 3.91409 4.55146 3.76975C5.11903 3.48268 5.78929 3.48268 6.35685 3.76975C6.64223 3.91409 6.90795 4.17981 7.4394 4.71125L7.63427 4.90612C7.98387 5.25573 8.15867 5.43053 8.27296 5.60631C8.70396 6.2692 8.70396 7.12378 8.27296 7.78667C8.15868 7.96245 7.98387 8.13725 7.63427 8.48686C7.51995 8.60117 7.4628 8.65833 7.41496 8.72514C7.24495 8.96257 7.18624 9.30683 7.26797 9.58718C7.29097 9.66607 7.3209 9.72842 7.38076 9.85311Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M17.0001 11V3M13.0001 7H21.0001M10.2271 13.8631C9.02555 12.6615 8.07676 11.3028 7.38076 9.85323C7.3209 9.72854 7.29097 9.66619 7.26797 9.5873C7.18624 9.30695 7.24495 8.96269 7.41496 8.72526C7.4628 8.65845 7.51995 8.60129 7.63427 8.48698C7.98387 8.13737 8.15868 7.96257 8.27296 7.78679C8.70396 7.1239 8.70396 6.26932 8.27296 5.60643C8.15867 5.43065 7.98387 5.25585 7.63427 4.90624L7.4394 4.71137C6.90795 4.17993 6.64223 3.91421 6.35685 3.76987C5.78929 3.4828 5.11903 3.4828 4.55146 3.76987C4.26608 3.91421 4.00036 4.17993 3.46892 4.71137L3.31129 4.86901C2.78166 5.39863 2.51685 5.66344 2.3146 6.02348C2.09018 6.42298 1.92882 7.04347 1.93018 7.5017C1.93141 7.91464 2.01152 8.19687 2.17172 8.76131C3.03269 11.7947 4.65717 14.6571 7.04515 17.045C9.43313 19.433 12.2955 21.0575 15.3289 21.9185C15.8933 22.0787 16.1756 22.1588 16.5885 22.16C17.0467 22.1614 17.6672 22 18.0667 21.7756C18.4268 21.5733 18.6916 21.3085 19.2212 20.7789L19.3788 20.6213C19.9103 20.0898 20.176 19.8241 20.3203 19.5387C20.6074 18.9712 20.6074 18.3009 20.3203 17.7333C20.176 17.448 19.9103 17.1822 19.3788 16.6508L19.184 16.4559C18.8343 16.1063 18.6595 15.9315 18.4838 15.8172C17.8209 15.3862 16.9663 15.3862 16.3034 15.8172C16.1276 15.9315 15.9528 16.1063 15.6032 16.4559C15.4889 16.5702 15.4317 16.6274 15.3649 16.6752C15.1275 16.8453 14.7832 16.904 14.5029 16.8222C14.424 16.7992 14.3617 16.7693 14.237 16.7094C12.7873 16.0134 11.4287 15.0646 10.2271 13.8631Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default PhonePlusIcon;
