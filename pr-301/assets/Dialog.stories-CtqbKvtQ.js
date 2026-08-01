import{D as t,j as e,i as D,d as l,b as r,e as i,f as a,B as b,g as s,h as c,r as S,k as f,l as n,m as O,H as P,P as j}from"./iframe-BTd0T825.js";import{I as v}from"./Input-Cq4moBCf.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Input.module-C9Yg6vyE.js";const w={title:"Components/Dialog",component:t,argTypes:{},parameters:{controls:{expanded:!0}}};function o(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(P,{children:"Some content"}),e.jsxs("div",{style:{maxHeight:"20vh",overflowY:"auto"},children:[e.jsx(j,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Nulla facil"}),e.jsx(j,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Nulla facil"}),e.jsx(j,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Nulla facil"})]}),e.jsx(r,{disabled:!0,color:"primary",children:"Click me"})]})}const d={args:{children:e.jsxs(D,{noPortal:!0,children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open"}),e.jsx(o,{}),e.jsxs(i,{children:[e.jsx(a,{children:"Hello world"}),e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{}),e.jsxs(b,{gap:!0,children:[e.jsx(v,{placeholder:"Type something..."}),e.jsx(r,{emphasis:"primary",children:"Submit"})]}),e.jsxs(s,{children:[e.jsx(c,{}),e.jsx(r,{emphasis:"primary",children:"Accept"})]})]})]})}},g={args:{children:e.jsxs(D,{noPortal:!0,children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open"}),e.jsx(o,{}),e.jsxs(i,{children:[e.jsx(a,{children:"Hello world"}),e.jsx(o,{}),e.jsx(s,{children:e.jsx(c,{})})]})]})}},m={args:{children:e.jsxs(D,{noPortal:!0,children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open"}),e.jsx(o,{}),e.jsxs(i,{disableSheet:!0,children:[e.jsx(a,{children:"Hello world"}),e.jsx(s,{children:e.jsx(c,{})})]})]})}},u={args:{children:e.jsxs(D,{noPortal:!0,children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open"}),e.jsx(o,{}),e.jsxs(i,{style:{bottom:0,top:"auto"},children:[e.jsx(a,{children:"Hello world"}),e.jsx(s,{children:e.jsx(c,{})})]})]})}},p={render:()=>{const[y,T]=S.useState(!1);return S.useEffect(()=>{y?document.body.style.setProperty("--mock-virtual-keyboard-height","300px"):document.body.style.removeProperty("--mock-virtual-keyboard-height")},[y]),e.jsxs(f,{virtualKeyboardBehavior:"overlay",children:[e.jsxs(t,{children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open"}),e.jsx(o,{}),e.jsxs(i,{children:[e.jsx(a,{children:"Hello world"}),e.jsx(v,{}),e.jsxs(s,{children:[e.jsx(c,{}),e.jsx(r,{onClick:()=>T(C=>!C),children:"Toggle fake kb"})]})]})]}),e.jsx("div",{className:"bg-neutral-ink",style:{position:"fixed",bottom:0,left:0,right:0,height:"var(--mock-virtual-keyboard-height,0)",width:"100%",transition:"height var(--m-dur) var(--m-ease)"}})]})}},h={render(){return e.jsxs(t,{children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open"}),e.jsxs(i,{children:[e.jsx(a,{children:"Hello world"}),e.jsx(o,{}),e.jsxs(n,{value:"",children:[e.jsx(n.Trigger,{children:e.jsx(n.Value,{})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{value:null,children:"Select an option"}),e.jsx(n.Item,{value:"option1",children:"Option 1"}),e.jsx(n.Item,{value:"option2",children:"Option 2"}),e.jsx(n.Item,{value:"option3",children:"Option 3"})]})]}),e.jsxs(t,{children:[e.jsx(l,{render:e.jsx(r,{}),children:"Open nested"}),e.jsxs(i,{children:[e.jsx(a,{children:"Nested dialog"}),e.jsx(O,{content:"This is a tooltip",children:e.jsx(r,{children:"Hover me"})}),e.jsx(o,{}),e.jsx(o,{})]})]})]})]})}},x={render(){return e.jsxs(t,{children:[e.jsx(t.SelectTrigger,{children:"Open"}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{children:"Hello world"}),e.jsxs(t.SelectList,{children:[e.jsx(t.SelectItem,{value:"option1",children:"Option 1"}),e.jsx(t.SelectItem,{value:"option2",children:"Option 2"}),e.jsx(t.SelectItem,{value:"option3",children:"Option 3"})]})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <ParticleLayer noPortal>
                <DialogTrigger render={<Button />}>Open</DialogTrigger>
                <DummyContent />
                <DialogContent>
                    <DialogTitle>Hello world</DialogTitle>
                    <DummyContent />
                    <DummyContent />
                    <DummyContent />
                    <Box gap>
                        <Input placeholder="Type something..." />
                        <Button emphasis="primary">Submit</Button>
                    </Box>
                    <DialogActions>
                        <DialogClose />
                        <Button emphasis="primary">Accept</Button>
                    </DialogActions>
                </DialogContent>
            </ParticleLayer>
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <ParticleLayer noPortal>
                <DialogTrigger render={<Button />}>Open</DialogTrigger>
                <DummyContent />
                <DialogContent>
                    <DialogTitle>Hello world</DialogTitle>
                    <DummyContent />
                    <DialogActions>
                        <DialogClose />
                    </DialogActions>
                </DialogContent>
            </ParticleLayer>
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <ParticleLayer noPortal>
                <DialogTrigger render={<Button />}>Open</DialogTrigger>
                <DummyContent />
                <DialogContent disableSheet>
                    <DialogTitle>Hello world</DialogTitle>
                    <DialogActions>
                        <DialogClose />
                    </DialogActions>
                </DialogContent>
            </ParticleLayer>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <ParticleLayer noPortal>
                <DialogTrigger render={<Button />}>Open</DialogTrigger>
                <DummyContent />
                <DialogContent style={{
        bottom: 0,
        top: 'auto'
      }}>
                    <DialogTitle>Hello world</DialogTitle>
                    <DialogActions>
                        <DialogClose />
                    </DialogActions>
                </DialogContent>
            </ParticleLayer>
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [keyboard, setKeyboard] = useState(false);
    useEffect(() => {
      if (keyboard) {
        document.body.style.setProperty('--mock-virtual-keyboard-height', '300px');
      } else {
        document.body.style.removeProperty('--mock-virtual-keyboard-height');
      }
    }, [keyboard]);
    return <Provider virtualKeyboardBehavior="overlay">
                <Dialog>
                    <DialogTrigger render={<Button />}>Open</DialogTrigger>
                    <DummyContent />
                    <DialogContent>
                        <DialogTitle>Hello world</DialogTitle>
                        <Input />
                        <DialogActions>
                            <DialogClose />
                            <Button onClick={() => setKeyboard(v => !v)}>
                                Toggle fake kb
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
                <div className="bg-neutral-ink" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'var(--mock-virtual-keyboard-height,0)',
        width: '100%',
        transition: 'height var(--m-dur) var(--m-ease)'
      }} />
            </Provider>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render() {
    return <Dialog>
                <DialogTrigger render={<Button />}>Open</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Hello world</DialogTitle>
                    <DummyContent />
                    <Select value="">
                        <Select.Trigger>
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Item value={null}>Select an option</Select.Item>
                            <Select.Item value="option1">Option 1</Select.Item>
                            <Select.Item value="option2">Option 2</Select.Item>
                            <Select.Item value="option3">Option 3</Select.Item>
                        </Select.Content>
                    </Select>
                    <Dialog>
                        <DialogTrigger render={<Button />}>Open nested</DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Nested dialog</DialogTitle>
                            <Tooltip content="This is a tooltip">
                                <Button>Hover me</Button>
                            </Tooltip>
                            <DummyContent />
                            <DummyContent />
                        </DialogContent>
                    </Dialog>
                </DialogContent>
            </Dialog>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    return <Dialog>
                <Dialog.SelectTrigger>Open</Dialog.SelectTrigger>
                <Dialog.Content>
                    <Dialog.Title>Hello world</Dialog.Title>
                    <Dialog.SelectList>
                        <Dialog.SelectItem value="option1">Option 1</Dialog.SelectItem>
                        <Dialog.SelectItem value="option2">Option 2</Dialog.SelectItem>
                        <Dialog.SelectItem value="option3">Option 3</Dialog.SelectItem>
                    </Dialog.SelectList>
                </Dialog.Content>
            </Dialog>;
  }
}`,...x.parameters?.docs?.source}}};const L=["Default","Small","NoSheet","Positioned","VirtualKeyboard","MultiNested","Selectable"];export{d as Default,h as MultiNested,m as NoSheet,u as Positioned,x as Selectable,g as Small,p as VirtualKeyboard,L as __namedExportsOrder,w as default};
