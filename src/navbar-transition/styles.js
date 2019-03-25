const vars = {
    togglerWidth: '120px',
    togglerHeight: '40px',
    togglerBgColor: '#ffbf00',
    togglerActiveBgColor: '#ffcf40',
    menuStartingTop: '0px',
    menuEndingTop: '45px',
    menuWidth: '200px',
    menuMaxHeight: '200px',
    menuBgColor: '#ffdc73',
    fadeFromColor: 'transparent',
    fadeToColor: 'black',
    timeout: '350ms',
};

const startTransitionStyles = {
    top: vars.menuStartingTop,
    width: vars.togglerWidth,
    maxHeight: vars.togglerHeight,
    color: vars.fadeFromColor,
    backgroundColor: vars.togglerBgColor,
};

const finishTransitionStyles = {
    top: vars.menuEndingTop,
    width: vars.menuWidth,
    maxHeight: vars.menuMaxHeight,
    color: vars.fadeToColor,
    backgroundColor: vars.menuBgColor,
};

const styles = {
    container: {
        position: 'relative',
    },
    toggler: {
        position: 'relative',
        zIndex: '2',
        width: vars.togglerWidth,
        height: vars.togglerHeight,
        backgroundColor: vars.togglerBgColor,
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background-color 350ms',
    },
    togglerActive: {
        backgroundColor: vars.togglerActiveBgColor,
    },
    menu: {
        position: 'absolute',
        top: vars.menuEndingTop,
        zIndex: '1',
        boxSizing: 'border-box',
        width: vars.menuWidth,
        padding: '0 20px',
        overflow: 'hidden',
        backgroundColor: vars.menuBgColor,
        borderRadius: '5px',
    },
    list: {
        padding: '0',
        listStyleType: 'none',
    },
    listItem: {
        padding: '5px 0',
    },
    balloonEnter: {
        ...startTransitionStyles,
    },
    balloonEnterActive: {
        ...finishTransitionStyles,
        transition: `all ${vars.timeout}`,
    },
    balloonExit: {
        ...finishTransitionStyles,
    },
    balloonExitActive: {
        ...startTransitionStyles,
        transition: `all ${vars.timeout}`,
    },
    highlighted: {
        color: '#29970d',
        transition: `all ${vars.timeout}`,
    },
    swipeContainer: {
        position: 'absolute',
    },
    swipeEnter: {
        transform: 'translateY(-100%)',
        opacity: 0,
    },
    swipeEnterActive: {
        transform: 'translateY(0%)',
        opacity: 1,
        transition: 'all 500ms',
    },
    swipeExit: {
        transform: 'translateY(0%)',
        opacity: 1,
    },
    swipeExitActive: {
        transform: 'translateY(100%)',
        opacity: 0,
        transition: 'all 500ms',
    }
};

export default styles;