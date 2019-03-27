import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import cx from 'classnames';
import './navbar.css';
import { Toggler, Container, Menu, List, ListItem } from './components';

class NavbarRouter extends Component {
    render() {
        return (
            <Router>
                <Route component={Navbar} />
            </Router>
        );
    }
}

class Navbar extends Component {
    state = {
        showBalloon: false,
        isHighlighted: false,
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.location !== this.props.location) {
            this.toggle();
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            showBalloon: !prevState.showBalloon,
        }));
    };

    highlightMenuItem = () => {
        this.setState(({ isHighlighted }) => ({
            isHighlighted: !isHighlighted
        }))
    }

    render() {
        const { showBalloon, isHighlighted } = this.state;
        const { location } = this.props;
        return (
            <Fragment>
                <Container>
                    <Toggler
                        active={showBalloon}
                        onClick={this.toggle}
                    >
                        Menu
                    </Toggler>
                    <Menu
                        in={showBalloon}
                        timeout={350}
                        unmountOnExit
                    >
                        <List>
                            <ListItem>
                                <Link to="/">Home</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/profile">Profile</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/favorites">Favorites</Link>
                            </ListItem>
                            <ListItem>Sign out</ListItem>
                        </List>
                    </Menu>
                </Container>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="swipe"
                        timeout={500}
                    >
                        <div className="swipe-container">
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
                                />
                                <Route
                                    exact
                                    path="/profile"
                                    component={Profile}
                                />
                                <Route
                                    exact
                                    path="/favorites"
                                    component={Favorites}
                                />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default NavbarRouter;
