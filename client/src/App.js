import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moveCharacter, createCharacter } from './actions/characters';
import { updateSize, createRoom, joinRoom } from './actions/map';
import WelcomeModal from './components/welcome/WelcomeModal';
import CreateCharacterModal from './components/create';
import Map from './components/map/Map';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends PureComponent {
	static propTypes = {
		map: PropTypes.object,
		characters: PropTypes.object,
		unplaced: PropTypes.object,
		moveCharacter: PropTypes.func.isRequired,
		createCharacter: PropTypes.func.isRequired,
	}

	state = {
		isWelcomeModalOpen: true,
		isAddModalOpen: false,
	}

	closeWelcomeModal = () => this.setState({ isWelcomeModalOpen: false })

	toggleAddCharacterModal = () => this.setState(state =>
		({ ...state, isAddModalOpen: !state.isAddModalOpen }))

	handleCharacterCreation = (character) => {
		this.props.createCharacter(character);
		this.toggleAddCharacterModal();
	}

	render() {
		return (
			<div>
				<Header roomCode={this.props.map.code} />
				<Map
					{...this.props.map}
					characters={this.props.characters}
					onDrop={this.props.moveCharacter}
					unplaced={this.props.unplaced}
				/>
				<WelcomeModal
					{...this.props}
					open={this.state.isWelcomeModalOpen}
					close={this.closeWelcomeModal}
				/>
				<CreateCharacterModal
					{...this.props}
					open={this.state.isAddModalOpen}
					onClose={this.handleCharacterCreation}
				/>
				<Footer
					role={this.props.map.role}
					onClick={this.toggleAddCharacterModal}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		characters: state.characters.get('characters'),
		unplaced: state.characters.get('unplacedCharacters'),
		map: state.map,
	};
}

const mapDispatchToProps = {
	moveCharacter,
	updateSize,
	onJoin: joinRoom,
	onCreate: createRoom,
	createCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
