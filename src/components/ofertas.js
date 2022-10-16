import BannerImage from '../static/images/pexels-timur-saglambilek.jpg';
import Img1 from '../static/images/pexels-cats-coming.jpg';
import Img2 from '../static/images/pexels-ella-olsson.jpg';
import Img3 from '../static/images/pexels-min-an.jpg';
import Img4 from '../static/images/pexels-kasumi-loffler.jpg';
export default function Ofertas(){
    return(
        <section id="ofertas" className="ofertas fixed" style={{backgroundImage:"url("+BannerImage+")"}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="header-session">
                    <h1>Ofertas do dia</h1>
                    <h2>Nulla quam dolor, semper eu nulla quis, laoreet interdum nisi.</h2>
                    <div className="border"></div>             
                </div>
                <div className="ofertas-wrap">
                    <div className="ofertas-single">
                        <div style={{backgroundImage:"url("+Img1+")"}} className="ofertas-img"></div>
                        <div className="ofertas-info">
                            <h4>Lorem ipsum dolor</h4>
                            <p>ultricies non magna. Maecenas egestas vel augue eu cursus. In vel eros at lorem ultricies ultricies at id neque.</p>
                        </div>
                    </div>

                    <div className="ofertas-single">
                        <div style={{backgroundImage:"url("+Img2+")"}} className="ofertas-img"></div>
                        <div className="ofertas-info">
                            <h4>Lorem ipsum dolor</h4>
                            <p> Maecenas egestas vel augue eu cursus. In vel eros at lorem ultricies ultricies at id neque.</p>
                        </div>
                    </div>
                    <div className="ofertas-single">
                        <div style={{backgroundImage:"url("+Img3+")"}} className="ofertas-img"></div>
                        <div className="ofertas-info">
                            <h4>Lorem ipsum dolor</h4>
                            <p>ultricies non magna. Maecenas egestas vel augue eu cursus. In vel eros at lorem ultricies ultricies at id neque.</p>
                        </div>
                    </div>

                    <div className="ofertas-single">
                        <div style={{backgroundImage:"url("+Img4+")"}} className="ofertas-img"></div>
                        <div className="ofertas-info">
                            <h4>Lorem ipsum dolor</h4>
                            <p> Maecenas egestas vel augue eu cursus. In vel eros at lorem ultricies ultricies at id neque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}