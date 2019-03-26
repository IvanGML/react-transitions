import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import cx from 'classnames';
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
        const { location } = this.props;
        return (
            <Fragment>
                <div className="container">
                    <Toggler
                        onClick={this.toggle}
                    >
                        Menu
                    </Toggler>
                    <CSSTransition
                        in={showBalloon}
                        timeout={400}
                        classNames="balloon"
                        unmountOnExit
                        appear
                        // enter={false} // in case we want to swith off animation dynamicaly
                        // exit={false}
                        onEntered={()=>this.highlightMenuItem()}
                        onExit={()=>this.highlightMenuItem()}
                        >
                        <div className="menu">
                            <ul className="list">
                                <li className="list-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={cx("list-item", {highlighted: isHighlighted})}>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/favorites">Favorites</Link>
                                </li>
                                <li className="list-item">Sign out</li>
                            </ul>
                        </div>
                    </CSSTransition>
                </div>
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
