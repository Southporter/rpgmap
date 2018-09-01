import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { Row, Spacer } from '../common';

const RowPadding = styled.div`
	margin: 5vh;
`;


export default class ChoosePage extends PureComponent {
	static propTypes = {
		moveTo: PropTypes.func.isRequired,
	}
	render() {
		const { moveTo } = this.props;
		return (
			<div>
				<CardHeader
					title='Welcome'
					subheader='What can we do for you?'
					/>
				<RowPadding>
					<Row>
						<Button
							variant='contained'
							color='primary'
							onClick={moveTo('create')}
							>
							Create Room
						</Button>
						<Spacer />
						<Button
							variant='contained'
							color='primary'
							onClick={moveTo('join')}
							>
							Join Room
						</Button>
					</Row>
				</RowPadding>
			</div>
		);
	}
}
