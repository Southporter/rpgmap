import React, { PureComponent } from 'react';
import WelcomeModal from './components/welcome/WelcomeModal';

class App extends PureComponent {
	state = {
		isWelcomeModalOpen: true,
	}

	closeWelcomeModal = () => this.setState({ isWelcomeModalOpen: false })

	handleRoomCreation = () => console.log('creating');
	handleRoomJoin = () => console.log('join');

	render() {
		return (
			<div>
				<WelcomeModal
					open={this.state.isWelcomeModalOpen}
					close={this.closeWelcomeModal}
					onCreate={this.handleRoomCreation}
					onJoin={this.handleRoomJoin}
					/>
			</div>
		);
	}
}

export default App;
