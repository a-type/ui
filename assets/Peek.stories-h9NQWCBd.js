import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{n,t as r}from"./clsx-Ym2CzL_v.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Box-AeM6K2f6.js";import{c as s,o as c}from"./typography-b4KulWiu.js";import{t as l}from"./esm-BBhMkq6t.js";import{t as u}from"./timing-Nj6dr5vr.js";import{n as d,t as f}from"./useSize-ySpQMGLX.js";function p(e=!1){let[t,n]=(0,m.useState)(e);return[t,(0,m.useCallback)(()=>n(e=>!e),[])]}var m;function h(){return(h=e((()=>{m=t()})))()}var g,_,v,y,b;function x(){return(x=e((()=>{g=`_root_1mqet_21`,_=`_peekClose_1mqet_1`,v=`_peekOpen_1mqet_1`,y=`_trigger_1mqet_44`,b={root:g,peekClose:_,peekOpen:v,trigger:y}})))()}function S({peekHeight:e=120,children:t,className:n}){let i=(0,C.useRef)(null),[a,o]=(0,C.useState)(!1),s=d((0,C.useMemo)(()=>u(({height:t})=>{o(t>e),i.current&&i.current.style.setProperty(`--collapsible-height`,`${t}px`)},300),[])),[c,l]=p(!1),f=(0,C.useRef)(!1),m=()=>{f.current=!0,l()};(0,C.useLayoutEffect)(()=>{i.current&&i.current.style.setProperty(`--peek-height`,`${e}px`)},[e]);let h=(0,C.useId)();return(0,w.jsxs)(`div`,{className:r(b.root,n),ref:i,"data-state":a&&c?`open`:`closed`,"data-has-interacted":f.current?!0:void 0,style:{"--peek-height":`${e}px`,"--collapsible-height":`0px`},children:[(0,w.jsx)(`div`,{ref:s,id:h,children:t}),a&&(0,w.jsx)(`button`,{"data-state":c?`open`:`closed`,className:b.trigger,onClick:m,"aria-label":`Toggle show description`,"aria-expanded":c,"aria-controls":h})]})}var C,w;function T(){return(T=e((()=>{l(),n(),C=t(),f(),h(),x(),w=i(),S.__docgenInfo={description:``,methods:[],displayName:`Peek`,props:{peekHeight:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`120`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{a(),s(),T(),E=i(),D={title:`Components/Peek`,component:S,argTypes:{},parameters:{controls:{expanded:!0}}},O={render(e){return(0,E.jsx)(S,{...e,children:(0,E.jsxs)(o,{col:!0,children:[(0,E.jsx)(c,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,E.jsx)(c,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,E.jsx)(c,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})]})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`]})))()}A();export{O as Default,k as __namedExportsOrder,D as default};