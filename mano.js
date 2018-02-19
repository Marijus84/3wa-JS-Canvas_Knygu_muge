let i = 0;
let cnt = 0;
var a = "   Liespas";
var b = "skatuvkaiąulį";
var c = " itauatau";
var final = "pasaulį";
var skaitau = "skaitau";

function draw() {
  var canvas = document.getElementById('view');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 700, 700);
      ctx.fillStyle = '#1d1463';
      ctx.fillRect(0, 0, 700, 700);
      ctx.fillStyle = '#ffffff';
      ctx.font = '48px serif';
      i++;
      if (i == 1800) {
        i=2;
      }

      let text = ctx.measureText(a.substr(0,6));
      let text2 = ctx.measureText(b.substr(0,6));
      let text3 = ctx.measureText(c.substr(0,6));
      txt3 = a.substr(6,1).concat(b.substr(6,3));
      tau = c.substr(6,3);
      ctx.fillStyle = '#ffff01';
      if ((i<100) && (i > 1)) {
        ctx.fillStyle = '#ffffff';
        ctx.fillText(txt1=a.substr(0,6).concat(a.substr(7,3)), 20+2*i, 50);
        ctx.fillText(b, 20, 100);
        ctx.fillText(c, 20, 150);
        ctx.fillStyle = '#ffff01';
        ctx.fillText(b.substr(6,3), 20+text2.width, 100);
        ctx.fillText(c.substr(6,3), 20+text3.width, 150);
        ctx.fillText(a.substr(6,1), 20+text.width-i, 50);
        ctx.fillStyle = '#ed1b24';
        ctx.fillText(b.substr(0,3), 20, 100);
        ctx.fillText(c.substr(0,5), 20, 150);
      }
      else if ((i >= 100) && (i<150)) {
        ctx.fillText(a.substr(6,1), 20, 50);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(b.substr(0,6).concat(b.substr(9,4)), 20, 100);
        ctx.fillText(c, 20, 150);
        ctx.fillText(txt1, 220, 50);
        ctx.fillStyle = '#ffff01';
        ctx.fillText(b.substr(6,3), 20+text2.width, 200-i);
        ctx.fillText(c.substr(6,3), 20+text3.width, 150);
        ctx.fillStyle = '#ed1b24';
        ctx.fillText(b.substr(0,3), 20, 100);
        ctx.fillText(c.substr(0,5), 20, 150);
        }
          else {
            if ((i >= 150) && (i<=256)) {
              ctx.fillText(a.substr(6,1), 20, 50);
              ctx.fillStyle = '#ffffff';
              ctx.fillText(txt1, 220, 50);
              ctx.fillText(txt2=b.substr(0,6).concat(b.substr(9,4)), 20+(i-151)*1.6, 100);
              ctx.fillText(c, 20, 150);
              ctx.fillStyle = '#ffff01';
              ctx.fillText(b.substr(6,3), 20+text2.width-i+150, 50);
              ctx.fillText(c.substr(6,3), 20+text3.width, 150);
              ctx.fillStyle = '#ed1b24';
              ctx.fillText(b.substr(0,3), 20+(i-151)*1.6, 100);
              ctx.fillText(c.substr(0,5), 20, 150);
              }
              else if ((i >= 257) && (i<357)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(txt1, 220, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(c.substr(6,3), 20+text3.width, 407-i);
              }
              else if ((i >= 357) && (i<385)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(txt1, 220, 50);
                console.log(txt1.substr(6,3));
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(c.substr(6,3), 377+text3.width-i, 50);
              }
              else if ((i >= 385) && (i<555)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(b.substr(0,3), 573-i, 100);
                ctx.fillText(a.substr(0,6), (825-i)*0.5, 50);
                ctx.fillText(txt1.substr(6,3), (320+i)*0.454, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
                ctx.fillStyle = '#ed1b24';
                ctx.fillText(b.substr(0,3), 573-i, 100);
              }
              else if ((i >= 555) && (i<605)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(b.substr(0,3), 20, 100);
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 397, 50);
                ctx.fillText(txt2.substr(3,4), 252, 655-i);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
                ctx.fillStyle = '#ed1b24';
                ctx.fillText(b.substr(0,3), 20, 100);
              }
              else if ((i >= 605) && (i<675)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(b.substr(0,3), 20, 100);
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 397, 50);
                ctx.fillText(txt2.substr(3,4), (1865-i)*0.2, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
                ctx.fillStyle = '#ed1b24';
                ctx.fillText(b.substr(0,3), 20, 100);
              }
              else if ((i >= 675) && (i<810)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(b.substr(0,3), 20, 100);
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 397, 50);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
                ctx.fillStyle = '#ed1b24';
                ctx.fillText(b.substr(0,3), 20, 100);
              }
              else if ((i >= 810) && (i<860)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 397, 50+i-810);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
              }
              else if ((i >= 860) && (i<950)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 397+860-i, 100);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
              }
              else if ((i >= 950) && (i<1000)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 309, 100);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
              }
              else if ((i >= 1000) && (i<1075)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(txt1.substr(6,3), 309, 100);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
              }
              else if ((i >= 1075) && (i<1208)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(final, 309-i+1075, 100);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
              }
              else if ((i >= 1208) && (i<1300)) {
                ctx.fillStyle = '#ffffff';
                ctx.fillText(a.substr(0,6), 135, 50);
                ctx.fillText(final, 176, 100);
                ctx.fillText(txt2.substr(3,4), 238, 50);
                ctx.fillStyle = '#ffff01';
                ctx.fillText(txt3, 20, 50);
                ctx.fillText(tau, text3.width-8, 50);
              }
          }

        if (i == 1) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(a, 20, 50);
          ctx.fillText(b, 20, 100);
          ctx.fillText(c, 20, 150);
          ctx.fillStyle = '#ffff01';
          ctx.fillText(a.substr(6,1), 20+text.width, 50);
          ctx.fillText(b.substr(6,3), 20+text2.width, 100);
          ctx.fillText(c.substr(6,3), 20+text3.width, 150);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(b.substr(0,3), 20, 100);
          ctx.fillText(c.substr(0,5), 20, 150);
        }

        if ((i<=256)&& (i >150)) {
        }
        if ((i >= 256) && (i<385)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2, 188, 100);
          ctx.fillText(txt3=c.substr(0,6), 20, 150);
          ctx.fillStyle = '#ffff01';
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(b.substr(0,3), 188, 100);
          ctx.fillText(c.substr(0,5), 20, 150);
        }
        if ((i >= 385) && (i<=555)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(3,7), 252, 100);
          ctx.fillText(txt3=c.substr(0,6), (-361+i)*0.8, 150);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(txt3=c.substr(0,5), (-361+i)*0.8, 150);
        }
        if ((i<=605)&& (i >555)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), 335, 100);
          ctx.fillText(txt3=c.substr(5,1), 239, 150);
          ctx.fillText(txt3=c.substr(0,5), 155, 705-i);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(txt3=c.substr(0,5), 155, 705-i);
        }
        if ((i<=675)&& (i >605)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), 335, 100);
          ctx.fillText(c.substr(5,1), 239, 150);
          ctx.fillText(c.substr(0,5), 755-i, 100);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(c.substr(0,5), 755-i, 100);
        }
        if ((i<=810)&& (i >675)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), i+(-340), 100);
          ctx.fillText(c.substr(5,1), i+(-436), 150);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(skaitau, 20, 100);
        }
        if ((i<=860)&& (i >810)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), 470, 100);
          ctx.fillText(c.substr(5,1), 374, 150);
          ctx.fillStyle = '#ed1b24';
        ctx.fillText(skaitau, 20, 100);
        }
        if ((i<=950)&& (i >860)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), 470, 100);
          ctx.fillText(c.substr(5,1), 374, 150);
          ctx.fillStyle = '#ed1b24';
        ctx.fillText(skaitau, 20, 100);
        }
        if ((i<=1000)&& (i >950)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), 470, 100);
          ctx.fillText(c.substr(5,1), 374, 150-i+950);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(skaitau, 20, 100);
        }
        if ((i<=1075)&& (i >1000)) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(txt2.substr(7,3), 470-i+1000, 100);
          ctx.fillText(c.substr(5,1), 374, 100);
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(skaitau, 20, 100);
        }
        if ((i<=1300)&& (i >1075)) {
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(skaitau, 20, 100);
        }
        if ((i<=1500)&& (i >1300)) {
          ctx.fillStyle = '#ed1b24';
          ctx.fillText(skaitau, 20, 100);
        }

  }
  if (i>1) {
    window.requestAnimationFrame(draw);
  }
}

function stop () {
  i = 0;

}
