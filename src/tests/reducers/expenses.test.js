import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should setup default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'} );
    expect(state).toEqual([]);
});

test('Should remove an expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer( expenses, action );
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('Should NOT remove an expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'a'
    };
    const state = expensesReducer( expenses, action );
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: '4th Item',
        note: '',
        amount: 12300,
        createdAt: moment(0).add(1, 'days')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer( expenses, action );
    expect(state).toEqual([...expenses, expense ]);
});

test('Should edit an expense', () => {
    const description = 'Gummy';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducer( expenses, action );
    expect(state[1].description).toBe(description);
});

test('Should NOT edit an expense', () => {
    const description = 'Faulty';
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'b',
        updates: {
            description
        }
    };
    const state = expensesReducer( expenses, action );
    expect(state).toEqual(expenses);
});
