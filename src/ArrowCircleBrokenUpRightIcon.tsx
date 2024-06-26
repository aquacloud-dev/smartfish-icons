import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ArrowCircleBrokenUpRightIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C2.31164 7.54622 1.44846 11.2534 2.33938 14.5896L9.41045 21.6606C12.7466 22.5515 16.4538 21.6884 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ArrowCircleBrokenUpRightIcon;
