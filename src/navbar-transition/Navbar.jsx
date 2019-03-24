import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './navbar.css';

class Navbar extends Component {
    state = {
        showBalloon: true,
        isHighlighted: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            showBalloon: !prevState.showBalloon,
        }));
    };

    highlightMenuItem = () => {
        this.setState(({isHighlighted}) => ({
            isHighlighted: !isHighlighted
        }))
    }

    render() {
        const { showBalloon, isHighlighted } = this.state;
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
                    onEntered={()=>this.highlightMenuItem()}
                    onExit={()=>this.highlightMenuItem()}
                    >
                    <div className="menu">
                        <ul className="list">
                            <li className="list-item">Home</li>
                            <li className={
                                cx("list-item", {highlighted: isHighlighted})
                            }>Profile</li>
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
