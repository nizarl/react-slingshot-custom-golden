import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/clinicalDocsActions';
import ClinicalDocs from '@ctech/clinicaldocs-component';

class CDContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.actions.fetchClinicalDocsData();

  }

  render () {
    return (
      <div className="container-fluid">
      <ClinicalDocs
        toggleCollapseComponent={this.props.actions.toggleCollapseComponent}
        clinicaldocsProps={this.props.clinicaldocsProps}/>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CDContainer);