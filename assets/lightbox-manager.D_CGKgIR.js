import{r as i,j as e}from"./NotFound.BHv136wl.js";function K({isOpen:d,images:l,currentIndex:m,onClose:u,onNext:g,onPrevious:r,preferredHeight:c}){i.useEffect(()=>(d?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[d]);const n=i.useRef(null),M=i.useRef(null),L=i.useRef(null),f=i.useRef(null),v=i.useRef(null),[t,w]=i.useState({headerBottom:0,viewportTop:0,viewportBottom:0,footerTop:0,gapHV:0,gapVF:0}),s=i.useCallback(a=>{if(d)switch(a.key){case"Escape":u();break;case"ArrowLeft":r();break;case"ArrowRight":g();break}},[d,u,g,r]);if(i.useEffect(()=>(document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)),[s]),i.useEffect(()=>{function a(){const h=L.current,p=f.current,V=v.current,j=p?p.querySelector("img"):null;if(!h||!p||!n.current||!j)return;const k=h.getBoundingClientRect(),D=V?V.getBoundingClientRect():{top:window.innerHeight},S=k.height||0,A=D.height||0,W=40,R=15,H=Math.max(40,window.innerWidth-W*2),T=Math.max(40,window.innerHeight-S-A-R*2),I=0,$=0,B=j.naturalWidth||j.width||H,z=j.naturalHeight||j.height||T,F=Math.max(40,H-$),G=c&&typeof c=="number"?Math.min(T-I,c):Math.max(40,T-I);let E=Math.min(F/B,G/z);E=Math.max(.1,Math.min(E,2)),E=Math.round(E*100)/100;const q=Math.round(B*E),O=Math.round(z*E),Z=q,_=O;p.style.width=Z+"px",p.style.height=_+"px";const y=p.getBoundingClientRect(),P=Math.max(R,Math.round(Math.max(0,y.top-k.bottom))),C=Math.max(R,Math.round(Math.max(0,D.top-y.bottom)));w({headerBottom:k.bottom,viewportTop:y.top,viewportBottom:y.bottom,footerTop:D.top,gapHV:P,gapVF:C}),n.current.style.setProperty("--dbg-header-bottom",`${k.bottom}px`),n.current.style.setProperty("--dbg-viewport-top",`${y.top}px`),n.current.style.setProperty("--dbg-viewport-bottom",`${y.bottom}px`),n.current.style.setProperty("--dbg-footer-top",`${D.top}px`),n.current.style.setProperty("--dbg-gap-hv",`${P}px`),n.current.style.setProperty("--dbg-gap-vf",`${C}px`)}const o=setTimeout(a,20);return window.addEventListener("resize",a),window.addEventListener("orientationchange",a),()=>{clearTimeout(o),window.removeEventListener("resize",a),window.removeEventListener("orientationchange",a)}},[m,l]),!d||!l.length)return null;const N=l[m],x=m===0,b=m===l.length-1;return e.jsxDEV("div",{className:"lb-overlay",role:"dialog","aria-modal":"true",ref:n,children:[e.jsxDEV("div",{className:"lb-spacer lb-spacer-top","aria-hidden":"true"},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:157,columnNumber:7},this),e.jsxDEV("div",{className:"lb-wrapper",ref:M,children:[e.jsxDEV("div",{className:"lb-header",ref:L,children:e.jsxDEV("button",{className:"lb-close-btn",onClick:u,"aria-label":"Close lightbox",children:e.jsxDEV("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxDEV("path",{d:"M5.31641 22.6206L13.9368 14.8828L5.31641 6.61135",stroke:"white",strokeWidth:"1.37012",strokeLinecap:"round"},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:168,columnNumber:15},this),e.jsxDEV("path",{d:"M22.9238 22.6206L14.3035 14.8828L22.9238 6.61135",stroke:"white",strokeWidth:"1.37012",strokeLinecap:"round"},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:169,columnNumber:15},this)]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:167,columnNumber:13},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:162,columnNumber:11},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:161,columnNumber:9},this),e.jsxDEV("div",{className:"lb-viewport",ref:f,children:e.jsxDEV("img",{src:N.src,alt:N.alt,className:"lb-image",onLoad:()=>{setTimeout(()=>window.dispatchEvent(new Event("resize")),20)}},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:176,columnNumber:11},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:175,columnNumber:9},this),l.length>1&&e.jsxDEV("div",{className:"lb-footer",ref:v,children:e.jsxDEV("div",{className:"lb-nav",children:[e.jsxDEV("button",{className:`lb-nav-btn lb-prev ${x?"disabled":""}`,onClick:r,"aria-label":"Previous image",disabled:x,children:e.jsxDEV("div",{className:"lb-nav-icon",children:e.jsxDEV("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",fill:x?"#A0A0A0":"white",children:e.jsxDEV("path",{d:"M0.731506 9.22168L9.083 0.809565L10.3604 2.07812L4.16206 8.3223H17.5V10.123H4.16206L10.3604 16.3662L9.083 17.6338L0.731506 9.22168Z"},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:197,columnNumber:21},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:196,columnNumber:19},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:195,columnNumber:17},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:189,columnNumber:15},this),e.jsxDEV("button",{className:`lb-nav-btn lb-next ${b?"disabled":""}`,onClick:g,"aria-label":"Next image",disabled:b,children:e.jsxDEV("div",{className:"lb-nav-icon",children:e.jsxDEV("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",fill:b?"#A0A0A0":"white",children:e.jsxDEV("path",{d:"M17.2685 8.77832L8.91699 17.1904L7.63965 15.9219L13.8379 9.6777H0.5V7.87695H13.8379L7.63965 1.63379L8.91699 0.366211L17.2685 8.77832Z"},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:211,columnNumber:21},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:210,columnNumber:19},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:209,columnNumber:17},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:203,columnNumber:15},this)]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:187,columnNumber:13},this)},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:186,columnNumber:11},this)]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:159,columnNumber:7},this),e.jsxDEV("div",{className:"lb-spacer lb-spacer-bottom","aria-hidden":"true"},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:220,columnNumber:7},this),e.jsxDEV("div",{className:"dbg-line dbg-vp-top","aria-hidden":"true",style:{top:t.viewportTop+"px"}},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:223,columnNumber:7},this),e.jsxDEV("div",{className:"dbg-line dbg-vp-bottom","aria-hidden":"true",style:{top:t.viewportBottom+"px"}},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:224,columnNumber:7},this),e.jsxDEV("div",{className:"dbg-label dbg-top-gap","aria-hidden":"true",style:{top:t.headerBottom+(t.viewportTop-t.headerBottom)/2+"px"},children:[t.gapHV,"px"]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:225,columnNumber:7},this),e.jsxDEV("div",{className:"dbg-label dbg-bottom-gap","aria-hidden":"true",style:{top:t.viewportBottom+(t.footerTop-t.viewportBottom)/2+"px"},children:[t.gapVF,"px"]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:226,columnNumber:7},this),e.jsxDEV("style",{children:`
        .lb-overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(124.88% 64.96% at 28.11% 31.66%, #515F66 0%, #3D3C3C 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 9999;
          min-height: 100vh;
          /* no outer horizontal padding; viewport controls internal margins */
          padding-left: 0;
          padding-right: 0;
        }

        /* Spacers that take remaining space above and below the wrapper.
           They split the free space (viewport minus wrapper height) in a 45/55 ratio.
        */
        .lb-spacer-top { flex: 0 1 calc(45% - 0px); min-height: 15px; }
        .lb-spacer-bottom { flex: 0 1 calc(55% - 0px); min-height: 15px; }

        .lb-wrapper {
          display: flex;
          width: 100%;
          /* Ensure at least 40px margin on both sides by clamping wrapper width */
          max-width: min(1080px, calc(100% - 80px));
          flex-direction: column;
          align-items: center;
          gap: 0;
          flex: 0 0 auto; /* don't stretch */
        }

        .lb-header {
          display: flex;
          height: 34px;
          width: 100%;
          max-width: 1080px;
          padding: 16px 0;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 15px; /* ensure 15px gap between close button and viewport */
        }

        .lb-close-btn {
          width: 28px;
          height: 28px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lb-close-btn:hover { opacity: 0.8; }

        /* Viewport box per design */
        .lb-viewport {
          display: flex;
          height: 606px;
          /* Define maximum content width; the viewport width will be the smaller of
             the content limit and the available viewport minus side gutters (80px).
             This ensures the viewport shrinks smoothly as the window narrows.
          */
          --lb-max-content: 900px;
          width: min(var(--lb-max-content), calc(100vw - 80px));
          /* Remove top/bottom padding so image touches viewport edges */
          padding-block: 0;
          padding-inline: 0;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: flex-start; /* align image to top of viewport */
          align-items: center;
          position: relative;
          transition: width 280ms cubic-bezier(.2,.8,.2,1), height 280ms cubic-bezier(.2,.8,.2,1);
        }

        .lb-image {
          width: auto;
          height: 100%;
          max-height: none;
          object-fit: contain;
          object-position: center top; /* keep aligned to top */
          display: block;
          transition: width 280ms cubic-bezier(.2,.8,.2,1), height 280ms cubic-bezier(.2,.8,.2,1), transform 280ms cubic-bezier(.2,.8,.2,1);
        }

        .lb-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .lb-footer {
          display: flex;
          padding: 0;
          margin: 0;
          margin-top: 15px; /* ensure 15px gap between viewport and lightbox navigation */
          margin-bottom: 0;
          flex-direction: column;
          align-items: flex-end; /* flush right */
          width: 100%;
        }

        .lb-nav {
          width: 106.666px;
          height: 49.844px;
          position: relative;
        }

        .lb-nav-btn {
          width: 50px;
          height: 50px;
          position: absolute;
          top: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .lb-prev { left: 0; }
        .lb-next { right: 0; }

        .lb-nav-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 50px;
          border-radius: 12.959px;
          background: #52574A;
          transition: background 0.2s ease, opacity 0.2s ease;
        }

        .lb-nav-btn:hover:before { background: #606654; }
        .lb-nav-btn.disabled { cursor: default; }
        .lb-nav-btn.disabled:before { opacity: 0.65; }

        .lb-nav-icon {
          position: relative;
          z-index: 1;
          width: 20px;
          height: 20px;
          margin: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lb-nav-icon svg { width: 17px; height: 17px; }

        /* Tablet breakpoint: reduce content max width so scaling begins at tablet size */
        @media (max-width: 1024px) {
          .lb-overlay { padding-left: 10px; padding-right: 10px; }
          .lb-viewport { --lb-max-content: 700px; }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .lb-overlay { padding-left: 20px; padding-right: 20px; }
          .lb-viewport { --lb-max-content: 520px; padding-block: 0; height: auto; min-height: 400px; }
          .lb-header { padding: 12px 0; }
          .lb-spacer-top, .lb-spacer-bottom { flex: 0 1 20px; }
        }

        @media (max-width: 480px) {
          .lb-overlay { padding-left: 10px; padding-right: 10px; }
          .lb-viewport { padding-block: 0; --lb-max-content: 360px; min-height: 300px; }
          .lb-spacer-top, .lb-spacer-bottom { flex: 0 1 12px; }
        }

        /* Debug helpers */
        .dbg-line { position: fixed; left: 40px; right: 40px; height: 2px; background: limegreen; opacity: 0.9; pointer-events: none; z-index: 10050; }
        .dbg-line.dbg-vp-top { border-top: 2px dashed limegreen; }
        .dbg-line.dbg-vp-bottom { border-top: 2px dashed limegreen; }
        .dbg-label { position: fixed; right: 8px; background: rgba(0,0,0,0.7); color: #b7ffb7; font-size: 12px; padding: 4px 6px; border-radius: 4px; z-index: 10051; pointer-events: none; }

      `},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:228,columnNumber:7},this)]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox.tsx",lineNumber:156,columnNumber:5},this)}function U(){const[d,l]=i.useState(!1),[m,u]=i.useState([]),[g,r]=i.useState(0),[c,n]=i.useState(void 0);return{isOpen:d,images:m,currentIndex:g,preferredHeight:c,openLightbox:(t,w=0,s)=>{u(t),r(Math.max(0,Math.min(w,Math.max(0,t.length-1)))),n(typeof s=="number"?s:void 0),l(!0)},closeLightbox:()=>{l(!1),r(0),n(void 0)},nextImage:()=>{r(t=>{const w=m.length-1;return Math.min(t+1,Math.max(0,w))})},previousImage:()=>{r(t=>Math.max(t-1,0))}}}function J({children:d,groups:l={}}){const{isOpen:m,images:u,currentIndex:g,preferredHeight:r,openLightbox:c,closeLightbox:n,nextImage:M,previousImage:L}=U();return i.useEffect(()=>{const f=v=>{const t=v.target;if(t.tagName!=="IMG")return;const s=Array.from(t.classList).find(o=>o.startsWith("lightbox-"));if(!s)return;v.preventDefault();const N=document.querySelectorAll(`.${s}`),x=[];let b=0;N.forEach((o,h)=>{const p=o,V=p.getAttribute("data-fullsrc")||p.src;x.push({src:V,alt:p.alt||""}),o===t&&(b=h)});let a;try{const o=N[0];if(o&&o.getBoundingClientRect){const h=o.getBoundingClientRect();h&&h.height>0&&(a=Math.round(h.height))}}catch{a=void 0}if(l[s]){const o=l[s];o.length===N.length?c(o,b,a):c(x,b,a)}else c(x,b,a)};return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[l,c]),e.jsxDEV(e.Fragment,{children:[d,e.jsxDEV(K,{isOpen:m,images:u,currentIndex:g,onClose:n,onNext:M,onPrevious:L,preferredHeight:r},void 0,!1,{fileName:"/app/code/client/components/ui/lightbox-manager.tsx",lineNumber:84,columnNumber:7},this)]},void 0,!0,{fileName:"/app/code/client/components/ui/lightbox-manager.tsx",lineNumber:82,columnNumber:5},this)}const Q={"lightbox-group1":[{src:"https://api.builder.io/api/v1/image/assets/TEMP/c778aa1eb4d7eb88677bd6e460f80016f0b44426?width=1540",alt:"Exclusions construct full 1"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/584b8bf11e0a3a262c58f834acb97b29281a2154?width=1532",alt:"Exclusions construct full 2"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/e7718dc5740a015c975647f534e587ae21c59bfb?width=1532",alt:"Exclusions construct full 3"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/8b79eaf30957df4e0c983fb442a0ce0de2ca4775?width=1539",alt:"Exclusions construct full 4"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/07e5274ca22a8efd2cf0650f9d3c86d4a7ab2b66?width=1527",alt:"Exclusions construct full 5"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/38d802309260e1b3be196f61057eac7111ad18fc?width=1467",alt:"Exclusions construct full 6"}]};export{Q as E,J as L};
