import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/session-form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <div className="signup-form-container">
            <div className="session-header">
              <h1 id="session-logo">SafeTravels</h1>
            </div>          
          <form onSubmit={this.handleSubmit}>
            <div className="session-form-content">
              <div className="signup-form-container-2">
                <h1 className="session-form-title sign-up-title">Sign up for an account!</h1>   
                <div className="signup-form-body">
                  <br />
                  <input className="session-input" type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                  />
                  <br />
                  <input className="session-input" type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                  <br />
                  <input className="session-input" type="password"
                    value={this.state.password2}
                    onChange={this.update('password2')}
                    placeholder="Confirm Password"
                  />
                  <br />
                  <input className="session-submit" type="submit" value="Sign Up" />
                </div>
                <div className="errors-container">              
                  {this.renderErrors()}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);