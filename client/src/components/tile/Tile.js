import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border-color: white;
	border-width: 2px;
	background-color: green;
`;

export default class Tile extends PureComponent {
	render() {
		return (
			<Box />
		);
	}
}
