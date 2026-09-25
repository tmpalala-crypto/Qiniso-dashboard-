// QINISO LOGO HOTLINK PROTECTION - BLOCK HACKERS USING YOUR LOGO ON THEIR SITE!
(function(){
  let allowed = ["tmpalala-crypto.github.io", "qiniso-mark-v4.firebaseapp.com", "localhost"];
  let ref = document.referrer;
  let host = window.location.hostname;
  
  // Check if someone embeds your logo on their site
  if(ref && !allowed.some(a => ref.includes(a) || host.includes(a))){
    console.warn("🚨 HOTLINK BLOCKED! Logo stolen!");
    // Replace logo with warning
    setTimeout(()=>{
      document.querySelectorAll('img[src*="logo2.png"]').forEach(img=>{
        img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%230f1e3d'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23d4af37' font-family='Arial' font-weight='bold' font-size='14'%3E🔒 QINISO%0AProtected%0ASAPS 2024/4410%3C/text%3E%3C/svg%3E";
      });
    },100);
  }
  
  // Add invisible watermark to logo canvas
  document.addEventListener('DOMContentLoaded', ()=>{
    let img = document.querySelector('img[src*="logo2.png"]');
    if(img){
      img.crossOrigin = "anonymous";
      img.onload = function(){
        try{
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          canvas.width = this.width; canvas.height = this.height;
          ctx.drawImage(this,0,0);
          ctx.fillStyle = "rgba(212,175,55,0.05)";
          ctx.font = "8px Arial"; ctx.fillText("QINISO SAPS 2024/4410",5,10);
          this.dataset.watermarked = "true";
        }catch(e){}
      }
    }
  });
})();
