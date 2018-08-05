import React, { PureComponent } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { Row, Spacer } from './common';

const RowPadding = styled.div`
	margin: 5vh;
`;

const LeftAlign = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;


export default class ChoosePage extends PureComponent {
	static propTypes = {
	}

	state = {
	}

	handleChange = (key) => (event) => {
		const value = event.target.value;
		if (Number(value) || !value)
			this.setState({ [key]: event.target.value });
	}

	render() {
		const { height, width } = this.state;
		console.debug('state', this.state);
		return (
			<div>
				<CardHeader
					title='Set Dimensions'
					/>
				<RowPadding>
					<Row>
						<TextField
							id='height'
							label='Height'
							value={height}
							onChange={this.handleChange('height')}
							margin='normal'
							/>
						<Spacer />
						<TextField
							id='width'
							label='Width'
							value={width}
							onChange={this.handleChange('width')}
							margin='normal'
							/>
					</Row>
				</RowPadding>
				<RowPadding>
					<LeftAlign>
						<Button
							variant='contained'
							color='primary'
							disabled={!(width && height)}
							onClick={Function.prototype}
							>
							Start
						</Button>
					</LeftAlign>
				</RowPadding>
			</div>
		);
	}
}
