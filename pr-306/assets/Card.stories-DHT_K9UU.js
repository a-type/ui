import{j as e,b as r,I as n,r as A,B as k}from"./iframe-D2a0O0Os.js";import{C as t,a as S,b as a,c as o,d as s,e as i,f as d,g as O,h as F,i as w}from"./Card-DhKBVSam.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./masonry-ChpvszrV.js";import"./timing-C8g-0Emv.js";const H={title:"Components/Card",component:t,argTypes:{emphasis:{type:"string",control:{type:"inline-radio"},options:["ambient","secondary","primary"]},size:{type:"string",control:{type:"inline-radio"},options:["sm","md","lg"]}},parameters:{controls:{expanded:!0}}},p={render:c=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"stretch",gap:"var(--m-sp-md)"},children:[e.jsxs(t,{...c,style:{minHeight:"20vh"},children:[e.jsx(S,{render:e.jsx("img",{src:"https://resources.biscuits.club/images/pashka.jpg"})}),e.jsxs(a,{onClick:()=>alert("clicked"),children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff you'd have on a card. Maybe a time?"}),e.jsx(s,{children:"More things, if you want."})]}),e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{size:"small",color:"primary",children:e.jsx(n,{name:"placeholder"})})]}),e.jsx(O,{children:e.jsx(r,{size:"small",emphasis:"ghost",children:e.jsx(n,{name:"dots"})})})]})]}),e.jsxs(t,{...c,style:{maxWidth:300},children:[e.jsxs(a,{onClick:()=>alert("clicked"),children:[e.jsx(o,{children:"Card Title which is very long and would normally wrap"}),e.jsx(s,{children:"Other stuff"}),e.jsx(s,{unstyled:!0,children:"Styling optional"})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{size:"small",emphasis:"ghost",children:e.jsx(n,{name:"placeholder"})})]})})]})]})},j={render:()=>e.jsxs(t,{size:"sm",children:[e.jsxs(a,{children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"}),e.jsx(s,{children:"More things, if you want."})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{size:"small",emphasis:"ghost",children:e.jsx(n,{name:"placeholder"})})]})})]})},f={render:()=>e.jsxs(t,{children:[e.jsxs(a,{children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",children:e.jsx(n,{name:"placeholder"})})]})})]})},g={render:()=>e.jsxs(t,{children:[e.jsx(a,{render:e.jsxs("a",{href:"#here",children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",children:e.jsx(n,{name:"placeholder"})})]})})]})},B={render:()=>e.jsxs(t,{children:[e.jsx(a,{nonInteractive:!0,render:e.jsxs("button",{children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",children:e.jsx(n,{name:"placeholder"})})]})})]})},z={render:()=>{const[c,C]=A.useState(()=>Array.from({length:40},()=>50+Math.floor(Math.random()*300))),m=l=>C(h=>h.filter((x,M)=>M!==l)),u=l=>C(h=>{const x=50+Math.floor(Math.random()*300);return h.map((M,R)=>R===l?x:M)});return e.jsx(F.Grid,{children:c.map((l,h)=>e.jsx(I,{size:l,remove:()=>m(h),resize:()=>u(h)},h))})}},y={render:()=>{const[c,C]=A.useState(()=>Array.from({length:40},()=>50+Math.floor(Math.random()*300))),m=u=>C(l=>l.filter((h,x)=>x!==u));return e.jsx(F.Grid,{columns:w.small,children:c.map((u,l)=>e.jsx(I,{size:u,remove:()=>m(l)},l))})}};function I({size:c,remove:C,resize:m}){return e.jsxs(t,{style:{height:c},children:[e.jsx(a,{children:e.jsx(o,{children:c})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",onClick:C,children:"Delete"}),m&&e.jsx(r,{size:"small",onClick:m,children:"Resize"})]})})]})}const v={render:()=>e.jsxs(t,{children:[e.jsxs(a,{visuallyFocused:!0,onClick:()=>{},children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",children:e.jsx(n,{name:"placeholder"})})]})})]})},T={render(){return e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",gap:"var(--m-sp-lg)"},children:[e.jsx("div",{style:{flex:1},children:e.jsxs(t,{children:[e.jsxs(a,{onClick:()=>{},children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",size:"small",children:e.jsx(n,{name:"placeholder"})})]})})]})}),e.jsxs(k,{p:!0,gap:!0,col:!0,grow:!0,children:[e.jsxs(t,{children:[e.jsxs(a,{onClick:()=>{},children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",size:"small",children:e.jsx(n,{name:"placeholder"})})]})})]}),e.jsxs(t,{children:[e.jsxs(a,{onClick:()=>{},children:[e.jsx(o,{children:"Card Title"}),e.jsx(s,{children:"Other stuff"})]}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(r,{size:"small",children:"Button"}),e.jsx(r,{emphasis:"ghost",size:"small",children:e.jsx(n,{name:"placeholder"})})]})})]})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 'var(--m-sp-md)'
  }}>
            <CardRoot {...args} style={{
      minHeight: '20vh'
    }}>
                <CardImage render={<img src="https://resources.biscuits.club/images/pashka.jpg" />} />
                <CardMain onClick={() => alert('clicked')}>
                    <CardTitle>Card Title</CardTitle>
                    <CardContent>
                        Other stuff you'd have on a card. Maybe a time?
                    </CardContent>
                    <CardContent>More things, if you want.</CardContent>
                </CardMain>
                <CardFooter>
                    <CardActions>
                        <Button size="small">Button</Button>
                        <Button size="small" color="primary">
                            <Icon name="placeholder" />
                        </Button>
                    </CardActions>
                    <CardMenu>
                        <Button size="small" emphasis="ghost">
                            <Icon name="dots" />
                        </Button>
                    </CardMenu>
                </CardFooter>
            </CardRoot>
            <CardRoot {...args} style={{
      maxWidth: 300
    }}>
                <CardMain onClick={() => alert('clicked')}>
                    <CardTitle>
                        Card Title which is very long and would normally wrap
                    </CardTitle>
                    <CardContent>Other stuff</CardContent>
                    <CardContent unstyled>Styling optional</CardContent>
                </CardMain>
                <CardFooter>
                    <CardActions>
                        <Button size="small">Button</Button>
                        <Button size="small" emphasis="ghost">
                            <Icon name="placeholder" />
                        </Button>
                    </CardActions>
                </CardFooter>
            </CardRoot>
        </div>
}`,...p.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <CardRoot size="sm">
            <CardMain>
                <CardTitle>Card Title</CardTitle>
                <CardContent>Other stuff</CardContent>
                <CardContent>More things, if you want.</CardContent>
            </CardMain>
            <CardFooter>
                <CardActions>
                    <Button size="small">Button</Button>
                    <Button size="small" emphasis="ghost">
                        <Icon name="placeholder" />
                    </Button>
                </CardActions>
            </CardFooter>
        </CardRoot>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CardRoot>
            <CardMain>
                <CardTitle>Card Title</CardTitle>
                <CardContent>Other stuff</CardContent>
            </CardMain>
            <CardFooter>
                <CardActions>
                    <Button size="small">Button</Button>
                    <Button emphasis="ghost">
                        <Icon name="placeholder" />
                    </Button>
                </CardActions>
            </CardFooter>
        </CardRoot>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <CardRoot>
            <CardMain render={<a href="#here">
                        <CardTitle>Card Title</CardTitle>
                        <CardContent>Other stuff</CardContent>
                    </a>} />
            <CardFooter>
                <CardActions>
                    <Button size="small">Button</Button>
                    <Button emphasis="ghost">
                        <Icon name="placeholder" />
                    </Button>
                </CardActions>
            </CardFooter>
        </CardRoot>
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <CardRoot>
            <CardMain nonInteractive render={<button>
                        <CardTitle>Card Title</CardTitle>
                        <CardContent>Other stuff</CardContent>
                    </button>} />
            <CardFooter>
                <CardActions>
                    <Button size="small">Button</Button>
                    <Button emphasis="ghost">
                        <Icon name="placeholder" />
                    </Button>
                </CardActions>
            </CardFooter>
        </CardRoot>
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sizes, setSizes] = useState(() => Array.from({
      length: 40
    }, () => 50 + Math.floor(Math.random() * 300)));
    const remove = (index: number) => setSizes(v => v.filter((_, i) => i !== index));
    const resize = (index: number) => setSizes(v => {
      const size = 50 + Math.floor(Math.random() * 300);
      return v.map((s, i) => i === index ? size : s);
    });
    return <Card.Grid>
                {sizes.map((size, i) => <GridCard key={i} size={size} remove={() => remove(i)} resize={() => resize(i)} />)}
            </Card.Grid>;
  }
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sizes, setSizes] = useState(() => Array.from({
      length: 40
    }, () => 50 + Math.floor(Math.random() * 300)));
    const remove = (index: number) => setSizes(v => v.filter((_, i) => i !== index));
    return <Card.Grid columns={cardGridColumns.small}>
                {sizes.map((size, i) => <GridCard key={i} size={size} remove={() => remove(i)} />)}
            </Card.Grid>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <CardRoot>
            <CardMain visuallyFocused onClick={() => {}}>
                <CardTitle>Card Title</CardTitle>
                <CardContent>Other stuff</CardContent>
            </CardMain>
            <CardFooter>
                <CardActions>
                    <Button size="small">Button</Button>
                    <Button emphasis="ghost">
                        <Icon name="placeholder" />
                    </Button>
                </CardActions>
            </CardFooter>
        </CardRoot>
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render() {
    return <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap: 'var(--m-sp-lg)'
    }}>
                <div style={{
        flex: 1
      }}>
                    <CardRoot>
                        <CardMain onClick={() => {}}>
                            <CardTitle>Card Title</CardTitle>
                            <CardContent>Other stuff</CardContent>
                        </CardMain>
                        <CardFooter>
                            <CardActions>
                                <Button size="small">Button</Button>
                                <Button emphasis="ghost" size="small">
                                    <Icon name="placeholder" />
                                </Button>
                            </CardActions>
                        </CardFooter>
                    </CardRoot>
                </div>
                <Box p gap col grow>
                    <CardRoot>
                        <CardMain onClick={() => {}}>
                            <CardTitle>Card Title</CardTitle>
                            <CardContent>Other stuff</CardContent>
                        </CardMain>
                        <CardFooter>
                            <CardActions>
                                <Button size="small">Button</Button>
                                <Button emphasis="ghost" size="small">
                                    <Icon name="placeholder" />
                                </Button>
                            </CardActions>
                        </CardFooter>
                    </CardRoot>
                    <CardRoot>
                        <CardMain onClick={() => {}}>
                            <CardTitle>Card Title</CardTitle>
                            <CardContent>Other stuff</CardContent>
                        </CardMain>
                        <CardFooter>
                            <CardActions>
                                <Button size="small">Button</Button>
                                <Button emphasis="ghost" size="small">
                                    <Icon name="placeholder" />
                                </Button>
                            </CardActions>
                        </CardFooter>
                    </CardRoot>
                </Box>
            </div>;
  }
}`,...T.parameters?.docs?.source}}};const V=["Default","Compact","NonInteractive","AsChild","AsChildNonInteractive","Grid","GridCompact","VisuallyFocused","CardsInBox"];export{g as AsChild,B as AsChildNonInteractive,T as CardsInBox,j as Compact,p as Default,z as Grid,y as GridCompact,f as NonInteractive,v as VisuallyFocused,V as __namedExportsOrder,H as default};
