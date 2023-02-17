import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const SunSetting02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M12 8C9.23858 8 7 10.2386 7 13H17C17 10.2386 14.7614 8 12 8Z" fill="currentColor" opacity="0.12" />
		<path
			d="M20 20H4M12 3V5M4 13H2M6.31412 7.31412L4.8999 5.8999M17.6855 7.31412L19.0998 5.8999M22 13H20M22 16.5H2M7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default SunSetting02Icon;
