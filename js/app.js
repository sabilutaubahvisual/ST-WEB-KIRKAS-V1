const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navbar nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');nav.style.display=nav.classList.contains('open')?'flex':''});
const target=new Date(Date.now()+45*864e5+12*36e5+31*6e4+20e3);
setInterval(()=>{let n=Math.max(0,target-Date.now()),u=[864e5,36e5,6e4,1e3],k=['days','hours','minutes','seconds'];u.forEach((v,i)=>{let x=Math.floor(n/v);n%=v;document.getElementById(k[i]).textContent=String(x).padStart(2,'0')})},1000);

// Ripple feedback makes every important click feel immediate and tactile.
document.querySelectorAll('.btn,.live,.play,.heading>a,.event a,.gallery-grid a').forEach(el=>{
  el.addEventListener('click',event=>{
    const box=el.getBoundingClientRect(),ripple=document.createElement('span');
    const size=Math.max(box.width,box.height)*2;
    ripple.className='ripple';
    ripple.style.cssText=`width:${size}px;height:${size}px;left:${event.clientX-box.left-size/2}px;top:${event.clientY-box.top-size/2}px`;
    el.appendChild(ripple);setTimeout(()=>ripple.remove(),700);
  });
});

document.querySelectorAll('.event,.gallery figure').forEach(item=>{
  item.addEventListener('click',()=>{
    const group=item.matches('.event')?'.event':'.gallery figure';
    document.querySelectorAll(group).forEach(el=>el.classList.remove('is-selected'));
    item.classList.add('is-selected','click-flash');
    setTimeout(()=>item.classList.remove('click-flash'),550);
  });
});

document.querySelectorAll('.navbar nav a').forEach(link=>link.addEventListener('click',()=>{
  document.querySelectorAll('.navbar nav a').forEach(el=>el.classList.remove('active'));
  link.classList.add('active');
}));

const openingVideo=document.querySelector('.hero-video');
const soundButton=document.querySelector('.video-sound');
soundButton?.addEventListener('click',()=>{
  openingVideo.muted=!openingVideo.muted;
  soundButton.textContent=openingVideo.muted?'⌁':'♫';
  soundButton.setAttribute('aria-label',openingVideo.muted?'Nyalakan suara video':'Matikan suara video');
  soundButton.title=openingVideo.muted?'Nyalakan suara':'Matikan suara';
});
