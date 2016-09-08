import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataViewActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import { IssueTable } from 'components';

class DataView extends Component {
  constructor() {
    super();
    this.handleLoadingData = this.handleLoadingData.bind(this);
  }
  componentDidMount() {
    this.handleLoadingData();
  }
  handleLoadingData() {
    const {
      loadIssueData,
    } = this.props.actions;
    loadIssueData();
  }
  render() {
    const {
      issues,
      isLoading,
      error,
      headers,
    } = this.props;
    return (
      <div className={styles.dataView}>
        <Heading align="center">
          Data View
        </Heading>
        {isLoading ?
          <Heading tag="h2" align="center">
            Loading...
          </Heading>
        :
          <Section>
            <IssueTable issues={issues} headers={headers} />
          </Section>
        }
      </div>
    );
  }
}

DataView.propTypes = {
  actions: PropTypes.object.isRequired,
  issues: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  issues: state.dataView.issues,
  headers: state.dataView.tableHeaders,
  error: state.dataView.error,
  isLoading: state.dataView.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    DataViewActionCreators,
    dispatch
  ),
});

const Container = cssModules(DataView, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
