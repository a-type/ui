import{r as t,j as i,c as v,B as h,P as l}from"./iframe-b29PHh9x.js";import{d as P}from"./timing-C8g-0Emv.js";import{a as y}from"./useSize-DgiSQyKV.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";function j(e=!1){const[r,u]=t.useState(e),o=t.useCallback(()=>u(a=>!a),[]);return[r,o]}const E="_root_1mqet_21",S="_trigger_1mqet_44",f={root:E,trigger:S};function c({peekHeight:e=120,children:r,className:u}){const o=t.useRef(null),[a,g]=t.useState(!1),x=y(t.useMemo(()=>P(({height:p})=>{g(p>e),o.current&&o.current.style.setProperty("--collapsible-height",`${p}px`)},300),[])),[s,q]=j(!1),d=t.useRef(!1),b=()=>{d.current=!0,q()};t.useLayoutEffect(()=>{o.current&&o.current.style.setProperty("--peek-height",`${e}px`)},[e]);const m=t.useId();return i.jsxs("div",{className:v(f.root,u),ref:o,"data-state":a&&s?"open":"closed","data-has-interacted":d.current?!0:void 0,style:{"--peek-height":`${e}px`,"--collapsible-height":"0px"},children:[i.jsx("div",{ref:x,id:m,children:r}),a&&i.jsx("button",{"data-state":s?"open":"closed",className:f.trigger,onClick:b,"aria-label":"Toggle show description","aria-expanded":s,"aria-controls":m})]})}c.__docgenInfo={description:"",methods:[],displayName:"Peek",props:{peekHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Peek",component:c,argTypes:{},parameters:{controls:{expanded:!0}}},n={render(e){return i.jsx(c,{...e,children:i.jsxs(h,{col:!0,children:[i.jsx(l,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i.jsx(l,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i.jsx(l,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Peek {...args}>
                <Box col>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </P>
                </Box>
            </Peek>;
  }
}`,...n.parameters?.docs?.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,R as default};
