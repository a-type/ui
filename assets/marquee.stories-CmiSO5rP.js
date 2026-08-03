import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{n,t as r}from"./clsx-BB58Nicv.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./withClassName-DUmtc2WC.js";import{n as s,t as c}from"./SlotDiv-DbVwVLj9.js";var l,u,d,f;function p(){return(p=e((()=>{l=`_root_1bwdh_1`,u=`_inner_1bwdh_8`,d=`_item_1bwdh_20`,f={root:l,inner:u,item:d}})))()}function m({className:e,children:t,timeout:n=5e3,...i}){let[a,o]=(0,h.useState)(0),s=`${a*-100}%`,c=h.Children.count(t);return(0,h.useEffect)(()=>{let e=setTimeout(()=>{o((a+1)%c)},n);return()=>clearTimeout(e)},[a,c,n]),(0,g.jsx)(`div`,{className:r(f.root,e),...i,children:(0,g.jsx)(`div`,{className:r(f.inner),style:{transform:`translateX(${s})`},children:t})})}var h,g;function _(){return(_=e((()=>{n(),h=t(),o(),s(),p(),g=i(),m.Item=a(c,f.item),m.__docgenInfo={description:``,methods:[],displayName:`Marquee`,props:{timeout:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5000`,computed:!1}}},composes:[`ComponentProps`]}})))()}var v,y,b,x;function S(){return(S=e((()=>{_(),v=i(),y={title:`Components/Marquee`,component:m,argTypes:{},parameters:{controls:{expanded:!0}}},b={render(e){return(0,v.jsxs)(m,{style:{height:200},...e,children:[(0,v.jsx)(m.Item,{children:(0,v.jsx)(`img`,{src:`https://resources.biscuits.club/images/pashka.jpg`})}),(0,v.jsx)(m.Item,{className:`bg-primary-wash color-main-heavy text-primary`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Hello, world`}),(0,v.jsx)(m.Item,{render:(0,v.jsx)(`img`,{src:`https://resources.biscuits.club/images/pashka.jpg`})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`]})))()}S();export{b as Default,x as __namedExportsOrder,y as default};