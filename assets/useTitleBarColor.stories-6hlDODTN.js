import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{i as n,n as r,r as i,t as a}from"./Provider-AOeZWj-8.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Icon-BO1W1Vex.js";import{n as l,t as u}from"./Box-BzM0fJam.js";import{n as d,t as f}from"./Button-BZXNPMdH.js";import{n as p,t as m}from"./Dialog-BxsawYyH.js";function h(){let[e,t]=(0,_.useState)(()=>{let e=document.querySelector(`meta[name=theme-color]`);return e?e.getAttribute(`content`)??`#ffffff`:`#ffffff`});(0,_.useEffect)(()=>{let e=document.querySelector(`meta[name=theme-color]`);if(!e)return;let n=new MutationObserver(()=>{let n=e.getAttribute(`content`);n&&t(n)});return n.observe(e,{attributes:!0,attributeFilter:[`content`]}),()=>{n.disconnect()}},[]);let n=new Date().toLocaleTimeString();return(0,v.jsxs)(u,{justify:`between`,items:`center`,p:`md`,style:{backgroundColor:e},children:[(0,v.jsx)(`div`,{children:n}),(0,v.jsx)(u,{gap:!0,items:`center`,children:(0,v.jsx)(c,{name:`globe`})})]})}function g(){return n(`--m-accent-light`),null}var _,v,y,b,x;function S(){return(S=e((()=>{_=t(),l(),d(),p(),s(),r(),i(),v=o(),y={title:`Hooks/useTitleBarColor`,argTypes:{},parameters:{controls:{expanded:!0}}},b={render(){return(0,v.jsx)(a,{children:(0,v.jsxs)(u,{col:!0,border:!0,surface:!0,style:{aspectRatio:`9/16`,overflow:`hidden`},children:[(0,v.jsx)(h,{}),(0,v.jsx)(u,{p:`md`,children:(0,v.jsx)(`p`,{children:`This is a mock title bar that changes its background color based on the meta tag in the document head.`})}),(0,v.jsxs)(m,{children:[(0,v.jsx)(m.Trigger,{render:(0,v.jsx)(f,{}),children:`Override`}),(0,v.jsxs)(m.Content,{children:[(0,v.jsx)(m.Title,{children:`Overriding color`}),(0,v.jsx)(m.Description,{children:`The title bar color is overridden while this dialog is open.`}),(0,v.jsx)(g,{}),(0,v.jsx)(m.Actions,{children:(0,v.jsx)(m.Close,{})})]})]})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render() {
    return <Provider>
                <Box col border surface style={{
        aspectRatio: '9/16',
        overflow: 'hidden'
      }}>
                    <MockTitleBar />
                    <Box p="md">
                        <p>
                            This is a mock title bar that changes its background color based
                            on the meta tag in the document head.
                        </p>
                    </Box>
                    <Dialog>
                        <Dialog.Trigger render={<Button />}>Override</Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Title>Overriding color</Dialog.Title>
                            <Dialog.Description>
                                The title bar color is overridden while this dialog is open.
                            </Dialog.Description>
                            <Overrider />
                            <Dialog.Actions>
                                <Dialog.Close />
                            </Dialog.Actions>
                        </Dialog.Content>
                    </Dialog>
                </Box>
            </Provider>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`]})))()}S();export{b as Default,x as __namedExportsOrder,y as default};