import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Button-fKwnlsy8.js";import{n as a,t as o}from"./Icon-CPvdzLAz.js";import{n as s,t as c}from"./HorizontalList-mkEmq1S6.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),r(),a(),s(),u=n(),d={title:`Components/HorizontalList`,component:c,argTypes:{},args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{size:`small`,children:`One`}),(0,u.jsx)(i,{size:`small`,children:`Two`}),(0,u.jsx)(i,{size:`small`,children:`Three`}),(0,u.jsx)(i,{size:`small`,children:`Four but long`}),(0,u.jsx)(i,{size:`small`,children:`Five`}),(0,u.jsx)(i,{size:`small`,children:`Six`}),(0,u.jsx)(i,{size:`small`,children:`Seven`}),(0,u.jsx)(i,{size:`small`,children:`Eight`}),(0,u.jsx)(i,{size:`small`,children:`Nine`}),(0,u.jsx)(i,{size:`small`,children:`Ten`}),(0,u.jsx)(i,{size:`small`,children:`Eleven`}),(0,u.jsx)(i,{size:`small`,children:`Twelve`}),(0,u.jsx)(i,{size:`small`,children:`Thirteen`}),(0,u.jsx)(i,{size:`small`,children:`Fourteen and long`}),(0,u.jsx)(i,{size:`small`,children:`Fifteen`}),(0,u.jsx)(i,{size:`small`,children:`Sixteen`}),(0,u.jsx)(i,{size:`small`,children:`Seventeen`}),(0,u.jsx)(i,{size:`small`,children:`Eighteen`}),(0,u.jsx)(i,{size:`small`,children:`Nineteen`}),(0,u.jsx)(i,{size:`small`,children:`Twenty`}),(0,u.jsx)(i,{size:`small`,children:`Twenty one`}),(0,u.jsx)(i,{size:`small`,children:`Twenty two`}),(0,u.jsx)(i,{size:`small`,children:`Twenty three`}),(0,u.jsx)(i,{size:`small`,children:`Twenty four`}),(0,u.jsx)(i,{emphasis:`primary`,style:{position:`sticky`,bottom:8,right:8,marginLeft:`auto`,flexShrink:0,boxShadow:`var(--m-shadow-sm)`},children:(0,u.jsx)(o,{name:`plus`})})]}),onCanOpenChange:()=>{}},parameters:{controls:{expanded:!0}}},f={render:e=>{let[t,n]=(0,l.useState)(!1);return(0,u.jsx)(`div`,{style:{height:`100%`,minHeight:`80vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,backgroundColor:`var(--m-gray-ink)`},children:(0,u.jsxs)(`div`,{style:{width:400,display:`flex`,flexDirection:`column`,flex:1,alignItems:`stretch`,backgroundColor:`var(--m-gray-paper)`},children:[(0,u.jsx)(i,{toggled:t,onClick:()=>n(!t),style:{marginBottom:`0.25rem`,marginRight:`0.25rem`,marginTop:`auto`,alignSelf:`flex-end`},children:t?`Close`:`Open`}),(0,u.jsx)(c,{style:{borderTop:`1px solid var(--m-gray)`,maxHeight:200},openDirection:`up`,...e,open:t,onOpenChange:n})]})})}},p={render:e=>{let[t,n]=(0,l.useState)(!1);return(0,u.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`stretch`,justifyContent:`flex-end`,backgroundColor:`var(--m-gray-paper)`},children:(0,u.jsxs)(c,{style:{maxHeight:200,borderTop:`1px solid var(--m-gray)`},openDirection:`up`,...e,children:[(0,u.jsx)(i,{size:`small`,toggled:t,onClick:()=>n(!t),children:`More`}),(0,u.jsx)(i,{size:`small`,children:`One`}),(0,u.jsx)(i,{size:`small`,children:`Two`}),t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{size:`small`,children:`Three`}),(0,u.jsx)(i,{size:`small`,children:`Four`}),(0,u.jsx)(i,{size:`small`,children:`Five`}),(0,u.jsx)(i,{size:`small`,children:`Six`}),(0,u.jsx)(i,{size:`small`,children:`Seven`}),(0,u.jsx)(i,{size:`small`,children:`Eight`}),(0,u.jsx)(i,{size:`small`,children:`Nine`}),(0,u.jsx)(i,{size:`small`,children:`Ten`}),(0,u.jsx)(i,{size:`small`,children:`Eleven`}),(0,u.jsx)(i,{size:`small`,children:`Twelve`}),(0,u.jsx)(i,{size:`small`,children:`Thirteen`}),(0,u.jsx)(i,{size:`small`,children:`Fourteen`}),(0,u.jsx)(i,{size:`small`,children:`Fifteen`})]}),(0,u.jsx)(i,{color:`primary`,style:{position:`sticky`,bottom:8,right:8,marginLeft:`auto`,flexShrink:0,boxShadow:`var(--m-shadow-sm)`},children:(0,u.jsx)(o,{name:`plus`})})]})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      height: '100%',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'var(--m-gray-ink)'
    }}>
                <div style={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'var(--m-gray-paper)'
      }}>
                    <Button toggled={open} onClick={() => setOpen(!open)} style={{
          marginBottom: '0.25rem',
          marginRight: '0.25rem',
          marginTop: 'auto',
          alignSelf: 'flex-end'
        }}>
                        {open ? 'Close' : 'Open'}
                    </Button>
                    <HorizontalList style={{
          borderTop: '1px solid var(--m-gray)',
          maxHeight: 200
        }} openDirection="up" {...args} open={open} onOpenChange={setOpen} />
                </div>
            </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [more, setMore] = useState(false);
    return <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      backgroundColor: 'var(--m-gray-paper)'
    }}>
                <HorizontalList style={{
        maxHeight: 200,
        borderTop: '1px solid var(--m-gray)'
      }} openDirection="up" {...args}>
                    <Button size="small" toggled={more} onClick={() => setMore(!more)}>
                        More
                    </Button>
                    <Button size="small">One</Button>
                    <Button size="small">Two</Button>
                    {more && <>
                            <Button size="small">Three</Button>
                            <Button size="small">Four</Button>
                            <Button size="small">Five</Button>
                            <Button size="small">Six</Button>
                            <Button size="small">Seven</Button>
                            <Button size="small">Eight</Button>
                            <Button size="small">Nine</Button>
                            <Button size="small">Ten</Button>
                            <Button size="small">Eleven</Button>
                            <Button size="small">Twelve</Button>
                            <Button size="small">Thirteen</Button>
                            <Button size="small">Fourteen</Button>
                            <Button size="small">Fifteen</Button>
                        </>}
                    <Button color="primary" style={{
          position: 'sticky',
          bottom: 8,
          right: 8,
          marginLeft: 'auto',
          flexShrink: 0,
          boxShadow: 'var(--m-shadow-sm)'
        }}>
                        <Icon name="plus" />
                    </Button>
                </HorizontalList>
            </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`CantOpen`]})))()}h();export{p as CantOpen,f as Default,m as __namedExportsOrder,d as default};