import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { confirmAlert } from 'react-confirm-alert';

export class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        const locale = 'nl';
        // const locale = getLocale(props);

        this.state = {
                        id: props.expense ? props.expense.id : undefined,
                        description: props.expense ? props.expense.description : '',
                        note: props.expense ? props.expense.note : '',
                        amount: props.expense ? (props.expense.amount / 100).toString() : '',
                        createdAt: props.expense ? moment(props.expense.createdAt).locale(locale) : moment().locale(locale),
                        calendarFocused: false,
                        error: undefined
                    }
    }

    constructExpense = (state) => ({
        id: state.id,
        description: state.description,
        amount: parseFloat(state.amount, 10) * 100,
        createdAt: state.createdAt.valueOf(),
        note: state.note
    });

    getLocale = (props) => {
        const locale = props.appglobals !== undefined ? props.appglobals : 'en';
        return locale;
    };

    componentDidMount () {
        const locale = 'nl';
        // const locale = getLocale(this.props.appglobals);
        const now = moment().locale(locale).format('D MMMM YYYY');
        // console.log(now);
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        // const note = e.target.value;
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }));
        }

    };
    onCreatedAtChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "You didn't specify everything" }));
        } else {
            this.setState(() => ({ error: undefined }));

            // The confirmation fucks up testing with jest
            this.props.onSubmit(this.constructExpense(this.state));
            // confirmAlert({
            //     title: 'Confirm to submit',
            //     message: 'Are you sure to do this.',
            //     buttons: [
            //       {
            //         label: 'Yes',
            //         onClick: () => this.props.onSubmit(this.constructExpense(this.state))
            //       },
            //       {
            //         label: 'No',
            //         onClick: () => this.state
            //       }
            //     ]
            //   });
            
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-expense-error">{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onCreatedAtChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>
                        {this.state.id ? 'Edit expense' : 'Add expense'}
                    </button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        appglobals: state.appglobals
    };
};

export default connect(mapStateToProps)(ExpenseForm);
