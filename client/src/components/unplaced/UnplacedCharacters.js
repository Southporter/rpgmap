import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerCharacter from '../characters/PlayerCharacter';

const AbsoluteBottom = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 10vh;
`;

export default class UnplacedCharacters extends PureComponent {
	static propTypes = {
		characters: PropTypes.object,
		user: PropTypes.string,
	}

	renderCharacters() {
		const { characters } = this.props;
		console.debug('props', this.props);
		return characters.map(character => (
			<PlayerCharacter
				user={this.props.user}
				name={character.name}
				key={character.name}
				color={character.color}
				character={character}
			/>
		));
	}

	render() {
		return (
			<AbsoluteBottom>
				{this.renderCharacters()}
			</AbsoluteBottom>
		);
	}
}
