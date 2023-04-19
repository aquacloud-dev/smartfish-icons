import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const SunSetting01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path d="M12 9C8.68629 9 6 11.6863 6 15H18C18 11.6863 15.3137 9 12 9Z" fill="currentColor" opacity="0.12" />
		<path
			d="M12 3V5M5.31412 7.31412L3.8999 5.8999M18.6858 7.31412L20.1 5.8999M6 15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15M22 15H2M19 19H5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default SunSetting01Icon;
