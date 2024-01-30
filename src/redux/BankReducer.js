function BankReducer(state={
    balance: 500,
    a:100
  },action){
    switch(action.type){
        case "WITHDRAW":
            return { ...state,
                balance: state.balance - action.payload
            }
        case "DEPOSIT":
            return {...state,
                balance: state.balance + +action.payload
            }
        default:
            return state
    }
  }
  export default BankReducer