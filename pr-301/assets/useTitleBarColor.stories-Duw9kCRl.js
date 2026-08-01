import{j as e,k as u,B as i,D as r,b as m,r as a,I as g,d7 as h}from"./iframe-BTd0T825.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const D={title:"Hooks/useTitleBarColor",argTypes:{},parameters:{controls:{expanded:!0}}},o={render(){return e.jsx(u,{children:e.jsxs(i,{col:!0,border:!0,surface:!0,style:{aspectRatio:"9/16",overflow:"hidden"},children:[e.jsx(x,{}),e.jsx(i,{p:"md",children:e.jsx("p",{children:"This is a mock title bar that changes its background color based on the meta tag in the document head."})}),e.jsxs(r,{children:[e.jsx(r.Trigger,{render:e.jsx(m,{}),children:"Override"}),e.jsxs(r.Content,{children:[e.jsx(r.Title,{children:"Overriding color"}),e.jsx(r.Description,{children:"The title bar color is overridden while this dialog is open."}),e.jsx(p,{}),e.jsx(r.Actions,{children:e.jsx(r.Close,{})})]})]})]})})}};function x(){const[c,l]=a.useState(()=>{const t=document.querySelector("meta[name=theme-color]");return t?t.getAttribute("content")??"#ffffff":"#ffffff"});a.useEffect(()=>{const t=document.querySelector("meta[name=theme-color]");if(!t)return;const s=new MutationObserver(()=>{const n=t.getAttribute("content");n&&l(n)});return s.observe(t,{attributes:!0,attributeFilter:["content"]}),()=>{s.disconnect()}},[]);const d=new Date().toLocaleTimeString();return e.jsxs(i,{justify:"between",items:"center",p:"md",style:{backgroundColor:c},children:[e.jsx("div",{children:d}),e.jsx(i,{gap:!0,items:"center",children:e.jsx(g,{name:"globe"})})]})}function p(){return h("--m-accent-light"),null}o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const T=["Default"];export{o as Default,T as __namedExportsOrder,D as default};
