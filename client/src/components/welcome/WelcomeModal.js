import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import ChoosePage from './ChoosePage';
import CreatePage from './CreatePage';

const ModalContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export default class WelcomeModal extends PureComponent {
	static propTypes = {
		open: PropTypes.bool,
		close: PropTypes.func,
		onCreate: PropTypes.func,
		onJoin: PropTypes.func,
	}

	state = {}

	moveTo = (page) => () => this.setState({ currentPage: page })

	renderContent() {
		switch (this.state.currentPage) {
			case 'create':
				return <CreatePage {...this.props} />;
			default:
				return <ChoosePage {...this.props} moveTo={this.moveTo} />;
		}
	}

	render() {
		const { open } = this.props;
		return (
			<Modal
				open={open}
				disableEscapeKeyDown={true}
				disableBackdropClick={true}
				>
				<ModalContainer>
					<Paper>
						<Card>
							{this.renderContent()}
						</Card>
					</Paper>
				</ModalContainer>
			</Modal>
		);
	}
}
