import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Diamond01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path d="M12 20.5L8 9H16L12 20.5Z" fill="currentColor" />
			<path d="M10 3H7L2 9L8 9L10 3Z" fill="currentColor" />
			<path d="M14 3H17L22 9L16 9L14 3Z" fill="currentColor" />
		</g>
		<path
			d="M2.50002 9H21.5M10 3L8.00002 9L12 20.5L16 9L14 3M12.6146 20.2625L21.5732 9.51215C21.7251 9.32995 21.801 9.23885 21.83 9.13717C21.8556 9.04751 21.8556 8.95249 21.83 8.86283C21.801 8.76114 21.7251 8.67005 21.5732 8.48785L17.2399 3.28785C17.1517 3.18204 17.1076 3.12914 17.0536 3.09111C17.0057 3.05741 16.9523 3.03238 16.8957 3.01717C16.8319 3 16.7631 3 16.6253 3H7.37472C7.23699 3 7.16813 3 7.10431 3.01717C7.04777 3.03238 6.99434 3.05741 6.94645 3.09111C6.89241 3.12914 6.84832 3.18204 6.76015 3.28785L2.42681 8.48785C2.27499 8.67004 2.19907 8.76114 2.17006 8.86283C2.14448 8.95249 2.14448 9.04751 2.17006 9.13716C2.19907 9.23885 2.27499 9.32995 2.42681 9.51215L11.3854 20.2625C11.5965 20.5158 11.702 20.6424 11.8284 20.6886C11.9392 20.7291 12.0608 20.7291 12.1717 20.6886C12.298 20.6424 12.4035 20.5158 12.6146 20.2625Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Diamond01Icon;
