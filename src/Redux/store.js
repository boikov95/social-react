import dialogreducer from "./dialogreducer";
import friendreducer from "./friendreducer";
import profilereducer from "./profilereducer";






let store ={
    _unloadsite(){ 
        console.log("start");       
    },
    _state : {
        profilePage: {
            postdata: [
                { id: 1, message: 'Hello', like: '15' },
                { id: 2, message: 'first', like: '20' }
            ],
            newPostText: 'Мой пост'
        },
        dialogPage: {
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
            ],
            newMessage: 'Моё сообщение'
        },
        friendPage: {
            friend: [
                { id: 1, name: "Polina" },
                { id: 2, name: "Dima" },
                { id: 3, name: "Kirill" },
                { id: 4, name: "Kolia" },
                { id: 5, name: "Vasilii" }
            ]
        }
    },
    getState() {
        return this._state;
    },    
    subscribe (observe) {
        this._unloadsite=observe;
    },
    dispatch(action){    
        this._state.profilePage=profilereducer(this._state.profilePage, action);
        this._state.dialogPage=dialogreducer(this._state.dialogPage, action);
        this._state.friendPage=friendreducer(this._state.friendPage, action);
        this._unloadsite(this._state);  
    }
}

export default store;