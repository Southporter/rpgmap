import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Row } from '../welcome/common';

const Header = ({ roomCode = '' }) => (
	<Row>
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='title' color='inherit'>
					{roomCode}
				</Typography>
			</Toolbar>
		</AppBar>
	</Row>
);

Header.propTypes = {
	roomCode: PropTypes.string,
};

export default Header;
