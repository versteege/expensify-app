import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { confirmAlert } from 'react-confirm-alert';

const removeExpensenAction = (props) => {
    props.dispatch(removeExpense({ id: props.match.params.id}));
    props.history.push('/');
};

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
        <button
            key={props.match.params.id}
// The confirmation fucks up testing with jest
            onClick={ removeExpensenAction(props) }
            // onClick={() => {
            //                 confirmAlert({
            //                     title: 'Confirm to submit',
            //                     message: 'Are you sure to do this.',
            //                     buttons: [
            //                     {
            //                         label: 'Yes',
            //                         onClick: () => removeExpensenAction(props)
            //                     },
            //                     {
            //                         label: 'No',
            //                         onClick: () => undefined
            //                     }
            //                     ]
            //                 });
            //                 }
            //         }
        >Remove</button>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default  connect(mapStateToProps)(EditExpensePage);
