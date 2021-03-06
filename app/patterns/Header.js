const React = require('react');
const { Component, PropTypes } = React;

class Header extends Component {
    render() {
        return (
          <header className="header -hero -new" role="banner">
              <div className="wrapper">
                  <h1 className="header__title">
                      { this.props.title }
                  </h1>
                  <p className="header__subtitle">
                      { this.props.subtitle ? <p className="header__subtitle">{ this.props.subtitle }</p> : null }
                  </p>
              </div>
          </header>
        );
    }
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Header;
