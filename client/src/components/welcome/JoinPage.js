import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { Row, Spacer } from './common';

const RowPadding = styled.div`
	margin: 5vh;
`;

const RightAlign = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;


export default class ChoosePage extends PureComponent {
	static propTypes = {
		close: PropTypes.func.isRequired,
		onJoin: PropTypes.func.isRequired,
	}

	state = {
		roomCode: '',
		name: '',
	}

	handleChange = key => (event) => {
		const value = event.target.value;
		this.setState({ [key]: value });
	}

	handleJoin = () => {
		const { roomCode, name } = this.state;
		this.props.onJoin(roomCode, name);
		this.props.close();
	}

	render() {
		return (
			<div>
				<CardHeader
					title='Set Dimensions'
					/>
				<RowPadding>
					<Row>
						<TextField
							id='roomCode'
							label='Room Code'
							value={this.state.roomCode}
							onChange={this.handleChange('roomCode')}
							margin='normal'
							/>
						<Spacer />
						<TextField
							id='name'
							label='Character name'
							value={this.state.name}
							onChange={this.handleChange('name')}
							margin='normal'
							/>
					</Row>
				</RowPadding>
				<RowPadding>
					<RightAlign>
						<Button
							variant='contained'
							color='primary'
							disabled={!this.state.roomCode}
							onClick={this.handleJoin}
							>
							Join
						</Button>
					</RightAlign>
				</RowPadding>
			</div>
		);
	}
}
