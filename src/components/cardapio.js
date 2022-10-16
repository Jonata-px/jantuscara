import Img1 from '../static/images/pexels-live-on-shot.jpg';
import Img2 from '../static/images/pexels-kindel-media.jpg';
import Img3 from '../static/images/pexels-alleksana.jpg';
import Img4 from '../static/images/pexels-dzenina-lukac.jpg';
import Img5 from '../static/images/pexels-nastyasensei.jpg';
import Img6 from '../static/images/pexels-matthias-zomer.jpg';

export default function Cardapio(){
    
    return(
        <section id="cardapio" className="cardapio">
            <div className="tic-tic-top tic-tic">
                
            </div>
            <div className="container">
                <div className="header-session">
                    <h1>Cardápio</h1>
                    <h2>Nulla quam dolor, semper eu nulla quis</h2>
                    <div className="border"></div>             
                </div>

                <div className="cardapio-wrap">
                    <div className="cardapio-single">
                        <div style={{backgroundImage:"url("+Img1+")"}} className="cardapio-img"></div>
                        <h4>Categoria</h4>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                    </div>

                    <div className="cardapio-single">
                        <div style={{backgroundImage:"url("+Img2+")"}} className="cardapio-img"></div>
                        <h4>Categoria</h4>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                    </div>

                    <div className="cardapio-single">
                        <div style={{backgroundImage:"url("+Img3+")"}} className="cardapio-img"></div>
                        <h4>Categoria</h4>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                    </div>
                    <div className="cardapio-single">
                        <div style={{backgroundImage:"url("+Img4+")"}} className="cardapio-img"></div>
                        <h4>Categoria</h4>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                    </div>

                    <div className="cardapio-single">
                        <div style={{backgroundImage:"url("+Img5+")"}} className="cardapio-img"></div>
                        <h4>Categoria</h4>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                    </div>

                    <div className="cardapio-single">
                        <div style={{backgroundImage:"url("+Img6+")"}} className="cardapio-img"></div>
                        <h4>Categoria</h4>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                        <p>Opção</p>
                    </div>
                </div>
            </div>
            <div className="tic-tic-bottom tic-tic"></div>
        </section>
    )
}