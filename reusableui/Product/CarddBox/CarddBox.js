
import CssStyle from './CarddBox.module.css';

export default function CarddBox({children})  {

    return <div className={ CssStyle.Con } >

        {children}

    </div>
}
