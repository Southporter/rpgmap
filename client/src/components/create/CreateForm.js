import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Row } from '../common';

const RowPadding = styled.div`
	margin: 5vh;
`;

const LeftAlign = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export default class CreateForm extends PureComponent {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	}

	state = {
		name: '',
	}

	handleChange = (key) => (event) => {
		this.setState({ [key]: event.target.value });
	}

	handleSubmit = () => {
		this.props.onSubmit(this.state);
	}

	render = () => (
		<div>
			<CardHeader
				title='Create Character'
			/>
			<RowPadding>
				<Row>
					<TextField
						id='name'
						label='Name'
						value={this.state.name}
						onChange={this.handleChange('name')}
						margin='normal'
					/>
				</Row>
			</RowPadding>
			<RowPadding>
				<LeftAlign>
					<Button
						variant='contained'
						color='primary'
						disabled={!(this.state.name)}
						onClick={this.handleSubmit}
					>
						Create
					</Button>
				</LeftAlign>
			</RowPadding>
		</div>
	);
}
