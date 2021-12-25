const AddMessage ='Add-Message';

export const AddMessageActionCreator=(text)=>({type:AddMessage, text});

let initialState = {
    messagedata: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Polina" }
    ],
    dialogsdata: [
        { id: 1, name: "Igor" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Kirill" },
        { id: 4, name: "'Polina" },
    ]
}

let dialogreducer = (state = initialState, action) => {
    switch (action.type) {
        case AddMessage:  
            return {
                ...state,
                messagedata:[...state.messagedata,{id: 5, message: action.text}]
            }
        default: return state;
    }


}

export default dialogreducer;