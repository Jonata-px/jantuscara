import {FaFacebook,FaYoutube} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
export default function Footer(){
    return(
        <footer>
            <div className="tic-tic-top tic-tic"></div>
            <div className="container">
                <small>© Copyright Jantuscara</small>
                <div className="footer-socials">
                    <a target="_blank" title="Facebook" href="http://facebook.com"><FaFacebook/></a>
                    <a target="_blank" title="Instagram" href="http://instagram.com"><AiFillInstagram /></a>
                    <a target="_blank" title="Yotube" href="https://www.youtube.com/"><FaYoutube/></a>
                </div>
            </div>
        </footer>
    )
}