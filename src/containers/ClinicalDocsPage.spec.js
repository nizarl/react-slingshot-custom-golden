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
          const fuelSavings = {
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
              fuelSavings
            }
            />);

            expect(wrapper.find(ClinicalDocsComponent).length).toEqual(1);
          });
      });
