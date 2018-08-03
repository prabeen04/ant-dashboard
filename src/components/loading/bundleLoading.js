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
		<rect x="152.5" y="7.27" rx="0" ry="0" width="46.550000000000004" height="181.78" /> 
		<rect x="203.5" y="6.27" rx="0" ry="0" width="86.11" height="38.949999999999996" /> 
		<rect x="242.5" y="86.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="232.5" y="91.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="251.5" y="94.27" rx="0" ry="0" width="0" height="0" /> 
		<rect x="204.5" y="71.27" rx="0" ry="0" width="85.44" height="33.120000000000005" /> 
		<rect x="164.5" y="34.27" rx="0" ry="0" width="0" height="0" /> 
		<circle cx="260.5" cy="150.27" r="1" /> 
		<rect x="250.5" y="44.27" rx="0" ry="0" width="39" height="27" /> 
		<rect x="273.5" y="65.27" rx="0" ry="0" width="0" height="0" />
	</ContentLoader>
)