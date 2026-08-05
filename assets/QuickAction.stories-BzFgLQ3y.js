import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{n,t as r}from"./clsx-BB58Nicv.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./Button-fKwnlsy8.js";import{c as s,i as c,n as l,r as u,s as d,t as f}from"./DialogRoot-w0DuIKXl.js";import{n as p,t as m}from"./DialogPopup-Bmt5zMqa.js";import{n as h,t as g}from"./Autocomplete-BcriYEEm.js";import{n as _,t as v}from"./Icon-CPvdzLAz.js";import{n as y,t as b}from"./Box-CFmvJLRd.js";import{i as x,n as S,r as C,t as w}from"./PageContent-DA-mxCBf.js";import{c as T,l as E,n as D,o as O,r as k,t as A,u as j}from"./NavBar-CV4Knfah.js";import{n as M,t as N}from"./PageNowPlaying-CfTYfh72.js";var P,F,I;function L(){return(L=e((()=>{P=`_trigger_m8onw_1`,F=`_popup_m8onw_8`,I={trigger:P,popup:F}})))()}var R,z,B,V,H,U,W;function G(){return(G=e((()=>{l(),c(),s(),p(),n(),R=t(),a(),L(),z=i(),B=(0,R.createContext)(`qab`),V=({children:e,...t})=>{let n=(0,R.useId)();return(0,z.jsx)(f,{...t,children:(0,z.jsx)(B.Provider,{value:n.replace(/:/g,``),children:e})})},H=({className:e,emphasis:t=`primary`,children:n,ref:i,...a})=>{let s=(0,R.useContext)(B);return(0,z.jsx)(u,{...a,ref:i,render:({color:n,...i})=>(0,z.jsx)(o,{color:a.color,emphasis:t,...i,className:r(I.trigger,e),style:{anchorName:`--${s}`}}),children:n})},U=({children:e,className:t,align:n=`center`,ref:i,style:a,...o})=>{let s=(0,R.useContext)(B);return(0,z.jsx)(d,{children:(0,z.jsx)(m,{ref:i,className:r(I.popup,t),"data-align":n,style:{positionAnchor:`--${s}`,...a},...o,children:e})})},W=Object.assign(V,{Trigger:H,Content:U}),V.__docgenInfo={description:``,methods:[],displayName:`QuickActionRoot`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{h(),n(),T(),j(),y(),_(),S(),M(),x(),G(),K=i(),q={title:`Components/QuickAction`,argTypes:{align:{control:`select`,options:[`center`,`start`,`end`],description:`Alignment of the QuickAction content relative to the trigger.`,defaultValue:`center`}},parameters:{controls:{expanded:!0}}},J=[{category:`Fruits`,items:[{id:`apple`,label:`Apple`},{id:`banana`,label:`Banana`},{id:`cherry`,label:`Cherry`}]},{category:`Berries`,items:[{id:`strawberry`,label:`Strawberry`},{id:`blueberry`,label:`Blueberry`},{id:`raspberry`,label:`Raspberry`}]}],Y=g.createGrouped(),X=()=>(0,K.jsx)(Y,{items:J,children:(0,K.jsxs)(b,{p:!0,col:!0,children:[(0,K.jsx)(Y.List,{children:e=>(0,K.jsxs)(Y.Group,{children:[(0,K.jsx)(Y.GroupLabel,{children:e.category}),(0,K.jsx)(Y.GroupList,{children:e.items.map(e=>(0,K.jsx)(Y.Item,{value:e.id,children:e.label},e.id))})]},e.category)}),(0,K.jsx)(Y.Empty,{children:`No results found.`}),(0,K.jsx)(Y.Input,{disableCaret:!0,style:{width:`100%`}})]})}),Z={render(e){return(0,K.jsxs)(C,{children:[(0,K.jsx)(w,{children:(0,K.jsx)(N,{className:r({"items-center":e.align===`center`,"items-start":e.align===`start`,"items-end":e.align===`end`}),style:{display:`flex`,flexDirection:`column`},children:(0,K.jsxs)(W,{...e,children:[(0,K.jsx)(W.Trigger,{children:(0,K.jsx)(v,{name:`plus`})}),(0,K.jsx)(W.Content,{style:{width:`95vw`},align:e.align,children:(0,K.jsx)(X,{})})]})})}),(0,K.jsx)(E,{children:(0,K.jsx)(A,{children:(0,K.jsxs)(D,{children:[(0,K.jsx)(k,{name:`home`}),(0,K.jsx)(O,{children:`Home`})]})})})]})}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`]})))()}$();export{Z as Default,Q as __namedExportsOrder,q as default};