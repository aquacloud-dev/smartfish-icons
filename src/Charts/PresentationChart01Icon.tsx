import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const PresentationChart01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M21 11.2V3H3V11.2C3 12.8802 3 13.7202 3.32698 14.362C3.6146 14.9265 4.07354 15.3854 4.63803 15.673C5.27976 16 6.11984 16 7.8 16H16.2C17.8802 16 18.7202 16 19.362 15.673C19.9265 15.3854 20.3854 14.9265 20.673 14.362C21 13.7202 21 12.8802 21 11.2Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 16V21M12 16L18 21M12 16L6 21M21 3V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3M8 9V12M12 7V12M16 11V12M22 3H2"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default PresentationChart01Icon;
