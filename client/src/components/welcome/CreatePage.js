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

const LeftAlign = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;


export default class ChoosePage extends PureComponent {
	static propTypes = {
		updateSize: PropTypes.func.isRequired,
		close: PropTypes.func.isRequired,
	}

	state = {
		height: '',
		width: '',
	}

	handleChange = (key) => (event) => {
		const value = event.target.value;
		if (Number(value) || !value)
			this.setState({ [key]: Number(value) });
	}

	handleCreate = () => {
		this.props.updateSize(this.state.height, this.state.width);
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
							id='height'
							label='Height'
							value={this.state.height}
							onChange={this.handleChange('height')}
							margin='normal'
							/>
						<Spacer />
						<TextField
							id='width'
							label='Width'
							value={this.state.width}
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
							disabled={!(this.state.width && this.state.height)}
							onClick={this.handleCreate}
							>
							Start
						</Button>
					</LeftAlign>
				</RowPadding>
			</div>
		);
	}
}
