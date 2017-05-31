/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */


import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';


describe('ProgressBar', () => {

    let progress, progressbar;

    beforeEach(() => {
        progress = 30;
        progressbar = shallow(<ProgressBar progress={progress} />);
    });

    it('renders without crashing', () => {
        progressbar
    });

    it('renders progress', () => {
        expect(progressbar.find('.Progressbar__loader').prop('style')).toEqual({'width': progress + '%' });
    });
});