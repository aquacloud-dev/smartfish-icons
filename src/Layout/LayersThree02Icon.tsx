import React, { forwardRef } from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

const LayersThree02Icon = forwardRef<SVGSVGElement, ISVGProps>((props, ref) => (
	<svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
		<path
			d="M7.35777 9.67895L11.6422 11.8212C11.7734 11.8868 11.839 11.9196 11.9078 11.9325C11.9687 11.9439 12.0313 11.9439 12.0922 11.9325C12.161 11.9196 12.2266 11.8868 12.3578 11.8212L16.6422 9.67895C16.7734 9.61336 16.839 9.58056 16.9078 9.56766C16.9687 9.55622 17.0313 9.55622 17.0922 9.56766C17.161 9.58056 17.2266 9.61336 17.3578 9.67895L22 12.0001L17 14.5001L22 17.0001L12.3578 21.8212C12.2266 21.8868 12.161 21.9196 12.0922 21.9325C12.0313 21.9439 11.9687 21.9439 11.9078 21.9325C11.839 21.9196 11.7734 21.8868 11.6422 21.8212L2 17.0001L7 14.5001L2 12.0001L6.64223 9.67895C6.77341 9.61336 6.839 9.58056 6.9078 9.56766C6.96874 9.55622 7.03126 9.55622 7.0922 9.56766C7.161 9.58056 7.2266 9.61336 7.35777 9.67895Z"
			fill="currentColor"
			opacity="0.12"
		/>
		<path
			d="M7 9.50006L2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001L17 9.50006M7 14.5001L2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001L17 14.5001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
));

export default LayersThree02Icon;
