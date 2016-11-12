import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flashClear } from 'actions/flash';

import './flash.scss';

class Flash extends Component {
    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string,
        severity: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    };

    close = (e) => {
        e.preventDefault();
        this.props.flashClear();
    }

    render() {
        const { title, message, severity, visible } = this.props;
        if (!visible) return null;

        return (
            <div className="container">
                <div className={`flash ${severity}`}>
                    <span className="close">
                        <a href="#" onClick={this.close}>&times;</a>
                    </span>
                    <div className="flash-title">{title}</div>
                    <div className="flash-message">{message}</div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ ...state.flash }),
    dispatch => bindActionCreators({flashClear}, dispatch)
)(Flash);