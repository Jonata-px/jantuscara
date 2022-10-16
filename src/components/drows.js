export default class Drows{
    static A = 0;
    static pi = Math.PI;

    static Tampa = (ctx,x,y,c,lineWidth,s = true)=>{
            ctx.strokeStyle = '#DDBC48';
            ctx.beginPath();
            ctx.lineWidth = lineWidth;

                ctx.arc(x, y, c, this.A, this.pi, s);
                ctx.moveTo(x+c, y);
                ctx.stroke(); 
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(x-2.5,y-c);
                ctx.lineTo(x-2,y-c -3.5);
                ctx.lineTo(x+2,y-c -3.5);
                ctx.lineTo(x+2.5,y-c);
            
            ctx.stroke(); 
            ctx.closePath();
    }

    static Bandeija = (ctx,x,y,c,lineWidth)=>{
            ctx.strokeStyle = '#DDBC48';
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
                //topo
                ctx.moveTo(x - c -6,y + 5);
                ctx.lineTo(x + c + 6,y + 5);
                ///baixo
                ctx.moveTo(x + c + 2,y + 6);
                ctx.lineTo(x + c -2,y + 10);
                ctx.lineTo(x - c + 2,y + 10);
                ctx.lineTo(x - c -2,y + 6);

            ctx.stroke(); 
            ctx.closePath();
    }

    static Sombra = (ctx,x,y,lineWidth,time)=>{
        ctx.strokeStyle = '#DDBC48';
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
            ctx.save();
            ctx.translate(x,y)
            ctx.rotate((-time + 35) * Math.PI / 180);
            ctx.translate(-x,-y)
            ctx.moveTo(x+12,y-5);
            // ctx.quadraticCurveTo(x+10, y-14, x+ 3, y-14);
            ctx.arcTo(x+10, y-11, x, y-13, 10);
            ctx.restore();
        ctx.stroke(); 
        ctx.closePath();
    }

    static Mao = (ctx,x,y,lineWidth)=>{
        ctx.strokeStyle = '#DDBC48';
        ctx.beginPath();
        ctx.lineWidth = lineWidth;

            ctx.moveTo(x+11,y+10);
            ctx.quadraticCurveTo(x+5, y+21, x-8, y+10);
            ctx.lineTo(x-15, y+10);
            ctx.quadraticCurveTo(x-5, y+23, x+5, y+28);
            ctx.lineTo(x, y+32);
            ctx.lineTo(x+16, y+20);
            ctx.lineTo(x+23, y+28);
            ctx.moveTo(x+16, y+21);
            ctx.quadraticCurveTo(x+8, y+20, x+17, y+10);

        ctx.stroke(); 
        ctx.closePath();
    }
}