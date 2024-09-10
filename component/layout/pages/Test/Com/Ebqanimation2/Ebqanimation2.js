import React from 'react'
import CssStyle from './Ebqanimation2.module.css';
import Image from 'next/image';

const Ebqanimation2 = () => {

    

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.CirculeCon }>

            <div className={ CssStyle.RootofebqCon }>
                <Image src='/rootofEbq.png' width={100} height={100} alt='Ebqsquareicond' />
                <span> EBQ  </span>
            </div>

        </div>

        <div className={ CssStyle.SecCirculeCon }>

            <div className={ CssStyle.SecRootofebqCon }>

                <div className={ CssStyle.MovableDiv}>

                    <Image  src='/rootofEbq.png' width={100} height={100} alt='Ebqsquareicond' />
                    
                </div>

                <span className={ CssStyle.EbqText}>EBQ</span>
               
            </div>

        </div>

    </div>
}

export default Ebqanimation2;