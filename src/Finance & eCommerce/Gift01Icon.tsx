import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Gift01Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M20 18.8V11H4V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22L16.8 22C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M12 6V22M12 6H8.46429C7.94332 6 7.4437 5.78929 7.07533 5.41421C6.70695 5.03914 6.5 4.53043 6.5 4C6.5 3.46957 6.70695 2.96086 7.07533 2.58579C7.4437 2.21071 7.94332 2 8.46429 2C11.2143 2 12 6 12 6ZM12 6H15.5357C16.0567 6 16.5563 5.78929 16.9247 5.41421C17.293 5.03914 17.5 4.53043 17.5 4C17.5 3.46957 17.293 2.96086 16.9247 2.58579C16.5563 2.21071 16.0567 2 15.5357 2C12.7857 2 12 6 12 6ZM20 11V18.8C20 19.9201 20 20.4802 19.782 20.908C19.5903 21.2843 19.2843 21.5903 18.908 21.782C18.4802 22 17.9201 22 16.8 22L7.2 22C6.07989 22 5.51984 22 5.09202 21.782C4.71569 21.5903 4.40973 21.2843 4.21799 20.908C4 20.4802 4 19.9201 4 18.8V11M2 7.6L2 9.4C2 9.96005 2 10.2401 2.10899 10.454C2.20487 10.6422 2.35785 10.7951 2.54601 10.891C2.75992 11 3.03995 11 3.6 11L20.4 11C20.9601 11 21.2401 11 21.454 10.891C21.6422 10.7951 21.7951 10.6422 21.891 10.454C22 10.2401 22 9.96005 22 9.4V7.6C22 7.03995 22 6.75992 21.891 6.54601C21.7951 6.35785 21.6422 6.20487 21.454 6.10899C21.2401 6 20.9601 6 20.4 6L3.6 6C3.03995 6 2.75992 6 2.54601 6.10899C2.35785 6.20487 2.20487 6.35785 2.10899 6.54601C2 6.75992 2 7.03995 2 7.6Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Gift01Icon;
