import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CalendarHeart02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M3 8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V10H3V8.8Z"
				fill="currentColor"
			/>
			<path
				d="M17.4976 15.7119C16.7978 14.9328 15.6309 14.7232 14.7541 15.4367C13.8774 16.1501 13.7539 17.343 14.4425 18.1868C15.131 19.0306 17.4976 21 17.4976 21C17.4976 21 19.8642 19.0306 20.5527 18.1868C21.2413 17.343 21.1329 16.1426 20.2411 15.4367C19.3492 14.7307 18.1974 14.9328 17.4976 15.7119Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</g>
		<path
			d="M21 10H3M21 11.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12.5M16 2V6M8 2V6M17.4976 15.7119C16.7978 14.9328 15.6309 14.7232 14.7541 15.4367C13.8774 16.1501 13.7539 17.343 14.4425 18.1868C15.131 19.0306 17.4976 21 17.4976 21C17.4976 21 19.8642 19.0306 20.5527 18.1868C21.2413 17.343 21.1329 16.1426 20.2411 15.4367C19.3492 14.7307 18.1974 14.9328 17.4976 15.7119Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CalendarHeart02Icon;