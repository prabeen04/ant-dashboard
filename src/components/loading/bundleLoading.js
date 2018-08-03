import React from 'react'
import ContentLoader from "react-content-loader"

export default (props) => (
	<ContentLoader
		height={160}
		width={400}
		speed={2}
		primaryColor="#3fd6b4"
		secondaryColor="#483cb9"
		{...props}
	>
		<rect x="132.5" y="144.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="84.5" y="10.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="96.5" y="8.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="122.5" y="25.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="242.5" y="86.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="232.5" y="91.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="251.5" y="94.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="164.5" y="34.27" rx="0" ry="0" width="0" height="0" /> 
		<circle cx="260.5" cy="150.27" r="1" /> 
		<rect x="273.5" y="65.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="134.5" y="63.27" rx="0" ry="0" width="55" height="6" /> 
		<rect x="183.5" y="34.27" rx="0" ry="0" width="6" height="28" /> 
		<rect x="133.5" y="27.27" rx="0" ry="0" width="56" height="6" /> 
		<rect x="123.5" y="27.27" rx="0" ry="0" width="6" height="78" /> 
		<rect x="124.5" y="47.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="124.5" y="47.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="101.5" y="56.27" rx="0" ry="0" width="0" height="0" />
	</ContentLoader>
)