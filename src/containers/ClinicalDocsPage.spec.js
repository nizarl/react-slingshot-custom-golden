import React from 'react';
import {mount} from 'enzyme';
import {CDContainer} from './ClinicalDocsPage';
import ClinicalDocsComponent from '@ctech/clinicaldocs-component';
import {fetchClinicalDocsData} from '../actions/clinicalDocsActions';

describe('<CDContainer />', () => {
      it('should contain <ClinicalDocsComponent />', () => {
          const actions = {
            toggleCollapseComponent: () => {},
            fetchClinicalDocsData: fetchClinicalDocsData
          };
          const tempProps = {
            clinicaldocsData: [],
            componentInfo: {
              id: 1,
              name: 'clinicaldocs',
              urlPath: 'clinicaldocs/',
            },
            isOpened: true
          };
          const wrapper = mount(<CDContainer toggleCollapseComponent = {
              actions.toggleCollapseComponent
            }
            actions = {
              actions
            }
            clinicaldocsProps = {
              tempProps
            }
            />);

            expect(wrapper.find(ClinicalDocsComponent).length).toEqual(1);
          });
      });
