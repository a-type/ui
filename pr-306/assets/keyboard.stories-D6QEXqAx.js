import{dD as o,j as e}from"./iframe-5VeFnoCW.js";import{P as a,a as s}from"./PageContent-CYOP-5de.js";import{T as i}from"./TextArea-BIZ2Y9mn.js";import{P as l}from"./PageNowPlaying-JYiiPldf.js";import{I as r}from"./Input-DOaNHhHL.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./useSize-DYXxJwTc.js";import"./timing-C8g-0Emv.js";import"./Input.module-C9Yg6vyE.js";const v={title:"Virtual Keyboard Test",argTypes:{},parameters:{controls:{expanded:!1},layout:"fullscreen"}},t={render(n){return o("overlay"),e.jsx(a,{id:"root",children:e.jsxs(s,{children:[e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{className:"flex-grow",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"var(--m-sp-lg)"},children:"Focus the inputs below to see how the virtual keyboard behavior works."}),e.jsx(r,{style:{width:"100%"}}),e.jsx(i,{style:{width:"100%"}})]}),e.jsx(l,{keepAboveKeyboard:!0,children:e.jsx(r,{placeholder:"now playing"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,v as default};
