import BannerImage from '../static/images/pexels-eiliv-aceron.jpg';
export default function Banner(){
    return(
        <section className="banner" style={{backgroundImage:"url("+BannerImage+")"}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="banner-chamada">
                    <h1>Jantuscara</h1>
                    <h2>Seu gosto é atendido aqui!</h2>
                </div>
            </div>
        </section>
    )
}