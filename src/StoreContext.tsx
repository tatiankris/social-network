import React from 'react';
import {Store} from "redux";



export type ProviderPropsType = {
    store: Store
    children: React.ReactNode
}

const StoreContext = React.createContext({} as Store);

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext;
