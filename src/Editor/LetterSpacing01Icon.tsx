import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const LetterSpacing01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M9 13L15 13M7 17L11.2717 7.60225C11.5031 7.09323 11.6188 6.83872 11.7791 6.75976C11.9184 6.69115 12.0816 6.69115 12.2209 6.75976C12.3812 6.83872 12.4969 7.09323 12.7283 7.60225L17 17M21 3V21M3 3L3 21"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default LetterSpacing01Icon;
