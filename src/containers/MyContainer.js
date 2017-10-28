import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/clinicalDocsActions';
import ClinicalDocs from '@ctech/clinicaldocs-component';

export const MyContainer = (props) => {

  return (
    <div className="container-fluid">
    <ClinicalDocs toggleCollapseComponent={props.actions.toggleCollapseComponent} clinicaldocsProps={props.clinicaldocsProps} />
    </div>

  );
};


function mapStateToProps(state) {
  return {
    clinicaldocsProps: state.clinicaldocsProps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContainer);
