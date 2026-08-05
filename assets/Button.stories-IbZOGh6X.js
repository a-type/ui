import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Button-fKwnlsy8.js";import{n as a,t as o}from"./Avatar-DrwNkYyL.js";import{n as s,t as c}from"./Dialog-D3Ctt3Nf.js";import{n as l,t as u}from"./Icon-CPvdzLAz.js";import{n as d,t as f}from"./Box-CFmvJLRd.js";import{c as p,o as m}from"./typography-SS0vbNkf.js";import{n as h,t as g}from"./skeletons-B7Ra_L7e.js";function _({confirmText:e,confirmTitle:t=`Are you sure?`,confirmAction:n=`OK`,cancelAction:r=`Nevermind`,confirmColor:a=`primary`,onConfirm:o,skip:s,...l}){let[u,d]=(0,v.useState)(!1),[f,p]=(0,v.useState)(!1),h=(0,v.useCallback)(async()=>{p(!0);try{await o(),d(!1)}finally{p(!1)}},[o]);return s?(0,y.jsx)(i,{...l,onClick:()=>{o()}}):(0,y.jsxs)(c,{open:u,onOpenChange:d,children:[(0,y.jsx)(c.Trigger,{render:(0,y.jsx)(i,{}),...l}),(0,y.jsxs)(c.Content,{children:[(0,y.jsx)(c.Title,{children:t}),(0,y.jsx)(m,{children:e}),(0,y.jsxs)(c.Actions,{children:[(0,y.jsx)(c.Close,{render:(0,y.jsx)(i,{emphasis:`default`}),children:r}),(0,y.jsx)(i,{loading:f,onClick:h,emphasis:`primary`,color:a,children:n})]})]})]})}var v,y;function b(){return(b=e((()=>{v=t(),s(),p(),r(),y=n(),_.__docgenInfo={description:``,methods:[],displayName:`ConfirmedButton`,props:{confirmText:{required:!0,tsType:{name:`string`},description:``},confirmTitle:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Are you sure?'`,computed:!1}},confirmAction:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'OK'`,computed:!1}},cancelAction:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Nevermind'`,computed:!1}},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<any>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<any>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`any`}],raw:`Promise<any>`}]}}},description:``},skip:{required:!1,tsType:{name:`boolean`},description:``},confirmColor:{required:!1,tsType:{name:`ButtonProps['color']`,raw:`ButtonProps['color']`},description:``,defaultValue:{value:`'primary'`,computed:!1}}},composes:[`Omit`]}})))()}function x({emphasis:e}){return(0,C.jsxs)(f,{col:!0,gap:!0,children:[(0,C.jsx)(i,{emphasis:e,children:`Button`}),(0,C.jsxs)(i,{emphasis:e,children:[(0,C.jsx)(u,{name:`placeholder`}),`Icon`]}),(0,C.jsx)(i,{emphasis:e,disabled:!0,children:`Disabled`}),(0,C.jsx)(i,{emphasis:e,size:`small`,children:`Small`}),(0,C.jsx)(i,{emphasis:e,size:`wrapper`,children:(0,C.jsx)(i.Icon,{render:(0,C.jsx)(o,{imageSrc:`https://i.pravatar.cc/300`,name:`Avatar`})})}),(0,C.jsx)(i,{emphasis:e,children:(0,C.jsx)(u,{name:`placeholder`})}),(0,C.jsx)(i,{emphasis:e,size:`small`,children:(0,C.jsx)(u,{name:`placeholder`})})]})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{S=t(),a(),d(),l(),h(),r(),b(),C=n(),w={title:`Components/Button`,component:i,parameters:{controls:{expanded:!0}},args:{children:`Button`,loading:!1,emphasis:`default`,size:`default`,visuallyDisabled:!1,disabled:!1,visuallyFocused:!1}},T={render:e=>(0,C.jsxs)(f,{col:!0,gap:!0,wrap:!0,full:`width`,children:[(0,C.jsxs)(f,{gap:!0,items:`center`,children:[(0,C.jsx)(i,{...e}),(0,C.jsxs)(i,{...e,children:[(0,C.jsx)(u,{name:`placeholder`}),e.children]}),(0,C.jsx)(i,{...e,disabled:!0,children:`Disabled`}),(0,C.jsx)(i,{...e,size:`small`}),(0,C.jsx)(i,{...e,size:`wrapper`,children:(0,C.jsx)(i.Icon,{render:(0,C.jsx)(o,{name:`A`})})}),(0,C.jsx)(i,{...e,children:(0,C.jsx)(u,{name:`placeholder`})}),(0,C.jsx)(i,{...e,size:`small`,children:(0,C.jsx)(u,{name:`placeholder`})})]}),(0,C.jsxs)(f,{gap:!0,items:`center`,children:[(0,C.jsx)(i,{...e,emphasis:`primary`,children:`Primary`}),(0,C.jsx)(i,{...e,emphasis:`default`,children:`Default`}),(0,C.jsx)(i,{...e,emphasis:`light`,children:`Light`}),(0,C.jsx)(i,{...e,emphasis:`ghost`,children:`Ghost`}),(0,C.jsx)(i,{...e,emphasis:`primary`,className:`@mode-inverted`,children:`Contrast`})]})]})},E={render(){return(0,C.jsxs)(f,{col:!0,gap:!0,children:[(0,C.jsx)(f,{gap:!0,justify:`between`,children:[`primary`,`light`,`default`,`ghost`].map(e=>(0,C.jsx)(x,{emphasis:e},e))}),(0,C.jsx)(f,{gap:!0,surface:!0,justify:`between`,className:`@mode-success`,children:[`primary`,`light`,`default`,`ghost`].map(e=>(0,C.jsx)(x,{emphasis:e},e))}),(0,C.jsx)(f,{gap:!0,surface:!0,justify:`between`,className:`@mode-attention`,children:[`primary`,`light`,`default`,`ghost`].map(e=>(0,C.jsx)(x,{emphasis:e},e))})]})}},D={args:{children:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{name:`placeholder`}),`Iconic`]})}},O={args:{children:(0,C.jsx)(u,{name:`placeholder`})}},k={render:e=>{let[t,n]=(0,S.useState)(!1);return(0,C.jsx)(i,{...e,onClick:()=>n(e=>!e),children:t?(0,C.jsx)(u,{name:`check`}):`no icon`})}},A={render:e=>{let[t,n]=(0,S.useState)(!1),r=()=>n(e=>!e);return(0,C.jsx)(i,{...e,toggled:t,onClick:r})}},j={render:e=>{let[t,n]=(0,S.useState)(!1),r=()=>n(e=>!e);return(0,C.jsx)(i,{...e,toggled:t,onClick:r,children:(0,C.jsx)(u,{name:`placeholder`})})}},M={render(e){return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,borderStyle:`solid`,borderWidth:1},children:[(0,C.jsx)(i,{...e,size:`small`,children:`Button`}),(0,C.jsx)(i,{...e,size:`small`,children:(0,C.jsx)(u,{name:`placeholder`})})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,borderStyle:`solid`,borderWidth:1},children:[(0,C.jsx)(i,{...e,children:`Button`}),(0,C.jsx)(i,{...e,children:(0,C.jsx)(u,{name:`placeholder`})})]})]})}},N={render(e){return(0,C.jsx)(_,{confirmText:`Are you sure?`,confirmTitle:`Confirm`,onConfirm:()=>console.log(`confirmed`),...e,children:`Confirm`})}},P={render(e){return(0,C.jsxs)(f,{gap:!0,items:`center`,children:[(0,C.jsx)(i,{...e,children:(0,C.jsx)(C.Fragment,{children:e.children})}),(0,C.jsx)(i,{...e,children:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{name:`placeholder`}),e.children]})}),(0,C.jsx)(i,{children:(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(u,{name:`placeholder`})})})]})}},F={render(e){return(0,C.jsx)(f,{gap:!0,items:`center`,children:(0,C.jsxs)(i,{...e,children:[(0,C.jsx)(g,{maxLength:10}),(0,C.jsx)(u,{name:`placeholder`})]})})}},I={render(e){return(0,C.jsxs)(f,{col:!0,gap:!0,full:`width`,children:[(0,C.jsxs)(i,{...e,full:`width`,children:[(0,C.jsx)(u,{name:`placeholder`}),`Full Width`]}),(0,C.jsx)(`div`,{style:{width:`100%`,aspectRatio:1},children:(0,C.jsxs)(i,{...e,full:`height`,children:[(0,C.jsx)(u,{name:`placeholder`}),`Full Height`]})}),(0,C.jsx)(`div`,{style:{width:`100%`,aspectRatio:1},children:(0,C.jsx)(i,{...e,full:!0,children:`Full Both`})})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Icon name="placeholder" />
                Iconic
            </>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Icon name="placeholder" />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [toggled, setToggled] = useState(false);
    return <Button {...args} onClick={() => setToggled(v => !v)}>
                {toggled ? <Icon name="check" /> : 'no icon'}
            </Button>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(v => !v);
    return <Button {...args} toggled={on} onClick={toggle} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(v => !v);
    return <Button {...args} toggled={on} onClick={toggle}>
                <Icon name="placeholder" />
            </Button>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <ConfirmedButton confirmText="Are you sure?" confirmTitle="Confirm" onConfirm={() => console.log('confirmed')} {...args}>
                Confirm
            </ConfirmedButton>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box gap items="center">
                <Button {...args}>
                    <TextSkeleton maxLength={10} />
                    <Icon name="placeholder" />
                </Button>
            </Box>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Default`,`AllButtons`,`WithIcon`,`IconOnly`,`IconTransition`,`Toggled`,`ToggledIcon`,`Alignment`,`ConfirmedButtonDemo`,`FragmentTest`,`SkeletonTest`,`FullSizeTest`]})))()}R();export{M as Alignment,E as AllButtons,N as ConfirmedButtonDemo,T as Default,P as FragmentTest,I as FullSizeTest,O as IconOnly,k as IconTransition,F as SkeletonTest,A as Toggled,j as ToggledIcon,D as WithIcon,L as __namedExportsOrder,w as default};