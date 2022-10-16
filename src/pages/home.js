import Banner from '../components/banner';
import Sobre from '../components/sobre';
import Social from '../components/social';
import Cardapio from '../components/cardapio';
import Ofertas from '../components/ofertas';

export default function Home(){
    return(
        <>
         <Banner/>
         <Sobre/>
         <Social/>
         <Cardapio/>
         <Ofertas/>
        </>
    )
}