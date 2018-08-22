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
	}

	renderCharacters() {
		const { characters } = this.props;
		console.debug('unplaced', characters);
		return characters.map(character => (
			<PlayerCharacter
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
