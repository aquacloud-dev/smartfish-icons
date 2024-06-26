import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const MicrophoneOff01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M9 12C9 13.6569 10.3431 15 12 15C12.8291 15 13.5796 14.6637 14.1226 14.12L9 9V12Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M15 9.4V5C15 3.34315 13.6569 2 12 2C10.8224 2 9.80325 2.67852 9.3122 3.66593M12 19V22M12 19C8.13401 19 5 15.866 5 12V10M12 19C15.866 19 19 15.866 19 12V10M8 22H16M2 2L22 22M12 15C10.3431 15 9 13.6569 9 12V9L14.1226 14.12C13.5796 14.6637 12.8291 15 12 15Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default MicrophoneOff01Icon;
