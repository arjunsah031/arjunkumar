
import Card from '@/reusableui/Product/Card/Card';
import CarddBox from '@/reusableui/Product/CarddBox/CarddBox';
import { Dummydata } from '@/reusableui/Product/ProductDummydata/ProductDummydata';

export default function CartIteam() {

    let containdata = Dummydata.map( iteam => {

        return <Card

            key = { iteam.id}
            id = { iteam.id}
            tittle = { iteam.tittle}
            price = { iteam.price }
            des = { iteam.des }
            duration = { iteam.duration}

        />
    })



    return <div>

        <CarddBox>

            { containdata}

        </CarddBox>

    </div> 
}
