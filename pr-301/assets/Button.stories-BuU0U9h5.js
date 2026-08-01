import{r as i,j as e,b as n,D as O,d as P,e as N,f as W,P as q,g as L,h as R,B as s,I as t}from"./iframe-BTd0T825.js";import{A as b}from"./Avatar-ZKT8yNet.js";import{T as V}from"./skeletons-Dz09uxUm.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";function k({confirmText:r,confirmTitle:o="Are you sure?",confirmAction:a="OK",cancelAction:l="Nevermind",confirmColor:c="primary",onConfirm:S,skip:D,...I}){const[A,w]=i.useState(!1),[z,C]=i.useState(!1),F=i.useCallback(async()=>{C(!0);try{await S(),w(!1)}finally{C(!1)}},[S]);return D?e.jsx(n,{...I,onClick:()=>{S()}}):e.jsxs(O,{open:A,onOpenChange:w,children:[e.jsx(P,{render:e.jsx(n,{}),...I}),e.jsxs(N,{children:[e.jsx(W,{children:o}),e.jsx(q,{children:r}),e.jsxs(L,{children:[e.jsx(R,{render:e.jsx(n,{emphasis:"default"}),children:l}),e.jsx(n,{loading:z,onClick:F,emphasis:"primary",color:c,children:a})]})]})]})}k.__docgenInfo={description:"",methods:[],displayName:"ConfirmedButton",props:{confirmText:{required:!0,tsType:{name:"string"},description:""},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Are you sure?'",computed:!1}},confirmAction:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'OK'",computed:!1}},cancelAction:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Nevermind'",computed:!1}},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<any>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<any>",elements:[{name:"void"},{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}]}}},description:""},skip:{required:!1,tsType:{name:"boolean"},description:""},confirmColor:{required:!1,tsType:{name:"ButtonProps['color']",raw:"ButtonProps['color']"},description:"",defaultValue:{value:"'primary'",computed:!1}}},composes:["Omit"]};const J={title:"Components/Button",component:n,parameters:{controls:{expanded:!0}},args:{children:"Button",loading:!1,emphasis:"default",size:"default",visuallyDisabled:!1,disabled:!1,visuallyFocused:!1}},d={render:r=>e.jsxs(s,{col:!0,gap:!0,wrap:!0,full:"width",children:[e.jsxs(s,{gap:!0,items:"center",children:[e.jsx(n,{...r}),e.jsxs(n,{...r,children:[e.jsx(t,{name:"placeholder"}),r.children]}),e.jsx(n,{...r,disabled:!0,children:"Disabled"}),e.jsx(n,{...r,size:"small"}),e.jsx(n,{...r,size:"wrapper",children:e.jsx(n.Icon,{render:e.jsx(b,{name:"A"})})}),e.jsx(n,{...r,children:e.jsx(t,{name:"placeholder"})}),e.jsx(n,{...r,size:"small",children:e.jsx(t,{name:"placeholder"})})]}),e.jsxs(s,{gap:!0,items:"center",children:[e.jsx(n,{...r,emphasis:"primary",children:"Primary"}),e.jsx(n,{...r,emphasis:"default",children:"Default"}),e.jsx(n,{...r,emphasis:"light",children:"Light"}),e.jsx(n,{...r,emphasis:"ghost",children:"Ghost"}),e.jsx(n,{...r,emphasis:"primary",className:"@mode-inverted",children:"Contrast"})]})]})};function T({emphasis:r}){return e.jsxs(s,{col:!0,gap:!0,children:[e.jsx(n,{emphasis:r,children:"Button"}),e.jsxs(n,{emphasis:r,children:[e.jsx(t,{name:"placeholder"}),"Icon"]}),e.jsx(n,{emphasis:r,disabled:!0,children:"Disabled"}),e.jsx(n,{emphasis:r,size:"small",children:"Small"}),e.jsx(n,{emphasis:r,size:"wrapper",children:e.jsx(n.Icon,{render:e.jsx(b,{imageSrc:"https://i.pravatar.cc/300",name:"Avatar"})})}),e.jsx(n,{emphasis:r,children:e.jsx(t,{name:"placeholder"})}),e.jsx(n,{emphasis:r,size:"small",children:e.jsx(t,{name:"placeholder"})})]})}const u={render(){return e.jsxs(s,{col:!0,gap:!0,children:[e.jsx(s,{gap:!0,justify:"between",children:["primary","light","default","ghost"].map(r=>e.jsx(T,{emphasis:r},r))}),e.jsx(s,{gap:!0,surface:!0,justify:"between",className:"@mode-success",children:["primary","light","default","ghost"].map(r=>e.jsx(T,{emphasis:r},r))}),e.jsx(s,{gap:!0,surface:!0,justify:"between",className:"@mode-attention",children:["primary","light","default","ghost"].map(r=>e.jsx(T,{emphasis:r},r))})]})}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"placeholder"}),"Iconic"]})}},p={args:{children:e.jsx(t,{name:"placeholder"})}},h={render:r=>{const[o,a]=i.useState(!1);return e.jsx(n,{...r,onClick:()=>a(l=>!l),children:o?e.jsx(t,{name:"check"}):"no icon"})}},g={render:r=>{const[o,a]=i.useState(!1),l=()=>a(c=>!c);return e.jsx(n,{...r,toggled:o,onClick:l})}},x={render:r=>{const[o,a]=i.useState(!1),l=()=>a(c=>!c);return e.jsx(n,{...r,toggled:o,onClick:l,children:e.jsx(t,{name:"placeholder"})})}},f={render(r){return e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",borderStyle:"solid",borderWidth:1},children:[e.jsx(n,{...r,size:"small",children:"Button"}),e.jsx(n,{...r,size:"small",children:e.jsx(t,{name:"placeholder"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",borderStyle:"solid",borderWidth:1},children:[e.jsx(n,{...r,children:"Button"}),e.jsx(n,{...r,children:e.jsx(t,{name:"placeholder"})})]})]})}},B={render(r){return e.jsx(k,{confirmText:"Are you sure?",confirmTitle:"Confirm",onConfirm:()=>console.log("confirmed"),...r,children:"Confirm"})}},j={render(r){return e.jsxs(s,{gap:!0,items:"center",children:[e.jsx(n,{...r,children:e.jsx(e.Fragment,{children:r.children})}),e.jsx(n,{...r,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"placeholder"}),r.children]})}),e.jsx(n,{children:e.jsx(e.Fragment,{children:e.jsx(t,{name:"placeholder"})})})]})}},y={render(r){return e.jsx(s,{gap:!0,items:"center",children:e.jsxs(n,{...r,children:[e.jsx(V,{maxLength:10}),e.jsx(t,{name:"placeholder"})]})})}},v={render(r){return e.jsxs(s,{col:!0,gap:!0,full:"width",children:[e.jsxs(n,{...r,full:"width",children:[e.jsx(t,{name:"placeholder"}),"Full Width"]}),e.jsx("div",{style:{width:"100%",aspectRatio:1},children:e.jsxs(n,{...r,full:"height",children:[e.jsx(t,{name:"placeholder"}),"Full Height"]})}),e.jsx("div",{style:{width:"100%",aspectRatio:1},children:e.jsx(n,{...r,full:!0,children:"Full Both"})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Box col gap wrap full="width">
                <Box gap items="center">
                    <Button {...args} />
                    <Button {...args}>
                        <Icon name="placeholder" />
                        {args.children}
                    </Button>
                    <Button {...args} disabled>
                        Disabled
                    </Button>
                    <Button {...args} size="small" />
                    <Button {...args} size="wrapper">
                        <Button.Icon render={<Avatar name="A" />} />
                    </Button>
                    <Button {...args}>
                        <Icon name="placeholder" />
                    </Button>
                    <Button {...args} size="small">
                        <Icon name="placeholder" />
                    </Button>
                </Box>
                <Box gap items="center">
                    <Button {...args} emphasis="primary">
                        Primary
                    </Button>
                    <Button {...args} emphasis="default">
                        Default
                    </Button>
                    <Button {...args} emphasis="light">
                        Light
                    </Button>
                    <Button {...args} emphasis="ghost">
                        Ghost
                    </Button>
                    <Button {...args} emphasis="primary" className="@mode-inverted">
                        Contrast
                    </Button>
                </Box>
            </Box>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    return <Box col gap>
                <Box gap justify="between">
                    {['primary', 'light', 'default', 'ghost'].map(emphasis => <ButtonStack key={emphasis} emphasis={emphasis as ButtonProps['emphasis']} />)}
                </Box>
                <Box gap surface justify="between" className="@mode-success">
                    {['primary', 'light', 'default', 'ghost'].map(emphasis => <ButtonStack key={emphasis} emphasis={emphasis as ButtonProps['emphasis']} />)}
                </Box>
                <Box gap surface justify="between" className="@mode-attention">
                    {['primary', 'light', 'default', 'ghost'].map(emphasis => <ButtonStack key={emphasis} emphasis={emphasis as ButtonProps['emphasis']} />)}
                </Box>
            </Box>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Icon name="placeholder" />
                Iconic
            </>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Icon name="placeholder" />
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [toggled, setToggled] = useState(false);
    return <Button {...args} onClick={() => setToggled(v => !v)}>
                {toggled ? <Icon name="check" /> : 'no icon'}
            </Button>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(v => !v);
    return <Button {...args} toggled={on} onClick={toggle} />;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(v => !v);
    return <Button {...args} toggled={on} onClick={toggle}>
                <Icon name="placeholder" />
            </Button>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
                <div style={{
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1
      }}>
                    <Button {...args} size="small">
                        Button
                    </Button>
                    <Button {...args} size="small">
                        <Icon name="placeholder" />
                    </Button>
                </div>
                <div style={{
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1
      }}>
                    <Button {...args}>Button</Button>
                    <Button {...args}>
                        <Icon name="placeholder" />
                    </Button>
                </div>
            </div>;
  }
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <ConfirmedButton confirmText="Are you sure?" confirmTitle="Confirm" onConfirm={() => console.log('confirmed')} {...args}>
                Confirm
            </ConfirmedButton>;
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box gap items="center">
                <Button {...args}>
                    <>{args.children}</>
                </Button>
                <Button {...args}>
                    <>
                        <Icon name="placeholder" />
                        {args.children}
                    </>
                </Button>
                <Button>
                    <>
                        <Icon name="placeholder" />
                    </>
                </Button>
            </Box>;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box gap items="center">
                <Button {...args}>
                    <TextSkeleton maxLength={10} />
                    <Icon name="placeholder" />
                </Button>
            </Box>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap full="width">
                <Button {...args} full="width">
                    <Icon name="placeholder" />
                    Full Width
                </Button>
                <div style={{
        width: '100%',
        aspectRatio: 1
      }}>
                    <Button {...args} full="height">
                        <Icon name="placeholder" />
                        Full Height
                    </Button>
                </div>
                <div style={{
        width: '100%',
        aspectRatio: 1
      }}>
                    <Button {...args} full>
                        Full Both
                    </Button>
                </div>
            </Box>;
  }
}`,...v.parameters?.docs?.source}}};const M=["Default","AllButtons","WithIcon","IconOnly","IconTransition","Toggled","ToggledIcon","Alignment","ConfirmedButtonDemo","FragmentTest","SkeletonTest","FullSizeTest"];export{f as Alignment,u as AllButtons,B as ConfirmedButtonDemo,d as Default,j as FragmentTest,v as FullSizeTest,p as IconOnly,h as IconTransition,y as SkeletonTest,g as Toggled,x as ToggledIcon,m as WithIcon,M as __namedExportsOrder,J as default};
