import React, { PureComponent } from 'react';
import { Map as ImmutableMap } from 'immutable';
import red from '@material-ui/core/colors/red';
import WelcomeModal from './components/welcome/WelcomeModal';
import Map from './components/map/Map';

class App extends PureComponent {
	state = {
		isWelcomeModalOpen: true,
		size: {
			height: 5,
			width: 5,
		},
		characters: ImmutableMap({
			Alhrein: { row: 2, col: 3, name: 'Alhrein' },
			Torleig: { row: 1, col: 1, name: 'Torleig', color: red[500] },
		}),
	}

	closeWelcomeModal = () => this.setState({ isWelcomeModalOpen: false })

	handleRoomCreation = () => console.log('creating');
	handleRoomJoin = () => console.log('join');

	handleDrop = (character, row, column) => this.setState(state => ({
		characters: state.characters.set(character.name, { ...character, row, col: column }),
	}))

	render() {
		return (
			<div>
				<Map
					{...this.state.size}
					characters={this.state.characters}
					onDrop={this.handleDrop}
					/>
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
