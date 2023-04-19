import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Snowflake02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 8V16M12 8V2M12 8L7 3M12 8L17 3M12 16V22M12 16L7 21M12 16L17 21M16 12H8M16 12H22M16 12L21 7M16 12L21 17M8 12H2M8 12L3 7M8 12L3 17"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Snowflake02Icon;
