import React, {ComponentType, ReactComponentElement} from "react";
import Preloader from "../components/common/Preloader/Preloader";



const withSuspense = (Component: any) => {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default withSuspense;