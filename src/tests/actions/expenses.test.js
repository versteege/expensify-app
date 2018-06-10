import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup removeExpense action object', () => {
    const action = removeExpense({ id: '1234abc' });
    expect(action).toEqual(
        {
            type: 'REMOVE_EXPENSE',
            id: '1234abc'
        }
    );
});

test('Should setup editExpense action object', () => {
    const action = editExpense('1234abc', { note: 'new string' });
    expect(action).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id: '1234abc',
            updates: {
                note: 'new string'
            }
        }
    );
});

test('Should setup addExpense action object with values', () => {
    const expenseData = {
        description: 'Test object',
        amount: 12300,
        createdAt: 1000,
        note: 'Testnote'
    };
    const action = addExpense( expenseData );
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        }
    );
});

test('Should setup addExpense action object with defaults', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        }
    );
});
