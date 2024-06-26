import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const CalendarPlus01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M3 8C3 7.07003 3 6.60504 3.10222 6.22354C3.37962 5.18827 4.18827 4.37962 5.22354 4.10222C5.60504 4 6.07003 4 7 4H17C17.93 4 18.395 4 18.7765 4.10222C19.8117 4.37962 20.6204 5.18827 20.8978 6.22354C21 6.60504 21 7.07003 21 8H3Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M21 8H3M16 2V5M8 2V5M12 18V12M9 15H15M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default CalendarPlus01Icon;
