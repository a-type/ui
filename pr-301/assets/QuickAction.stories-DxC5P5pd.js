import{r as i,j as e,cJ as j,cK as y,cL as N,c as m,cM as A,b as I,I as P,B as b}from"./iframe-BTd0T825.js";import{A as v}from"./Autocomplete-Cr188jCx.js";import{P as f,a as B}from"./PageContent-BzT5Q2Gu.js";import{P as C}from"./PageNowPlaying-CMM-kcWp.js";import{P as k,f as Q,a as w,c as R,d as T}from"./NavBar-OD3Iqlzs.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Chip-BWrs9VDD.js";import"./Combobox-BWdU9Xcg.js";import"./Input-Cq4moBCf.js";import"./Input.module-C9Yg6vyE.js";import"./stringifyLocale-BMPUsiav.js";import"./useRegisteredLabelId-D_dWLzUA.js";import"./useSize-qmGftaZ1.js";import"./timing-C8g-0Emv.js";const _="_trigger_m8onw_1",D="_popup_m8onw_8",u={trigger:_,popup:D},p=i.createContext("qab"),x=({children:t,...r})=>{const o=i.useId();return e.jsx(j,{...r,children:e.jsx(p.Provider,{value:o.replace(/:/g,""),children:t})})},G=({className:t,emphasis:r="primary",children:o,ref:c,...n})=>{const l=i.useContext(p);return e.jsx(A,{...n,ref:c,render:({color:g,...h})=>e.jsx(I,{color:n.color,emphasis:r,...h,className:m(u.trigger,t),style:{anchorName:`--${l}`}}),children:o})},E=({children:t,className:r,align:o="center",ref:c,style:n,...l})=>{const g=i.useContext(p);return e.jsx(y,{children:e.jsx(N,{ref:c,className:m(u.popup,r),"data-align":o,style:{positionAnchor:`--${g}`,...n},...l,children:t})})},d=Object.assign(x,{Trigger:G,Content:E});x.__docgenInfo={description:"",methods:[],displayName:"QuickActionRoot",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ee={title:"Components/QuickAction",argTypes:{align:{control:"select",options:["center","start","end"],description:"Alignment of the QuickAction content relative to the trigger.",defaultValue:"center"}},parameters:{controls:{expanded:!0}}},L=[{category:"Fruits",items:[{id:"apple",label:"Apple"},{id:"banana",label:"Banana"},{id:"cherry",label:"Cherry"}]},{category:"Berries",items:[{id:"strawberry",label:"Strawberry"},{id:"blueberry",label:"Blueberry"},{id:"raspberry",label:"Raspberry"}]}],a=v.createGrouped(),q=()=>e.jsx(a,{items:L,children:e.jsxs(b,{p:!0,col:!0,children:[e.jsx(a.List,{children:t=>e.jsxs(a.Group,{children:[e.jsx(a.GroupLabel,{children:t.category}),e.jsx(a.GroupList,{children:t.items.map(r=>e.jsx(a.Item,{value:r.id,children:r.label},r.id))})]},t.category)}),e.jsx(a.Empty,{children:"No results found."}),e.jsx(a.Input,{disableCaret:!0,style:{width:"100%"}})]})}),s={render(t){return e.jsxs(f,{children:[e.jsx(B,{children:e.jsx(C,{className:m({"items-center":t.align==="center","items-start":t.align==="start","items-end":t.align==="end"}),style:{display:"flex",flexDirection:"column"},children:e.jsxs(d,{...t,children:[e.jsx(d.Trigger,{children:e.jsx(P,{name:"plus"})}),e.jsx(d.Content,{style:{width:"95vw"},align:t.align,children:e.jsx(q,{})})]})})}),e.jsx(k,{children:e.jsx(Q,{children:e.jsxs(w,{children:[e.jsx(R,{name:"home"}),e.jsx(T,{children:"Home"})]})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <PageRoot>
                <PageContent>
                    <PageNowPlaying className={clsx({
          'items-center': args.align === 'center',
          'items-start': args.align === 'start',
          'items-end': args.align === 'end'
        })} style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
                        <QuickAction {...args}>
                            <QuickAction.Trigger>
                                <Icon name="plus" />
                            </QuickAction.Trigger>
                            <QuickAction.Content style={{
              width: '95vw'
            }} align={args.align}>
                                <ActionContent />
                            </QuickAction.Content>
                        </QuickAction>
                    </PageNowPlaying>
                </PageContent>
                <PageNav>
                    <NavBar>
                        <NavBarItem>
                            <NavBarItemIcon name="home" />
                            <NavBarItemText>Home</NavBarItemText>
                        </NavBarItem>
                    </NavBar>
                </PageNav>
            </PageRoot>;
  }
}`,...s.parameters?.docs?.source}}};const te=["Default"];export{s as Default,te as __namedExportsOrder,ee as default};
