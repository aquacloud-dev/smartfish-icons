import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ArrowCircleBrokenDownRightIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M19.0711 19.0711C22.9763 15.1658 22.9763 8.83417 19.0711 4.92893C16.4538 2.31164 12.7466 1.44846 9.41045 2.33938L2.33938 9.41045C1.44846 12.7466 2.31164 16.4538 4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M9.41045 2.33944C12.7466 1.44852 16.4538 2.3117 19.0711 4.92899C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711C15.1658 22.9764 8.83418 22.9764 4.92893 19.0711C2.31164 16.4538 1.44846 12.7467 2.33938 9.41051M15.0001 9.00007V15.0001M15.0001 15.0001H9.00014M15.0001 15.0001L4.99995 5.00001"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ArrowCircleBrokenDownRightIcon;
