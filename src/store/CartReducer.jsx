export default (state, action) => {
    if (action.type === 'addItem') {

        const presentItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items]; // creating copy of state as state is immutable
        //if item is present presentItemIndex will contain the index value
        if (presentItemIndex > -1) {
            const presentItem = state.items[presentItemIndex];
            const updatedItem = { ...presentItem, quantity: presentItem.quantity + 1 };
            updatedItems[presentItemIndex] = updatedItem;
        }
        else { updatedItems.push({ ...action.item, quantity: 1 }); }
        return { ...state, items: updatedItems };
    }
    else if (action.type === 'removeItem') {
        const presentItemIndex = state.items.findIndex((item) => item.id === action.id);
        const presentItem = state.items[presentItemIndex];
        const updatedItems = [...state.items];
        if (presentItem.quantity === 1) {
            updatedItems.splice(presentItemIndex, 1);
        }
        else {
            const updatedItem = { ...presentItem, quantity: presentItem.quantity - 1 };
            updatedItems[presentItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems }
    }
    else if(action.type === 'clearCart') {
        return {...state,items:[]};
    }
    return state;

}