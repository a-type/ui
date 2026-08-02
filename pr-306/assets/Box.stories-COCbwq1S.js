import{B as r,j as e,b as t,T as o,I as l}from"./iframe-D2a0O0Os.js";import{C as p}from"./Checkbox-DJAWEvBH.js";import{P as u}from"./Progress-BdyvIbVk.js";import{S as d}from"./Slider-D6ekeEFB.js";import{S as x}from"./Switch-3doWFjLk.js";import{T as i}from"./toggleGroup-UjIZFgOz.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./valueToPercent-WVG-g_BQ.js";import"./stringifyLocale-BMPUsiav.js";import"./useRegisteredLabelId-3QSJF1bh.js";import"./useIsHydrating-DrCZeTnC.js";const v={title:"Components/Box",component:r,argTypes:{border:{type:"boolean",defaultValue:!1},surface:{type:"boolean",defaultValue:!1},elevated:{type:"string",options:["sm","md","lg","xl","-sm","-md","-lg","-xl","sm-up","md-up","lg-up","xl-up","-sm-up","-md-up","-lg-up","-xl-up"],control:{type:"select"}},layout:{type:"string"},wrap:{type:"boolean"},container:{type:"boolean"},p:{type:"string",options:["none","xs","sm","md","lg","xl"],control:{type:"select"}},gap:{type:"string",options:["none","xs","sm","md","lg","xl"],control:{type:"select"}},col:{type:"boolean"},reverse:{type:"boolean"},squish:{type:"string",options:["horizontal","vertical"],control:{type:"select"}},children:{table:{disable:!0}}},parameters:{controls:{expanded:!0}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"primary",children:"Primary"}),e.jsx(t,{emphasis:"ghost",children:"Ghost"}),e.jsx(t,{children:"Default"})]}),p:"md",gap:"md",border:!0}};function s({name:a}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[a," Surface"]}),e.jsxs(r,{gap:!0,layout:"center start",children:[e.jsx(t,{emphasis:"primary",children:"Primary"}),e.jsx(t,{emphasis:"ghost",children:"Ghost"}),e.jsx(p,{checked:!0}),e.jsx(x,{checked:!0})]}),e.jsx(u,{value:50,style:{width:"100%"}}),e.jsxs(i,{defaultValue:["one"],children:[e.jsx(i.Item,{value:"one",children:"One"}),e.jsx(i.Item,{value:"two",children:"Two"})]}),e.jsx(d,{defaultValue:[30],style:{width:"100%"}})]})}const c={render(a){return e.jsxs("div",{className:"bg-main-wash",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--m-sp-lg)"},...a,children:[e.jsx(r,{...a,surface:"ambient",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Ambient"})}),e.jsx(r,{...a,surface:"primary",className:"@mode-primary",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Primary"})}),e.jsx(r,{...a,surface:"secondary",className:"@mode-primary",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Secondary"})}),e.jsx(r,{...a,surface:!0,className:"@mode-accent",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Accent"})}),e.jsx(r,{...a,surface:!0,className:"@mode-neutral",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Neutral"})}),e.jsx(r,{...a,surface:!0,className:"@mode-attention",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Attention"})}),e.jsx(r,{...a,surface:!0,className:"@mode-success",p:"lg",col:!0,gap:!0,children:e.jsx(s,{name:"Success"})})]})}},m={render(a){return e.jsxs(r,{gap:!0,children:[e.jsxs(r,{dim:!0,children:["Dimmed non-surface",e.jsx(o,{children:"Text"}),e.jsx(l,{name:"placeholder"})]}),e.jsxs(r,{surface:"ambient",dim:!0,children:["Dimmed box",e.jsx(o,{children:"Text"}),e.jsx(l,{name:"placeholder"})]}),e.jsxs(r,{surface:"primary",dim:!0,children:["Dimmed box",e.jsx(o,{children:"Text"}),e.jsx(l,{name:"placeholder"})]}),e.jsx(r,{surface:"ambient",children:e.jsx(o,{dim:!0,children:"Dimmed text"})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Button emphasis="primary">Primary</Button>
                <Button emphasis="ghost">Ghost</Button>
                <Button>Default</Button>
            </>,
    p: 'md',
    gap: 'md',
    border: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <div className="bg-main-wash" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--m-sp-lg)'
    }} {...args}>
                <Box {...args} surface="ambient" p="lg" col gap>
                    <SurfaceContent name="Ambient" />
                </Box>
                <Box {...args} surface="primary" className="@mode-primary" p="lg" col gap>
                    <SurfaceContent name="Primary" />
                </Box>
                <Box {...args} surface="secondary" className="@mode-primary" p="lg" col gap>
                    <SurfaceContent name="Secondary" />
                </Box>
                <Box {...args} surface className="@mode-accent" p="lg" col gap>
                    <SurfaceContent name="Accent" />
                </Box>
                <Box {...args} surface className="@mode-neutral" p="lg" col gap>
                    <SurfaceContent name="Neutral" />
                </Box>
                <Box {...args} surface className="@mode-attention" p="lg" col gap>
                    <SurfaceContent name="Attention" />
                </Box>
                <Box {...args} surface className="@mode-success" p="lg" col gap>
                    <SurfaceContent name="Success" />
                </Box>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box gap>
                <Box dim>
                    Dimmed non-surface
                    <Text>Text</Text>
                    <Icon name="placeholder" />
                </Box>
                <Box surface="ambient" dim>
                    Dimmed box
                    <Text>Text</Text>
                    <Icon name="placeholder" />
                </Box>
                <Box surface="primary" dim>
                    Dimmed box
                    <Text>Text</Text>
                    <Icon name="placeholder" />
                </Box>
                <Box surface="ambient">
                    <Text dim>Dimmed text</Text>
                </Box>
            </Box>;
  }
}`,...m.parameters?.docs?.source}}};const w=["Default","Surfaces","DimComparison"];export{n as Default,m as DimComparison,c as Surfaces,w as __namedExportsOrder,v as default};
