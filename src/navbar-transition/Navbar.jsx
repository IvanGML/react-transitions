import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './navbar.css';

class Navbar extends Component {
    state = {
        showBalloon: true,
    };

    toggle = () => {
        this.setState(prevState => ({
            showBalloon: !prevState.showBalloon,
        }));
    };

    render() {
        const { showBalloon } = this.state;
        return (
            <div className="container">
                <button
                    className={
                        cx('toggler',
                            {
                                'toggler--active': this.state.showBalloon,
                            }
                        )}
                    onClick={this.toggle}
                >
                    Menu
                </button>
                <CSSTransition
                    in={showBalloon}
                    timeout={400}
                    classNames="balloon"
                    unmountOnExit
                    appear
                    // enter={false} // in case we want to swith off animation dynamicaly
                    // exit={false}
                    >
                    <div className="menu">
                        <ul className="list">
                            <li className="list-item">Home</li>
                            <li className="list-item">Profile</li>
                            <li className="list-item">Favorites</li>
                            <li className="list-item">Sign out</li>
                        </ul>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default Navbar;
