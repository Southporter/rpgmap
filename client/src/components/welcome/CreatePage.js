import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Container } from './common';

const Row = styled.div`
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
`;

export default class ChoosePage extends PureComponent {
	static propTypes = {
	}

	state = {}

	handleChange = (key) => (event) => {
		if (Number(event.target.value))
			this.setState({ [key]: event.target.value });
	}

	render() {
		console.debug('state', this.state);
		return (
			<Container>
				<Row>
					<FormControl>
						<InputLabel htmlFor="height">Height</InputLabel>
						<Input
							id='height'
							value={this.state.height}
							onChange={this.handleChange('height')}
							/>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor="width">Width</InputLabel>
						<Input
							id='width'
							value={this.state.width}
							onChange={this.handleChange('width')}
							/>
					</FormControl>
				</Row>
			</Container>
		);
	}
}
