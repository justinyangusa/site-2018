import React, { Component } from 'react';
import querystring from 'query-string';

import axios from 'axios';

import {api_url} from '../../../config';

class Auth extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    const code = querystring.parse(this.props.location.search)['code'];
    axios.get(api_url + '/v1/auth/github?code=' + code)
    .then(
      (token) => {
        sessionStorage.setItem("Authorization", 'Bearer ' + token.data.data.auth);
        const callback = sessionStorage.getItem('callback')  || '/register';
        this.props.history.push(callback);
      },
      (reject) => {
        console.error('your authentication request failed, please try again');
        sessionStorage.removeItem('Authorization');
        this.props.history.push("/");
      }
    )
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Auth
