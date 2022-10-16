import BannerImage from '../static/images/pexels-yente-van-eynde.jpg';
import Img1 from '../static/images/pexels-brett-jordan.jpg';
import Img2 from '../static/images/pexels-galileo-giglio.jpg';
import Img3 from '../static/images/pexels-horizon-content.jpg';
import Img4 from '../static/images/pexels-horizon.jpg';
import Img5 from '../static/images/pexels-kampus-production.jpg';
import Img6 from '../static/images/pexels-polina-tankilevitch.jpg';
export default function Social(){
    return(
        <section id="midias" className="social fixed" style={{backgroundImage:"url("+BannerImage+")"}}>
            <div className="overlay"></div>
            <div className="container">
                    <h2>Siga-nos no instagram</h2>
                <div className="social-imgs">
                    <div style={{backgroundImage:"url("+Img1+")"}} className="social-img-single"></div>
                    <div style={{backgroundImage:"url("+Img2+")"}} className="social-img-single"></div>
                    <div style={{backgroundImage:"url("+Img3+")"}} className="social-img-single"></div>
                    <div style={{backgroundImage:"url("+Img4+")"}} className="social-img-single"></div>
                    <div style={{backgroundImage:"url("+Img5+")"}} className="social-img-single"></div>
                    <div style={{backgroundImage:"url("+Img6+")"}} className="social-img-single"></div>
                </div>
            </div>
        </section>
    )
}