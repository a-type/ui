import{j as e,r as j,B as b,b as f}from"./iframe-D2a0O0Os.js";import{A as y}from"./Avatar-B9wySNgj.js";import{h as o}from"./Card-DhKBVSam.js";import{S as W}from"./Switch-3doWFjLk.js";import{P as m,a as h}from"./PageContent-COK4vEAV.js";import{P as N,N as I,a,b as r,c as t,d as n,e as l}from"./NavBar-BI0RMOrF.js";import{P}from"./PageNowPlaying-BFF67rtl.js";import{I as k}from"./Input-Dy1tazTB.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./masonry-ChpvszrV.js";import"./timing-C8g-0Emv.js";import"./useSize-B5taUg1_.js";import"./Input.module-C9Yg6vyE.js";const D={title:"Components/Layouts",argTypes:{},parameters:{controls:{expanded:!0},layout:"fullscreen"}},c={render:()=>{const[i,s]=j.useState(!0),g=()=>s(u=>!u);return e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h1",{className:"text-primary",style:{fontWeight:"bold"},children:"Hello, World!"}),e.jsx("p",{className:"text-primary",children:"This is a simple page layout."})]}),e.jsx(W,{checked:i,onCheckedChange:g}),i&&e.jsx(o.Grid,{children:new Array(100).fill(null).map((u,B)=>e.jsx(o,{children:e.jsx(o.Main,{})},B))}),e.jsx(P,{children:e.jsx(b,{surface:"ambient",elevated:"lg",full:!0,p:!0,children:"Now playing"})})]}),e.jsx(N,{children:e.jsxs(I,{children:[e.jsxs(a,{children:[e.jsx(r,{children:e.jsx(t,{name:"cart"})}),e.jsx(n,{children:"Item 1 long"})]}),e.jsxs(a,{active:!0,children:[e.jsx(r,{children:e.jsx(t,{name:"book"})}),e.jsx(n,{children:"Item 2"}),e.jsx(l,{})]}),e.jsxs(a,{color:"neutral",active:!0,children:[e.jsx(r,{children:e.jsx(t,{render:(u,{size:B})=>e.jsx(y,{name:"Grant Forrest",size:B})})}),e.jsx(n,{children:"Neutral"}),e.jsx(l,{})]})]})})]})}},d={render:()=>e.jsxs(m,{children:[e.jsxs(h,{style:{maxWidth:300},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h1",{className:"text-primary",style:{fontWeight:"bold"},children:"Hello, World!"}),e.jsx("p",{className:"text-primary",children:"This is a simple page layout."})]}),e.jsx(o.Grid,{children:new Array(100).fill(null).map((i,s)=>e.jsx(o,{children:e.jsx(o.Main,{})},s))})]}),e.jsx(N,{children:e.jsxs(I,{children:[e.jsxs(a,{children:[e.jsx(r,{children:e.jsx(t,{name:"cart"})}),e.jsx(n,{children:"Item 1 long"})]}),e.jsxs(a,{active:!0,children:[e.jsx(r,{children:e.jsx(t,{name:"book"})}),e.jsx(n,{children:"Item 2"}),e.jsx(l,{})]}),e.jsxs(a,{color:"neutral",active:!0,children:[e.jsx(r,{children:e.jsx(t,{name:"book"})}),e.jsx(n,{children:"Neutral"}),e.jsx(l,{})]})]})})]})},p={render:()=>e.jsx(m,{style:{height:"100%",width:"100%"},children:e.jsxs(h,{children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h1",{className:"text-primary",style:{fontWeight:"bold"},children:"Hello, World!"}),e.jsx("p",{className:"text-primary",children:"This is a simple page layout."}),e.jsx(o.Grid,{children:new Array(100).fill(null).map((i,s)=>e.jsx(o,{children:e.jsx(o.Main,{})},s))})]}),e.jsx(P,{children:e.jsx(b,{full:!0,elevated:"lg",p:!0,surface:"ambient",children:"Now playing"})})]})})},v={render(){const[i,s]=j.useState(!1);return j.useEffect(()=>{i?document.body.style.setProperty("--mock-virtual-keyboard-height","300px"):document.body.style.removeProperty("--mock-virtual-keyboard-height")},[i]),e.jsxs(m,{style:{height:"100%",width:"100%"},children:[e.jsxs(h,{children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h1",{className:"text-primary",style:{fontWeight:"bold"},children:"Hello, World!"}),e.jsx("p",{className:"text-primary",children:"This is a simple page layout."})]}),e.jsxs(P,{keepAboveKeyboard:!0,children:[e.jsx(f,{onClick:()=>s(g=>!g),children:"Toggle fake kb"}),e.jsx(k,{})]})]}),e.jsx(N,{children:e.jsxs(I,{children:[e.jsxs(a,{children:[e.jsx(r,{children:e.jsx(t,{name:"cart"})}),e.jsx(n,{children:"Item 1 long"})]}),e.jsxs(a,{active:!0,children:[e.jsx(r,{children:e.jsx(t,{render:e.jsx(y,{name:"Grant Forrest"})})}),e.jsx(n,{children:"Item 2"}),e.jsx(l,{})]})]})}),e.jsx("div",{className:"bg-neutral-ink",style:{position:"fixed",bottom:0,left:0,right:0,height:"var(--mock-virtual-keyboard-height,0)",width:"100%",transition:"height var(--m-dur) var(--m-ease)"}})]})}},x={render:()=>e.jsx(m,{children:e.jsx(N,{children:e.jsxs(I,{children:[e.jsxs(a,{children:[e.jsx(r,{children:e.jsx(t,{name:"cart"})}),e.jsx(n,{children:"Item 1 long"})]}),e.jsxs(a,{active:!0,children:[e.jsx(r,{children:e.jsx(t,{name:"book"})}),e.jsx(n,{children:"Item 2"}),e.jsx(l,{})]}),e.jsxs(a,{color:"neutral",active:!0,children:[e.jsx(r,{children:e.jsx(t,{render:(i,{size:s})=>e.jsx(y,{name:"Grant Forrest",size:s})})}),e.jsx(n,{children:"Neutral"}),e.jsx(l,{})]})]})})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [content, setContent] = useState(true);
    const toggleContent = () => setContent(prev => !prev);
    return <PageRoot>
                <PageContent>
                    <div style={{
          textAlign: 'center'
        }}>
                        <h1 className="text-primary" style={{
            fontWeight: 'bold'
          }}>
                            Hello, World!
                        </h1>
                        <p className="text-primary">This is a simple page layout.</p>
                    </div>
                    <Switch checked={content} onCheckedChange={toggleContent} />
                    {content && <Card.Grid>
                            {new Array(100).fill(null).map((_, i) => <Card key={i}>
                                    <Card.Main />
                                </Card>)}
                        </Card.Grid>}
                    <PageNowPlaying>
                        <Box surface="ambient" elevated="lg" full p>
                            Now playing
                        </Box>
                    </PageNowPlaying>
                </PageContent>
                <PageNav>
                    <NavBarRoot>
                        <NavBarItem>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="cart" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 1 long</NavBarItemText>
                        </NavBarItem>
                        <NavBarItem active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="book" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 2</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                        <NavBarItem color="neutral" active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon render={(_, {
                size
              }) => <Avatar name="Grant Forrest" size={size} />} />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Neutral</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                    </NavBarRoot>
                </PageNav>
            </PageRoot>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <PageRoot>
                <PageContent style={{
        maxWidth: 300
      }}>
                    <div style={{
          textAlign: 'center'
        }}>
                        <h1 className="text-primary" style={{
            fontWeight: 'bold'
          }}>
                            Hello, World!
                        </h1>
                        <p className="text-primary">This is a simple page layout.</p>
                    </div>
                    <Card.Grid>
                        {new Array(100).fill(null).map((_, i) => <Card key={i}>
                                <Card.Main />
                            </Card>)}
                    </Card.Grid>
                </PageContent>
                <PageNav>
                    <NavBarRoot>
                        <NavBarItem>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="cart" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 1 long</NavBarItemText>
                        </NavBarItem>
                        <NavBarItem active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="book" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 2</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                        <NavBarItem color="neutral" active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="book" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Neutral</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                    </NavBarRoot>
                </PageNav>
            </PageRoot>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <PageRoot style={{
    height: '100%',
    width: '100%'
  }}>
            <PageContent>
                <div style={{
        textAlign: 'center'
      }}>
                    <h1 className="text-primary" style={{
          fontWeight: 'bold'
        }}>
                        Hello, World!
                    </h1>
                    <p className="text-primary">This is a simple page layout.</p>
                    <Card.Grid>
                        {new Array(100).fill(null).map((_, i) => <Card key={i}>
                                <Card.Main />
                            </Card>)}
                    </Card.Grid>
                </div>
                <PageNowPlaying>
                    <Box full elevated="lg" p surface="ambient">
                        Now playing
                    </Box>
                </PageNowPlaying>
            </PageContent>
        </PageRoot>
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    const [keyboard, setKeyboard] = useState(false);
    useEffect(() => {
      if (keyboard) {
        document.body.style.setProperty('--mock-virtual-keyboard-height', '300px');
      } else {
        document.body.style.removeProperty('--mock-virtual-keyboard-height');
      }
    }, [keyboard]);
    return <PageRoot style={{
      height: '100%',
      width: '100%'
    }}>
                <PageContent>
                    <div style={{
          textAlign: 'center'
        }}>
                        <h1 className="text-primary" style={{
            fontWeight: 'bold'
          }}>
                            Hello, World!
                        </h1>
                        <p className="text-primary">This is a simple page layout.</p>
                    </div>
                    <PageNowPlaying keepAboveKeyboard>
                        <Button onClick={() => setKeyboard(v => !v)}>
                            Toggle fake kb
                        </Button>
                        <Input />
                    </PageNowPlaying>
                </PageContent>
                <PageNav>
                    <NavBarRoot>
                        <NavBarItem>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="cart" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 1 long</NavBarItemText>
                        </NavBarItem>
                        <NavBarItem active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon render={<Avatar name="Grant Forrest" />} />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 2</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                    </NavBarRoot>
                </PageNav>
                <div className="bg-neutral-ink" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'var(--mock-virtual-keyboard-height,0)',
        width: '100%',
        transition: 'height var(--m-dur) var(--m-ease)'
      }} />
            </PageRoot>;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <PageRoot>
                <PageNav>
                    <NavBarRoot>
                        <NavBarItem>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="cart" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 1 long</NavBarItemText>
                        </NavBarItem>
                        <NavBarItem active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon name="book" />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Item 2</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                        <NavBarItem color="neutral" active={true}>
                            <NavBarItemIconWrapper>
                                <NavBarItemIcon render={(_, {
                size
              }) => <Avatar name="Grant Forrest" size={size} />} />
                            </NavBarItemIconWrapper>
                            <NavBarItemText>Neutral</NavBarItemText>
                            <NavBarItemPip />
                        </NavBarItem>
                    </NavBarRoot>
                </PageNav>
            </PageRoot>;
  }
}`,...x.parameters?.docs?.source}}};const V=["Default","ManualWidth","WithoutNav","WithVirtualKeyboard","NoContent"];export{c as Default,d as ManualWidth,x as NoContent,v as WithVirtualKeyboard,p as WithoutNav,V as __namedExportsOrder,D as default};
