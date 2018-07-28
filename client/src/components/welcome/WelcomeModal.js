import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

import ChoosePage from './ChoosePage';
import CreatePage from './CreatePage';

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
		const { open, close } = this.props;
		return (
			<Modal open={open} close={close}>
				{this.renderContent()}
			</Modal>
		);
	}
}
