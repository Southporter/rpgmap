import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import Tooltip from '@material-ui/core/Tooltip';
import { ROLES } from '../../constants';
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
				<Tooltip title={name} placement="top">
					<Avatar
						style={{
							color: '#fff',
							backgroundColor: color,
							margin: '10px',
						}}
					>
						{name[0]}
					</Avatar>
				</Tooltip>
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
	canDrag: (props) => {
		return props.user === ROLES.ADMIN ||
			props.user === props.name;
	},
};

const mapStateToProps = (state) => ({
	user: state.map.role,
});

const connectedComponent = connect(mapStateToProps)(PlayerCharacter);

export default DragSource(CHARACTER, specification, connectDragToProps)(connectedComponent);
