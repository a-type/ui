import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n}from"./Provider-DiTncs2n.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./Input-D3GMLuze.js";import{n as o,t as s}from"./TextArea-bxaEiXlE.js";import{i as c,n as l,r as u,t as d}from"./PageContent-DA-mxCBf.js";import{n as f,t as p}from"./PageNowPlaying-B5dWTEyQ.js";var m,h,g,_;function v(){return(v=e((()=>{i(),l(),f(),c(),o(),n(),m=r(),h={title:`Virtual Keyboard Test`,argTypes:{},parameters:{controls:{expanded:!1},layout:`fullscreen`}},g={render(e){return t(`overlay`),(0,m.jsx)(u,{id:`root`,children:(0,m.jsxs)(d,{children:[(0,m.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,m.jsx)(`div`,{className:`flex-grow`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`var(--m-sp-lg)`},children:`Focus the inputs below to see how the virtual keyboard behavior works.`}),(0,m.jsx)(a,{style:{width:`100%`}}),(0,m.jsx)(s,{style:{width:`100%`}})]}),(0,m.jsx)(p,{keepAboveKeyboard:!0,children:(0,m.jsx)(a,{placeholder:`now playing`})})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render(args) {
    useVirtualKeyboardBehavior('overlay');
    return <PageRoot id="root">
                <PageContent>
                    <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
                        <div className="flex-grow" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--m-sp-lg)'
          }}>
                            Focus the inputs below to see how the virtual keyboard behavior
                            works.
                        </div>
                        <Input style={{
            width: '100%'
          }} />
                        <TextArea style={{
            width: '100%'
          }} />
                    </div>
                    <PageNowPlaying keepAboveKeyboard>
                        <Input placeholder="now playing" />
                    </PageNowPlaying>
                </PageContent>
            </PageRoot>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`]})))()}v();export{g as Default,_ as __namedExportsOrder,h as default};