import * as React from 'react';
import { useContext } from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import { Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { faDatabase, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { globalContext } from '../../store/store';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header: React.FC = () => {
  const { globalState, dispatch } = useContext(globalContext);
  const history = useHistory();

  const handleLogout = async () => {
    await dispatch({ type: 'PURGE_STATE' });
    return history.push('/login');
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="header">
      <Navbar.Brand>
        <span className="brand">
          Movie<span className="font-weight-bold">Lab</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/search" activeClassName="active" className="ms-4 me-2">
            <span className="me-2">Search</span>
          </NavLink>
          <NavLink to="/favorites" activeClassName="active">
            <span>Favorites</span>
          </NavLink>
        </Nav>
        {globalState.loggedUser ? (
          <Nav>
            <DropdownButton
              variant="info"
              menuAlign="right"
              size="sm"
              title={globalState.loggedUser}
              id="user-menu"
            >
              <Dropdown.Item>
                <FontAwesomeIcon icon={faDatabase} />
                {globalState.persistenceType === 'sessionStorage'
                  ? 'Session Storage'
                  : 'Local Storage'}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="1" onClick={handleLogout}>
                <FontAwesomeIcon icon={faPowerOff} /> Logout
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};
