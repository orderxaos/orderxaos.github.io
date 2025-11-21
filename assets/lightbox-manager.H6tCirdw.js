import{r as i,j as e}from"./NotFound.BRbpnmFo.js";function K({isOpen:p,images:s,currentIndex:h,onClose:x,onNext:m,onPrevious:l,preferredHeight:d}){i.useEffect(()=>(p?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[p]);const n=i.useRef(null),k=i.useRef(null),j=i.useRef(null),f=i.useRef(null),v=i.useRef(null),[t,w]=i.useState({headerBottom:0,viewportTop:0,viewportBottom:0,footerTop:0,gapHV:0,gapVF:0}),r=i.useCallback(a=>{if(p)switch(a.key){case"Escape":x();break;case"ArrowLeft":l();break;case"ArrowRight":m();break}},[p,x,m,l]);if(i.useEffect(()=>(document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)),[r]),i.useEffect(()=>{function a(){const g=j.current,c=f.current,R=v.current,M=c?c.querySelector("img"):null;if(!g||!c||!n.current||!M)return;const N=g.getBoundingClientRect(),T=R?R.getBoundingClientRect():{top:window.innerHeight},V=N.height||0,W=T.height||0,$=40,H=15,B=Math.max(40,window.innerWidth-$*2),I=Math.max(40,window.innerHeight-V-W-H*2),z=0,D=0,P=M.naturalWidth||M.width||B,C=M.naturalHeight||M.height||I,F=Math.max(40,B-D),G=d&&typeof d=="number"?Math.min(I-z,d):Math.max(40,I-z);let L=Math.min(F/P,G/C);L=Math.max(.1,Math.min(L,2)),L=Math.round(L*100)/100;const q=Math.round(P*L),O=Math.round(C*L),Z=q,_=O;c.style.width=Z+"px",c.style.height=_+"px";const E=c.getBoundingClientRect(),S=Math.max(H,Math.round(Math.max(0,E.top-N.bottom))),A=Math.max(H,Math.round(Math.max(0,T.top-E.bottom)));w({headerBottom:N.bottom,viewportTop:E.top,viewportBottom:E.bottom,footerTop:T.top,gapHV:S,gapVF:A}),n.current.style.setProperty("--dbg-header-bottom",`${N.bottom}px`),n.current.style.setProperty("--dbg-viewport-top",`${E.top}px`),n.current.style.setProperty("--dbg-viewport-bottom",`${E.bottom}px`),n.current.style.setProperty("--dbg-footer-top",`${T.top}px`),n.current.style.setProperty("--dbg-gap-hv",`${S}px`),n.current.style.setProperty("--dbg-gap-vf",`${A}px`)}const o=setTimeout(a,20);return window.addEventListener("resize",a),window.addEventListener("orientationchange",a),()=>{clearTimeout(o),window.removeEventListener("resize",a),window.removeEventListener("orientationchange",a)}},[h,s]),!p||!s.length)return null;const y=s[h],u=h===0,b=h===s.length-1;return e.jsxs("div",{className:"lb-overlay",role:"dialog","aria-modal":"true",ref:n,children:[e.jsx("div",{className:"lb-spacer lb-spacer-top","aria-hidden":"true"}),e.jsxs("div",{className:"lb-wrapper",ref:k,children:[e.jsx("div",{className:"lb-header",ref:j,children:e.jsx("button",{className:"lb-close-btn",onClick:x,"aria-label":"Close lightbox",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M5.31641 22.6206L13.9368 14.8828L5.31641 6.61135",stroke:"white",strokeWidth:"1.37012",strokeLinecap:"round"}),e.jsx("path",{d:"M22.9238 22.6206L14.3035 14.8828L22.9238 6.61135",stroke:"white",strokeWidth:"1.37012",strokeLinecap:"round"})]})})}),e.jsx("div",{className:"lb-viewport",ref:f,children:e.jsx("img",{src:y.src,alt:y.alt,className:"lb-image",onLoad:()=>{setTimeout(()=>window.dispatchEvent(new Event("resize")),20)}})}),s.length>1&&e.jsx("div",{className:"lb-footer",ref:v,children:e.jsxs("div",{className:"lb-nav",children:[e.jsx("button",{className:`lb-nav-btn lb-prev ${u?"disabled":""}`,onClick:l,"aria-label":"Previous image",disabled:u,children:e.jsx("div",{className:"lb-nav-icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",fill:u?"#A0A0A0":"white",children:e.jsx("path",{d:"M0.731506 9.22168L9.083 0.809565L10.3604 2.07812L4.16206 8.3223H17.5V10.123H4.16206L10.3604 16.3662L9.083 17.6338L0.731506 9.22168Z"})})})}),e.jsx("button",{className:`lb-nav-btn lb-next ${b?"disabled":""}`,onClick:m,"aria-label":"Next image",disabled:b,children:e.jsx("div",{className:"lb-nav-icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",fill:b?"#A0A0A0":"white",children:e.jsx("path",{d:"M17.2685 8.77832L8.91699 17.1904L7.63965 15.9219L13.8379 9.6777H0.5V7.87695H13.8379L7.63965 1.63379L8.91699 0.366211L17.2685 8.77832Z"})})})})]})})]}),e.jsx("div",{className:"lb-spacer lb-spacer-bottom","aria-hidden":"true"}),e.jsx("div",{className:"dbg-line dbg-vp-top","aria-hidden":"true",style:{top:t.viewportTop+"px"}}),e.jsx("div",{className:"dbg-line dbg-vp-bottom","aria-hidden":"true",style:{top:t.viewportBottom+"px"}}),e.jsxs("div",{className:"dbg-label dbg-top-gap","aria-hidden":"true",style:{top:t.headerBottom+(t.viewportTop-t.headerBottom)/2+"px"},children:[t.gapHV,"px"]}),e.jsxs("div",{className:"dbg-label dbg-bottom-gap","aria-hidden":"true",style:{top:t.viewportBottom+(t.footerTop-t.viewportBottom)/2+"px"},children:[t.gapVF,"px"]}),e.jsx("style",{children:`
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

      `})]})}function U(){const[p,s]=i.useState(!1),[h,x]=i.useState([]),[m,l]=i.useState(0),[d,n]=i.useState(void 0);return{isOpen:p,images:h,currentIndex:m,preferredHeight:d,openLightbox:(t,w=0,r)=>{x(t),l(Math.max(0,Math.min(w,Math.max(0,t.length-1)))),n(typeof r=="number"?r:void 0),s(!0)},closeLightbox:()=>{s(!1),l(0),n(void 0)},nextImage:()=>{l(t=>{const w=h.length-1;return Math.min(t+1,Math.max(0,w))})},previousImage:()=>{l(t=>Math.max(t-1,0))}}}function J({children:p,groups:s={}}){const{isOpen:h,images:x,currentIndex:m,preferredHeight:l,openLightbox:d,closeLightbox:n,nextImage:k,previousImage:j}=U();return i.useEffect(()=>{const f=v=>{const t=v.target;if(t.tagName!=="IMG")return;const r=Array.from(t.classList).find(o=>o.startsWith("lightbox-"));if(!r)return;v.preventDefault();const y=document.querySelectorAll(`.${r}`),u=[];let b=0;y.forEach((o,g)=>{const c=o,R=c.getAttribute("data-fullsrc")||c.src;u.push({src:R,alt:c.alt||""}),o===t&&(b=g)});let a;try{const o=y[0];if(o&&o.getBoundingClientRect){const g=o.getBoundingClientRect();g&&g.height>0&&(a=Math.round(g.height))}}catch{a=void 0}if(s[r]){const o=s[r];o.length===y.length?d(o,b,a):d(u,b,a)}else d(u,b,a)};return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[s,d]),e.jsxs(e.Fragment,{children:[p,e.jsx(K,{isOpen:h,images:x,currentIndex:m,onClose:n,onNext:k,onPrevious:j,preferredHeight:l})]})}const Q={"lightbox-group1":[{src:"https://api.builder.io/api/v1/image/assets/TEMP/c778aa1eb4d7eb88677bd6e460f80016f0b44426?width=1540",alt:"Exclusions construct full 1"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/584b8bf11e0a3a262c58f834acb97b29281a2154?width=1532",alt:"Exclusions construct full 2"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/e7718dc5740a015c975647f534e587ae21c59bfb?width=1532",alt:"Exclusions construct full 3"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/8b79eaf30957df4e0c983fb442a0ce0de2ca4775?width=1539",alt:"Exclusions construct full 4"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/07e5274ca22a8efd2cf0650f9d3c86d4a7ab2b66?width=1527",alt:"Exclusions construct full 5"},{src:"https://api.builder.io/api/v1/image/assets/TEMP/38d802309260e1b3be196f61057eac7111ad18fc?width=1467",alt:"Exclusions construct full 6"}]};export{Q as E,J as L};
