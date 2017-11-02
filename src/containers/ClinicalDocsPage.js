import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/clinicalDocsActions';
import ClinicalDocs from '@ctech/clinicaldocs-component';
import {BASE_URL} from '../utils/path.service';
import config from '../project.properties';

export class CDContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    let baseUrl = BASE_URL;
    let clinicaldocsConfig = config.componentInfo.clinicaldocs;
    this.props.actions.fetchClinicalDocsData(baseUrl + clinicaldocsConfig.mock );

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