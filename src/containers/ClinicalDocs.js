import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/clinicalDocsActions';
import ClinicalDocs from '@ctech/clinicaldocs-component';

export const CDContainer = (props) => {

  return (
    <div className="container-fluid">
      <ClinicalDocs
        toggleCollapseComponent={props.actions.toggleCollapseComponent}
        clinicaldocsProps={props.clinicaldocsProps}/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    clinicaldocsProps: {
      componentInfo:{
        id: state.clinicaldocsProps.id,
        name: state.clinicaldocsProps.name,
        urlPath: state.clinicaldocsProps.urlPath,
      },
      clinicaldocsData: state.clinicaldocsProps.clinicaldocsData,
      isOpened: state.clinicaldocsProps.isOpened
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CDContainer);
