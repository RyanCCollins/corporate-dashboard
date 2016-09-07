import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { SidebarNav } from 'components';
import App from 'grommet/components/App';
import { updatePageTitle, getTitleFromRoute } from 'utils/a11y';

class Main extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const {
      pathname,
    } = this.props.location;
    updatePageTitle(getTitleFromRoute(pathname));
  }
  componentWillReceiveProps(newProps) {
    const {
      pathname,
    } = this.props.location;
    const newPathname = newProps.location.pathname;
    if (newPathname !== pathname) {
      updatePageTitle(getTitleFromRoute(newPathname));
    }
  }
  render() {
    return (
      <div>
        <SidebarNav>
          <App>
            {React.cloneElement(this.props.children, this.props)}
          </App>
        </SidebarNav>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.children,
  location: PropTypes.object.isRequired,
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  messages: state.messages,
  errors: state.errors,
});

// Map the dispatch and bind the action creators.
// See: http://redux.js.org/docs/api/bindActionCreators.html
// mapDispatchToProps :: Dispatch Func -> {Actions}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch
  ),
});

// Use connect both here and in your components.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default ConnectedApp;
