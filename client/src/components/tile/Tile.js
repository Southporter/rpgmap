import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import styled from 'styled-components';
import { CHARACTER } from '../../dragAndDrop/types';

const Box = styled.div`
	border-color: white;
	background-color: gray;
	border-width: 2px;
	border-style: solid;
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;
`;

class Tile extends PureComponent {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		children: PropTypes.node,
	}
	render() {
		const { connectDropTarget, children } = this.props;
		return connectDropTarget(
			<div>
				<Box>
					{children}
				</Box>
			</div>
		);
	}
}

function drop(props, monitor) {
	const character = monitor.getItem();
	props.onDrop(character, props.row, props.column);
}

const specs = {
	drop,
};

function connectDropToProps(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
	};
}

export default DropTarget(CHARACTER, specs, connectDropToProps)(Tile);
