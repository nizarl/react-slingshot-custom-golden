import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/clinicalDocsActions';
import ClinicalDocs from '@ctech/clinicaldocs-component';

export const CDContainer = (props) => {

  return (
    <div className="container-fluid">
    <ClinicalDocs toggleCollapseComponent={props.actions.toggleCollapseComponent} clinicaldocsProps={props.clinicaldocsProps} fuelSavings={props.fuelSavings} />
    </div>
  );
};


function mapStateToProps(state) {
  return {

    clinicaldocsProps: Object.assign({}, state.clinicaldocsProps.components.byId[1])
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
)(CDContainer);