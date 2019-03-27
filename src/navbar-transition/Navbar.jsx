import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import cx from 'classnames';
import styles from './styles';
import injectSheet from 'react-jss';
import './navbar.css';
import { Toggler } from './components';

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
        if(nextProps.location !== this.props.location) {
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
        const { location, classes } = this.props;
        return (
            <Fragment>
                <div className={classes.container}>
                    <button
                        className={
                            cx(classes.toggler,
                                {
                                    [classes.togglerActive]: this.state.showBalloon,
                                }
                            )}
                <div className="container">
                    <Toggler
                        onClick={this.toggle}
                    >
                        Menu
                    </Toggler>
                    <CSSTransition
                        in={showBalloon}
                        timeout={400}
                        classNames={{
                            enter: classes.balloonEnter,
                            enterActive: classes.balloonEnterActive,
                            exit: classes.balloonExit,
                            exitActive: classes.balloonExitActive,
                        }}
                        unmountOnExit
                        appear
                        // enter={false} // in case we want to swith off animation dynamicaly
                        // exit={false}
                        onEntered={()=>this.highlightMenuItem()}
                        onExit={()=>this.highlightMenuItem()}
                        >
                        <div className={classes.menu}>
                            <ul className={classes.list}>
                                <li className={classes.listItem}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={classes.listItem}>
                                    <Link className={cx({[classes.highlighted]: isHighlighted})} to="/profile">Profile</Link>
                                </li>
                                <li className={classes.listItem}>
                                    <Link to="/favorites">Favorites</Link>
                                </li>
                                <li className={classes.listItem}>Sign out</li>
                            </ul>
                        </div>
                    </CSSTransition>
                </div>
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames={{
                        enter: classes.swipeEnter,
                        enterActive: classes.swipeEnterActive,
                        exit: classes.swipeExit,
                        exitActive: classes.swipeExitActive,
                    }}
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

const NavbarStyled = injectSheet(styles)(Navbar);

class NavbarRouter extends Component {
    render() {
        return (
            <Router>
                <Route component={NavbarStyled} />
            </Router>
        );
    }
}

export default NavbarRouter;
