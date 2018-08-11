import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moveCharacter } from './actions/characters';
import { updateSize } from './actions/map';
import WelcomeModal from './components/welcome/WelcomeModal';
import Map from './components/map/Map';

class App extends PureComponent {
	static propTypes = {
		size: PropTypes.object,
		characters: PropTypes.object,
		moveCharacter: PropTypes.func.isRequired,
	}
	state = {
		isWelcomeModalOpen: true,
	}

	closeWelcomeModal = () => this.setState({ isWelcomeModalOpen: false })

	handleRoomCreation = () => console.log('creating');
	handleRoomJoin = () => console.log('join');

	render() {
		return (
			<div>
				<Map
					{...this.props.size}
					characters={this.props.characters}
					onDrop={this.props.moveCharacter}
					/>
				<WelcomeModal
					{...this.props}
					open={this.state.isWelcomeModalOpen}
					close={this.closeWelcomeModal}
					onCreate={this.handleRoomCreation}
					onJoin={this.handleRoomJoin}
					/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		characters: state.characters.get('players'),
		size: state.map.toJS(),
	};
}

const mapDispatchToProps = {
	moveCharacter,
	updateSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
