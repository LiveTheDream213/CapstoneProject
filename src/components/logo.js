import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
      const size = {
        height: this.props.size ? this.props.size : 100,
        width: this.props.size ? this.props.size : 130,

    }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img style={size} src="assets/daily_smarty.png"/>
                </Link>
            </div>
        );
    }
}

export default Logo;