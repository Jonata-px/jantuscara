import {FaAnchor,FaUtensils} from 'react-icons/fa';
import { MdDeliveryDining } from "react-icons/md";
export default function Sobre(){
    
    return(
        <section id="historia" className="sobre">
            <div className="tic-tic-top tic-tic">
                
            </div>
            <div className="container">
                <div className="header-session">
                    <h1>Sobre nós</h1>
                    <h2>Cozinhamos deliciosas comidas desde xxxx</h2>
                    <div className="border"></div>             
                </div>

                <div className="sobre-wrap">
                    <div className="sobre-single">
                        <h1><FaAnchor/></h1>
                        <h4>Desde xxxx</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra orci sit amet rutrum hendrerit. Etiam semper,</p>
                    </div>

                    <div className="sobre-single">
                        <h1><FaUtensils/></h1>
                        <h4>Comida tradicional</h4>
                        <p>Ut aliquet arcu sit amet erat commodo aliquet. Vivamus vel sem quis nulla mattis ultrices. Duis sed tellus scelerisque, pharetra lacus quis, accumsan elit. Donec vitae dolor vulputate, vestibulum tortor id, porttitor lacus. </p>
                    </div>

                    <div className="sobre-single">
                        <h1><MdDeliveryDining/></h1>
                        <h4>Delivery</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra orci sit amet rutrum hendrerit. Etiam semper,</p>
                    </div>
                </div>
            </div>
            <div className="tic-tic-bottom tic-tic"></div>
        </section>
    )
}