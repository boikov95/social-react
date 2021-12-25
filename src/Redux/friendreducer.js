let initialState = {
    friend: [
        { id: 1, name: "Polina" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Kirill" },
        { id: 4, name: "Kolia" },
        { id: 5, name: "Vasilii" }
    ]
}

let friendreducer = (state = initialState, action) => {
    return state;
}

export default friendreducer;