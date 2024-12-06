import Link from 'next/link'
import CssStyle from './logo.module.css'
import Image from 'next/image'

export default function Logo() {
    return <div className={ CssStyle.Con } >

      

    {/* <div className={ CssStyle.Name }> ARJUN KUMAR  </div> */}

    {/* <div className={ CssStyle.Des}> Personal Notebook </div> */}

    <Link href="/" className={CssStyle.LogoimgLink}>
        <Image
          className={CssStyle.Logoimg}
          src="/logo1.png"
          width={200}
          height={200}
          alt="logos"
        />
      </Link> 
    


    {/* <Link href="/" className={ CssStyle.LINK } > NOTE BOOK </Link> */}

</div>
}