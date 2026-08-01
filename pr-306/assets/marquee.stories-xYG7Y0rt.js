import{r as o,j as e,c as u,w as g,q as x}from"./iframe-b29PHh9x.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const f="_root_1bwdh_1",y="_inner_1bwdh_8",j="_item_1bwdh_20",n={root:f,inner:y,item:j};function s({className:r,children:c,timeout:i=5e3,...l}){const[a,p]=o.useState(0),d=`${a*-100}%`,m=o.Children.count(c);return o.useEffect(()=>{const h=setTimeout(()=>{p((a+1)%m)},i);return()=>clearTimeout(h)},[a,m,i]),e.jsx("div",{className:u(n.root,r),...l,children:e.jsx("div",{className:u(n.inner),style:{transform:`translateX(${d})`},children:c})})}const I=g(x,n.item);s.Item=I;s.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{timeout:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}}},composes:["ComponentProps"]};const M={title:"Components/Marquee",component:s,argTypes:{},parameters:{controls:{expanded:!0}}},t={render(r){return e.jsxs(s,{style:{height:200},...r,children:[e.jsx(s.Item,{children:e.jsx("img",{src:"https://resources.biscuits.club/images/pashka.jpg"})}),e.jsx(s.Item,{className:"bg-primary-wash color-main-heavy text-primary",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Hello, world"}),e.jsx(s.Item,{render:e.jsx("img",{src:"https://resources.biscuits.club/images/pashka.jpg"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render(params) {
    return <Marquee style={{
      height: 200
    }} {...params}>
                <Marquee.Item>
                    <img src="https://resources.biscuits.club/images/pashka.jpg" />
                </Marquee.Item>
                <Marquee.Item className="bg-primary-wash color-main-heavy text-primary" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
                    Hello, world
                </Marquee.Item>
                <Marquee.Item render={<img src="https://resources.biscuits.club/images/pashka.jpg" />} />
            </Marquee>;
  }
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,M as default};
