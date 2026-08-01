import{j as e,b as s,I as a,r as m}from"./iframe-b29PHh9x.js";import{H as o}from"./HorizontalList-DQaK0pjB.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Collapsible-QrtXpCD-.js";const p={title:"Components/HorizontalList",component:o,argTypes:{},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"small",children:"One"}),e.jsx(s,{size:"small",children:"Two"}),e.jsx(s,{size:"small",children:"Three"}),e.jsx(s,{size:"small",children:"Four but long"}),e.jsx(s,{size:"small",children:"Five"}),e.jsx(s,{size:"small",children:"Six"}),e.jsx(s,{size:"small",children:"Seven"}),e.jsx(s,{size:"small",children:"Eight"}),e.jsx(s,{size:"small",children:"Nine"}),e.jsx(s,{size:"small",children:"Ten"}),e.jsx(s,{size:"small",children:"Eleven"}),e.jsx(s,{size:"small",children:"Twelve"}),e.jsx(s,{size:"small",children:"Thirteen"}),e.jsx(s,{size:"small",children:"Fourteen and long"}),e.jsx(s,{size:"small",children:"Fifteen"}),e.jsx(s,{size:"small",children:"Sixteen"}),e.jsx(s,{size:"small",children:"Seventeen"}),e.jsx(s,{size:"small",children:"Eighteen"}),e.jsx(s,{size:"small",children:"Nineteen"}),e.jsx(s,{size:"small",children:"Twenty"}),e.jsx(s,{size:"small",children:"Twenty one"}),e.jsx(s,{size:"small",children:"Twenty two"}),e.jsx(s,{size:"small",children:"Twenty three"}),e.jsx(s,{size:"small",children:"Twenty four"}),e.jsx(s,{emphasis:"primary",style:{position:"sticky",bottom:8,right:8,marginLeft:"auto",flexShrink:0,boxShadow:"var(--m-shadow-sm)"},children:e.jsx(a,{name:"plus"})})]}),onCanOpenChange:()=>{}},parameters:{controls:{expanded:!0}}},n={render:r=>{const[l,t]=m.useState(!1);return e.jsx("div",{style:{height:"100%",minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"var(--m-gray-ink)"},children:e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",flex:1,alignItems:"stretch",backgroundColor:"var(--m-gray-paper)"},children:[e.jsx(s,{toggled:l,onClick:()=>t(!l),style:{marginBottom:"0.25rem",marginRight:"0.25rem",marginTop:"auto",alignSelf:"flex-end"},children:l?"Close":"Open"}),e.jsx(o,{style:{borderTop:"1px solid var(--m-gray)",maxHeight:200},openDirection:"up",...r,open:l,onOpenChange:t})]})})}},i={render:r=>{const[l,t]=m.useState(!1);return e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-end",backgroundColor:"var(--m-gray-paper)"},children:e.jsxs(o,{style:{maxHeight:200,borderTop:"1px solid var(--m-gray)"},openDirection:"up",...r,children:[e.jsx(s,{size:"small",toggled:l,onClick:()=>t(!l),children:"More"}),e.jsx(s,{size:"small",children:"One"}),e.jsx(s,{size:"small",children:"Two"}),l&&e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"small",children:"Three"}),e.jsx(s,{size:"small",children:"Four"}),e.jsx(s,{size:"small",children:"Five"}),e.jsx(s,{size:"small",children:"Six"}),e.jsx(s,{size:"small",children:"Seven"}),e.jsx(s,{size:"small",children:"Eight"}),e.jsx(s,{size:"small",children:"Nine"}),e.jsx(s,{size:"small",children:"Ten"}),e.jsx(s,{size:"small",children:"Eleven"}),e.jsx(s,{size:"small",children:"Twelve"}),e.jsx(s,{size:"small",children:"Thirteen"}),e.jsx(s,{size:"small",children:"Fourteen"}),e.jsx(s,{size:"small",children:"Fifteen"})]}),e.jsx(s,{color:"primary",style:{position:"sticky",bottom:8,right:8,marginLeft:"auto",flexShrink:0,boxShadow:"var(--m-shadow-sm)"},children:e.jsx(a,{name:"plus"})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const g=["Default","CantOpen"];export{i as CantOpen,n as Default,g as __namedExportsOrder,p as default};
