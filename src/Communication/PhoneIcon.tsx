import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const PhoneIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M8.38076 8.85311C9.07676 10.3027 10.0256 11.6614 11.2271 12.8629C12.4287 14.0645 13.7873 15.0133 15.237 15.7093C15.3617 15.7692 15.424 15.7991 15.5029 15.8221C15.7832 15.9038 16.1275 15.8451 16.3649 15.6751C16.4317 15.6273 16.4889 15.5701 16.6032 15.4558C16.9528 15.1062 17.1276 14.9314 17.3034 14.8171C17.9663 14.3861 18.8209 14.3861 19.4838 14.8171C19.6595 14.9314 19.8343 15.1062 20.184 15.4558L20.3788 15.6507C20.9103 16.1821 21.176 16.4478 21.3203 16.7332C21.6074 17.3008 21.6074 17.9711 21.3203 18.5386C21.176 18.824 20.9103 19.0897 20.3788 19.6212L20.2212 19.7788C19.6916 20.3084 19.4268 20.5732 19.0667 20.7755C18.6672 20.9999 18.0467 21.1613 17.5885 21.1599C17.1756 21.1587 16.8933 21.0786 16.3289 20.9184C13.2955 20.0574 10.4331 18.4329 8.04515 16.0449C5.65717 13.6569 4.03269 10.7946 3.17172 7.76119C3.01152 7.19674 2.93141 6.91452 2.93018 6.50157C2.92882 6.04335 3.09018 5.42286 3.3146 5.02336C3.51685 4.66332 3.78166 4.39851 4.31129 3.86889L4.46892 3.71125C5.00036 3.17981 5.26608 2.91409 5.55146 2.76975C6.11903 2.48268 6.78929 2.48268 7.35685 2.76975C7.64223 2.91409 7.90795 3.17981 8.4394 3.71125L8.63427 3.90612C8.98387 4.25573 9.15867 4.43053 9.27296 4.60631C9.70396 5.2692 9.70396 6.12378 9.27296 6.78667C9.15868 6.96245 8.98387 7.13725 8.63427 7.48686C8.51995 7.60117 8.4628 7.65833 8.41496 7.72514C8.24495 7.96257 8.18624 8.30683 8.26797 8.58718C8.29097 8.66607 8.3209 8.72842 8.38076 8.85311Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default PhoneIcon;
