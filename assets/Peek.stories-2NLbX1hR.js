import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./esm-BirwIsM6.js";import{t as r}from"./timing-BflZisQx.js";import{r as i,t as a}from"./useSize-B8uO3blk.js";import{n as o,t as s}from"./clsx-BB58Nicv.js";import{t as c}from"./jsx-runtime-BdxMnOeJ.js";import{n as l,t as u}from"./Box-CFmvJLRd.js";import{c as d,o as f}from"./typography-SS0vbNkf.js";function p(e=!1){let[t,n]=(0,m.useState)(e);return[t,(0,m.useCallback)(()=>n(e=>!e),[])]}var m;function h(){return(h=e((()=>{m=t()})))()}var g,_,v,y,b;function x(){return(x=e((()=>{g=`_root_1mqet_21`,_=`_peekClose_1mqet_1`,v=`_peekOpen_1mqet_1`,y=`_trigger_1mqet_44`,b={root:g,peekClose:_,peekOpen:v,trigger:y}})))()}function S({peekHeight:e=120,children:t,className:n}){let a=(0,C.useRef)(null),[o,c]=(0,C.useState)(!1),l=i((0,C.useMemo)(()=>r(({height:t})=>{c(t>e),a.current&&a.current.style.setProperty(`--collapsible-height`,`${t}px`)},300),[])),[u,d]=p(!1),f=(0,C.useRef)(!1),m=()=>{f.current=!0,d()};(0,C.useLayoutEffect)(()=>{a.current&&a.current.style.setProperty(`--peek-height`,`${e}px`)},[e]);let h=(0,C.useId)();return(0,w.jsxs)(`div`,{className:s(b.root,n),ref:a,"data-state":o&&u?`open`:`closed`,"data-has-interacted":f.current?!0:void 0,style:{"--peek-height":`${e}px`,"--collapsible-height":`0px`},children:[(0,w.jsx)(`div`,{ref:l,id:h,children:t}),o&&(0,w.jsx)(`button`,{"data-state":u?`open`:`closed`,className:b.trigger,onClick:m,"aria-label":`Toggle show description`,"aria-expanded":u,"aria-controls":h})]})}var C,w;function T(){return(T=e((()=>{n(),o(),C=t(),a(),h(),x(),w=c(),S.__docgenInfo={description:``,methods:[],displayName:`Peek`,props:{peekHeight:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`120`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{l(),d(),T(),E=c(),D={title:`Components/Peek`,component:S,argTypes:{},parameters:{controls:{expanded:!0}}},O={render(e){return(0,E.jsx)(S,{...e,children:(0,E.jsxs)(u,{col:!0,children:[(0,E.jsx)(f,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,E.jsx)(f,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,E.jsx)(f,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})]})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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