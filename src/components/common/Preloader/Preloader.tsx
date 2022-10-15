import React from "react";
import s from './Preloader.module.scss'
import preloader from "../../../assets/images/25transback.gif";


const Preloader = () => {
    return (
            <div>
                <img className={s.img} src={preloader}/>
            </div>
        // <div style={{
        //     margin: '20px 0',
        //     marginBottom: '20px',
        //     padding: '30px 50px',
        //     textAlign: 'center',
        //     background: 'rgba(0, 0, 0, 0.05)',
        //     borderRadius: '4px'
        // }}>
        // <div>
        //     <Spin className={s.img}/>
        // </div>

        )

}

export default Preloader;