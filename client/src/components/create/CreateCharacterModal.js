import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CreateForm from './CreateForm';

const ModalContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export default class CreateCharacterModal extends PureComponent {
	static propTypes = {
		open: PropTypes.bool,
		onClose: PropTypes.func.isRequired,
	}

	render() {
		return (
			<Modal
				open={this.props.open}
				disableEscapeKeyDown={true}
				disableBackdropClick={true}
			>
				<ModalContainer>
					<Paper>
						<Card>
							<CreateForm onSubmit={this.props.onClose} />
						</Card>
					</Paper>
				</ModalContainer>
			</Modal>
		);
	}
}
