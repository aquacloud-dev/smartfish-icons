import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const ShieldPlusIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M11.302 21.6147C11.5234 21.7439 11.6341 21.8085 11.7903 21.842C11.9116 21.868 12.0884 21.868 12.2097 21.842C12.3659 21.8085 12.4766 21.7439 12.698 21.6147C14.646 20.4783 20 16.9083 20 11.9999V7.21747C20 6.41796 20 6.0182 19.8692 5.67457C19.7537 5.37101 19.566 5.10015 19.3223 4.8854C19.0465 4.64231 18.6722 4.50195 17.9236 4.22122L12.5618 2.21054C12.3539 2.13258 12.25 2.0936 12.143 2.07815C12.0482 2.06444 11.9518 2.06444 11.857 2.07815C11.75 2.0936 11.6461 2.13258 11.4382 2.21054L6.0764 4.22122C5.3278 4.50195 4.9535 4.64231 4.67766 4.8854C4.43398 5.10015 4.24627 5.37101 4.13076 5.67457C4 6.0182 4 6.41796 4 7.21747V11.9999C4 16.9083 9.35396 20.4783 11.302 21.6147Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 14.4999V8.49987M9 11.4999H15M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default ShieldPlusIcon;
