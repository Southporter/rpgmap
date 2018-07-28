import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Container } from './common';

const Row = styled.div`
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
`;

export default class ChoosePage extends PureComponent {
	static propTypes = {
		moveTo: PropTypes.func.isRequired,
	}
	render() {
		const { moveTo } = this.props;
		return (
			<Container>
				<Row>
					<Button onClick={moveTo('create')}>Create Room</Button>
					<Button onClick={moveTo('join')}>Join Room</Button>
				</Row>
			</Container>
		);
	}
}
