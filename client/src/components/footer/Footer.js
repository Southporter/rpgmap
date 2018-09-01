import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { ROLES } from '../../constants';

const FabContainer = styled.div`
	position: absolute;
	bottom: 3vh;
	right: 3vh;
`;

const Footer = ({ role, onClick }) => {
	if (role === ROLES.ADMIN) {
		return (
			<FabContainer>
				<Button
					variant="fab"
					color="secondary"
					aria-label="Add"
					onClick={onClick}
					>
					<AddIcon />
				</Button>
			</FabContainer>
		);
	}
	return null;
};

Footer.propTypes = {
	role: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Footer;
