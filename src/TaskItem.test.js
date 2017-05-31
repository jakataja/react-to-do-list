/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import React from 'react';
import { shallow } from 'enzyme';
import TaskItem from './TaskItem';


describe('TaskItem', () => {

    let onTaskDone, propsDone, propsNotDone, taskItemDone, taskItemNotDone;

    beforeEach(() => {
        onTaskDone = jest.fn();
        propsDone = {id: 1, name: 'task1', categoryId:2, isDone: true, onTaskDone: onTaskDone};
        propsNotDone = {id: 1, name: 'task1', categoryId:2, isDone: false, onTaskDone: onTaskDone};
        taskItemDone = shallow(<TaskItem {...propsDone} />);
        taskItemNotDone = shallow(<TaskItem {...propsNotDone} />);
    });

    it('renders without crashing', () => {
        shallow(<TaskItem />);
    });

    it('renders task not done', () => {
        expect(taskItemNotDone.find('label').prop('style')).toEqual({'textDecoration': 'none'});
    });

    it('renders task done', () => {
        expect(taskItemDone.find('label').prop('style')).toEqual({'textDecoration': 'line-through'});
    });


    it('call onTaskDone on checkbox change', () => {
        expect(taskItemDone.find('input').simulate('change'));
        expect(onTaskDone).toBeCalled();
    });
});