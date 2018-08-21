import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moveCharacter } from './actions/characters';
import { updateSize, createRoom, joinRoom } from './actions/map';
import WelcomeModal from './components/welcome/WelcomeModal';
import Map from './components/map/Map';
import Header from './components/header/Header';

class App extends PureComponent {
	static propTypes = {
		map: PropTypes.object,
		characters: PropTypes.object,
		unplaced: PropTypes.object,
		moveCharacter: PropTypes.func.isRequired,
	}
	state = {
		isWelcomeModalOpen: true,
		isAddModalOpen: true,
	}

	closeWelcomeModal = () => this.setState({ isWelcomeModalOpen: false })

	toggleAddCharacterModal = () => this.setState(state =>
		({ ...state, isAddModalOpen: !state.isAddModalOpen }))

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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
