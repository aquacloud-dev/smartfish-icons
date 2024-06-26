import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const FlashOffIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M12 14H4.70802C4.16316 14 3.89073 14 3.75324 13.8889C3.63372 13.7923 3.56524 13.6461 3.56756 13.4925C3.57023 13.3157 3.74463 13.1064 4.09344 12.6879L7.99998 8L16 16L11 22L12 14Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M8 8L4.09346 12.6879C3.74465 13.1064 3.57024 13.3157 3.56758 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L16 16M15.65 10H19.292C19.8368 10 20.1093 10 20.2467 10.1111C20.3663 10.2077 20.4347 10.3539 20.4324 10.5075C20.4298 10.6843 20.2554 10.8936 19.9065 11.3121L18.5502 12.9397M10.5728 4.91265L13 2L12.4002 6.79771M21 21L3 3"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default FlashOffIcon;
