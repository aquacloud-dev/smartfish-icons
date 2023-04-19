import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const TelescopeIcon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<g opacity="0.12">
			<path
				d="M4.7984 8.66963C4.72593 8.39914 4.68969 8.2639 4.71465 8.14649C4.7366 8.0432 4.79069 7.94952 4.86916 7.87887C4.95836 7.79855 5.0936 7.76231 5.36409 7.68983L17.1484 4.53224L18.4425 9.36187L6.65818 12.5195C6.3877 12.5919 6.25246 12.6282 6.13504 12.6032C6.03176 12.5813 5.93808 12.5272 5.86742 12.4487C5.7871 12.3595 5.75086 12.2243 5.67839 11.9538L4.7984 8.66963Z"
				fill="currentColor"
			/>
			<path
				d="M17.7179 6.65728C17.428 5.57535 17.2831 5.03438 17.3829 4.56471C17.4707 4.15158 17.687 3.77686 18.0009 3.49425C18.3577 3.17296 18.8987 3.02801 19.9807 2.7381C20.2511 2.66562 20.3864 2.62939 20.5038 2.65434C20.6071 2.6763 20.7008 2.73038 20.7714 2.80885C20.8517 2.89806 20.888 3.0333 20.9604 3.30379L22.3581 8.51979C22.4305 8.79027 22.4668 8.92551 22.4418 9.04293C22.4199 9.14621 22.3658 9.23989 22.2873 9.31055C22.1981 9.39087 22.0629 9.42711 21.7924 9.49958C20.7104 9.78949 20.1695 9.93444 19.6998 9.83461C19.2867 9.74679 18.912 9.53045 18.6293 9.21657C18.3081 8.85975 18.1631 8.31878 17.8732 7.23684L17.7179 6.65728Z"
				fill="currentColor"
			/>
		</g>
		<path
			d="M13.1213 14.8446L17.9999 21.9999M10.8785 14.8446L5.99992 21.9999M13.9999 13.2C13.9999 14.3045 13.1045 15.2 11.9999 15.2C10.8953 15.2 9.99992 14.3045 9.99992 13.2C9.99992 12.0954 10.8953 11.2 11.9999 11.2C13.1045 11.2 13.9999 12.0954 13.9999 13.2ZM17.1484 4.53225L5.36413 7.68984C5.09365 7.76232 4.9584 7.79855 4.8692 7.87888C4.79073 7.94953 4.73664 8.04321 4.71469 8.14649C4.68973 8.26391 4.72597 8.39915 4.79845 8.66964L5.67843 11.9538C5.75091 12.2243 5.78714 12.3595 5.86747 12.4487C5.93812 12.5272 6.0318 12.5813 6.13508 12.6032C6.2525 12.6282 6.38774 12.5919 6.65823 12.5195L18.4425 9.36188L17.1484 4.53225ZM21.7923 9.49958C20.7104 9.78949 20.1694 9.93444 19.6997 9.83461C19.2866 9.74679 18.9119 9.53045 18.6293 9.21657C18.308 8.85975 18.163 8.31878 17.8731 7.23684L17.7178 6.65728C17.4279 5.57535 17.283 5.03438 17.3828 4.56471C17.4706 4.15158 17.687 3.77686 18.0008 3.49425C18.3577 3.17296 18.8986 3.02801 19.9806 2.7381C20.2511 2.66562 20.3863 2.62939 20.5037 2.65434C20.607 2.6763 20.7007 2.73038 20.7713 2.80885C20.8517 2.89806 20.8879 3.0333 20.9604 3.30379L22.358 8.51979C22.4305 8.79027 22.4667 8.92551 22.4417 9.04293C22.4198 9.14621 22.3657 9.23989 22.2872 9.31055C22.198 9.39087 22.0628 9.42711 21.7923 9.49958ZM3.50163 12.33L4.85393 11.9677C5.12441 11.8952 5.25965 11.8589 5.34886 11.7786C5.42733 11.708 5.48142 11.6143 5.50337 11.511C5.52833 11.3936 5.49209 11.2583 5.41961 10.9879L5.05727 9.63556C4.98479 9.36508 4.94855 9.22983 4.86823 9.14063C4.79758 9.06216 4.70389 9.00807 4.60061 8.98612C4.4832 8.96116 4.34795 8.9974 4.07747 9.06988L2.72517 9.43222C2.45469 9.5047 2.31945 9.54094 2.23024 9.62126C2.15177 9.69191 2.09768 9.78559 2.07573 9.88888C2.05077 10.0063 2.08701 10.1415 2.15949 10.412L2.52183 11.7643C2.59431 12.0348 2.63055 12.17 2.71087 12.2592C2.78152 12.3377 2.8752 12.3918 2.97849 12.4138C3.0959 12.4387 3.23115 12.4025 3.50163 12.33Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default TelescopeIcon;