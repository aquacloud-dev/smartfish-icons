import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const Key02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M21 9C21 12.3137 18.3137 15 15 15C14.7263 15 14.4569 14.9817 14.193 14.9462C13.7588 14.8878 13.5417 14.8586 13.4044 14.8783C13.2613 14.8987 13.1843 14.9248 13.0581 14.9953C12.937 15.063 12.8177 15.1823 12.5791 15.4209L7.46863 20.5314C7.29568 20.7043 7.2092 20.7908 7.10828 20.8526C7.01881 20.9075 6.92127 20.9479 6.81923 20.9724C6.70414 21 6.58185 21 6.33726 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V17.6627C3 17.4182 3 17.2959 3.02763 17.1808C3.05213 17.0787 3.09253 16.9812 3.14736 16.8917C3.2092 16.7908 3.29568 16.7043 3.46863 16.5314L8.57913 11.4209C8.81771 11.1823 8.937 11.063 9.00469 10.9419C9.0752 10.8157 9.10125 10.7387 9.12172 10.5956C9.14136 10.4583 9.11218 10.2412 9.05381 9.80704C9.01832 9.54308 9 9.27368 9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M15 9H15.01M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.33726C6.58185 21 6.70414 21 6.81923 20.9724C6.92127 20.9479 7.01881 20.9075 7.10828 20.8526C7.2092 20.7908 7.29568 20.7043 7.46863 20.5314L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default Key02Icon;
