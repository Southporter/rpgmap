import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Container, Row } from '../welcome/common';
import UnplacedCharacters from '../unplaced/UnplacedCharacters';
import Tile from '../tile/Tile';
import PlayerCharacter from '../characters/PlayerCharacter';

class Map extends PureComponent {
	static  propTypes = {
		height: PropTypes.number,
		width: PropTypes.number,
		characters: PropTypes.object,
	}

	reduceCharacters = (row, column) => (characters, character) => {
		if (character.col === column && character.row === row) {
			characters.push(
				<PlayerCharacter
					name={character.name}
					key={character.name}
					character={character}
					color={character.color}
					/>
			);
		}
		return characters;
	}

	renderCharacters = (row, column) => {
		return this.props.characters.reduce(this.reduceCharacters(row, column), []);
	}

	renderTile = (row) => (_, column) => (
		<Tile
			{...this.props}
			key={`tile_${row}_${column}`}
			row={row}
			column={column}
			>
			{this.renderCharacters(row, column)}
		</Tile>
	)

	renderTiles = (_, row) => {
		const { width } = this.props;
		const rowArray = new Array(width).fill({});
		return  (
			<Row key={`row_${row}`}>
				{rowArray.map(this.renderTile(row))}
			</Row>
		);
	}

	renderRows = () => {
		const { height } = this.props;
		const rows = new Array(height).fill({});
		return rows.map(this.renderTiles);
	}

	render() {
		return (
			<Container>
				{this.renderRows()}
				<UnplacedCharacters
					characters={this.props.unplaced}
					/>
			</Container>

		);
	}
}

export default DragDropContext(HTML5Backend)(Map);
