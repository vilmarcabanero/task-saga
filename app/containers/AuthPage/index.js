/**
 *
 * AuthPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { Box, Grid } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthPage from './selectors';
import Actions from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';

export function AuthPage(props) {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  const { login, authPageState, getUser, history } = props;
  const { userData } = authPageState;

  const [isRegistered, setIsRegistered] = useState(true);
  const [willRedirect, setWillRedirect] = useState(false);

  return (
    <div>
      <Box>
        <Grid container justify="center" alignItems="center">
          {isRegistered ? (
            <LoginForm
              history={history}
              login={login}
              userData={userData}
              getUser={getUser}
              willRedirect={willRedirect}
              setWillRedirect={setWillRedirect}
              setIsRegistered={setIsRegistered}
            />
          ) : (
            <div>RegisterForm</div>
          )}
        </Grid>
      </Box>
    </div>
  );
}

AuthPage.propTypes = {
  authPageState: PropTypes.object,
  history: PropTypes.func,
  login: PropTypes.object,
  getUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  authPageState: makeSelectAuthPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthPage);
