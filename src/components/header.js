import { useEffect, useState } from "react";
import {CgMenu} from 'react-icons/cg';
import Drows from './drows.js';
import Logo from '../static/images/logo.png';

export default function Header(){
    const [isOpen,setIsOpen] = useState(false);
    const openMenu = ()=>{
        let menu = document.querySelector("ul.menu");
        if(!isOpen) {
            menu.style.height = 54 * 4 - 1+'px';
            menu.style.top = '55px';
            setIsOpen(true);
        }else{
            menu.style.height = '0px';
            setTimeout(()=>{menu.style.top = '54px'},300)
            
            setIsOpen(false);
        }
      }

    const addTIcTic = ()=>{
            var janela = document.documentElement.offsetWidth + 40;
            let tic = document.querySelectorAll('.tic-tic');
            let pixels = "";
            for(let i=0; i<janela / 20; i++){
                pixels +="<pixel></pixel>"
            }   
            for(let i = 0;i < tic.length;i++){
                tic[i].parentNode.style.position = "relative";
                tic[i].innerHTML = pixels;
            }
    }

    const drowLogo = (time = 45)=>{
        var canvas = document.getElementById('drow-logo');
        if(canvas.getContext){
            var ctx = canvas.getContext('2d');
            ctx.save();
            ctx.clearRect(0,0,canvas.width,canvas.height); // clear canvas
            var lineCap = ['butt', 'round', 'square'];
            var x = time;
            var y = 34;
            var c = 20;
            ctx.lineCap = lineCap[1];
            
            Drows.Tampa(ctx,x,y,c,2,5);
            Drows.Bandeija(ctx,x,y,c,2.5);
            Drows.Sombra(ctx,x,y,2.5,time);
            
            Drows.Mao(ctx,x,y,2);
        }
    }

    const showSession = ()=>{
        var menu = {'historia':0,'cardapio':1,'ofertas':3,'midias':4}
        
        window.addEventListener("scroll",()=>{
            var els = document.querySelectorAll('section');
            var alturaJanela = document.documentElement.offsetHeight;
            var alturaScroll = window.pageYOffset;
            for(let i = 0;i <els.length;i++){
                var alturaDiv = els[i].offsetHeight;
                var distanciaTopo = els[i].offsetTop;
                if(parseInt(alturaScroll) >= distanciaTopo + - 150 && parseInt(alturaScroll) < (distanciaTopo + alturaDiv - 150)){
                    let el = document.querySelectorAll('header ul li')[menu[els[i].id]];
                    if(el)
                        el.style.backgroundColor = "#DDBC48";
                }else{
                    let el = document.querySelectorAll('header ul li')[menu[els[i].id]];
                    if(el)
                        el.style.backgroundColor = "unset";
                }
            }
        })
    }

    const autoScroll = (to)=>{
        openMenu();
        let timer = setInterval(()=>{
          let el = document.getElementById(to); 
          if(el !== undefined && el){
            // body.scrollTop = body.scrollTop + 1;
            window.scrollTo(0,el.offsetTop - 50);
            clearInterval(timer);
          }
        })
      }


    useEffect(()=>{
        addTIcTic();
        // var time = 150;
        // var timer = setInterval(()=>{
        //     drowLogo(time)
        //     time--;
        //     if(time < 45){
        //         clearInterval(timer);
        //     }
        // },5);
        showSession();
        window.addEventListener('resize',()=>{addTIcTic();})
    },[])
    
    return(
        <header>
            <div className="container">
                <nav>
                <div className="menu-ico"><CgMenu onClick={()=>openMenu()}/></div>
                <div className="logo-mobile"> <li className="logo"><a title="Jantuscara" href="/"><img src={Logo} alt="logo" /></a></li></div>
                    <ul className="menu">
                        <li onClick={()=>autoScroll('historia')} >História</li>
                        <li onClick={()=>autoScroll('cardapio')}>Cardápio</li>
                        <li className="logo-placeholder" ></li>
                        <li onClick={()=>autoScroll('ofertas')}>Ofertas</li>
                        <li onClick={()=>autoScroll('midias')}>Mídias</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}