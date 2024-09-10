import CssStyle from './headerContainer.module.css';
export default function Headercontainer({children}) {

    return <header  className={CssStyle.Con} >

    <div className={ CssStyle.Container}>
        
       <div className={CssStyle.childrenCon}>  { children } </div>


    </div>

</header>
}