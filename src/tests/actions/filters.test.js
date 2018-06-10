import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('Should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual(
        {
            type: 'SET_START_DATE',
            startDate: moment(0)
        }
    );
});

test('Should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual(
        {
            type: 'SET_END_DATE',
            endDate: moment(0)
        }
    );
});

test('Should generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual( { type: 'SORT_BY_AMOUNT' } );
});

test('Should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual( { type: 'SORT_BY_DATE' } );
});

test('Should generate setTextFilter action object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: ''
        }
    );
});

test('Should generate setTextFilter action object with value', () => {
    const action = setTextFilter('Textvalue');
    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: 'Textvalue'
        }
    );
});
