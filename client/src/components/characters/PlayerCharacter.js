import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import { CHARACTER } from '../../dragAndDrop/types';

class PlayerCharacter extends PureComponent {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		color: PropTypes.string,
	}

	static defaultProps = {
		color: blue[500],
	}

	render() {
		const { connectDragSource, name, color } = this.props;
		return connectDragSource(
			<div>
				<Avatar
					style={{
						color: '#fff',
						backgroundColor: color,
						margin: '10px',
					}}
					>
					{name[0]}
				</Avatar>
			</div>
		);
	}
}

function connectDragToProps(connect) {
	return {
		connectDragSource: connect.dragSource(),
	};
}

const specification = {
	beginDrag: (props) => {
		return props.character;
	},
};

export default DragSource(CHARACTER, specification, connectDragToProps)(PlayerCharacter);
