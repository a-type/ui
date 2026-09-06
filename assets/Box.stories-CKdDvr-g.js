import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Icon-BO1W1Vex.js";import{n as i,t as a}from"./Box-BzM0fJam.js";import{n as o,t as s}from"./Button-BZXNPMdH.js";import{n as c,t as l}from"./Checkbox-DzPuv5zi.js";import{n as u,t as d}from"./Progress-D_dNgiVj.js";import{n as f,t as p}from"./Slider-DzrdMXog.js";import{n as m,t as h}from"./Switch-D0rvOZOp.js";import{n as g,t as _}from"./toggleGroup-BQF8-W__.js";import{c as v,s as y}from"./typography-b4KulWiu.js";function b({name:e}){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{children:[e,` Surface`]}),(0,x.jsxs)(a,{gap:!0,layout:`center start`,children:[(0,x.jsx)(s,{emphasis:`primary`,children:`Primary`}),(0,x.jsx)(s,{emphasis:`ghost`,children:`Ghost`}),(0,x.jsx)(l,{checked:!0}),(0,x.jsx)(h,{checked:!0})]}),(0,x.jsx)(d,{value:50,style:{width:`100%`}}),(0,x.jsxs)(_,{defaultValue:[`one`],children:[(0,x.jsx)(_.Item,{value:`one`,children:`One`}),(0,x.jsx)(_.Item,{value:`two`,children:`Two`})]}),(0,x.jsx)(p,{defaultValue:[30],style:{width:`100%`}})]})}var x,S,C,w,T,E;function D(){return(D=e((()=>{o(),c(),n(),u(),f(),m(),g(),v(),i(),x=t(),S={title:`Components/Box`,component:a,argTypes:{border:{type:`boolean`,defaultValue:!1},surface:{type:`boolean`,defaultValue:!1},elevated:{type:`string`,options:[`sm`,`md`,`lg`,`xl`,`-sm`,`-md`,`-lg`,`-xl`,`sm-up`,`md-up`,`lg-up`,`xl-up`,`-sm-up`,`-md-up`,`-lg-up`,`-xl-up`],control:{type:`select`}},layout:{type:`string`},wrap:{type:`boolean`},container:{type:`boolean`},p:{type:`string`,options:[`none`,`xs`,`sm`,`md`,`lg`,`xl`],control:{type:`select`}},gap:{type:`string`,options:[`none`,`xs`,`sm`,`md`,`lg`,`xl`],control:{type:`select`}},col:{type:`boolean`},reverse:{type:`boolean`},squish:{type:`string`,options:[`horizontal`,`vertical`],control:{type:`select`}},children:{table:{disable:!0}}},parameters:{controls:{expanded:!0}}},C={args:{children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{emphasis:`primary`,children:`Primary`}),(0,x.jsx)(s,{emphasis:`ghost`,children:`Ghost`}),(0,x.jsx)(s,{children:`Default`})]}),p:`md`,gap:`md`,border:!0}},w={render(e){return(0,x.jsxs)(`div`,{className:`bg-main-wash`,style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`var(--m-sp-lg)`},...e,children:[(0,x.jsx)(a,{...e,surface:`ambient`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Ambient`})}),(0,x.jsx)(a,{...e,surface:`primary`,className:`@mode-primary`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Primary`})}),(0,x.jsx)(a,{...e,surface:`secondary`,className:`@mode-primary`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Secondary`})}),(0,x.jsx)(a,{...e,surface:!0,className:`@mode-accent`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Accent`})}),(0,x.jsx)(a,{...e,surface:!0,className:`@mode-neutral`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Neutral`})}),(0,x.jsx)(a,{...e,surface:!0,className:`@mode-attention`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Attention`})}),(0,x.jsx)(a,{...e,surface:!0,className:`@mode-success`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Success`})})]})}},T={render(e){return(0,x.jsxs)(a,{gap:!0,children:[(0,x.jsxs)(a,{dim:!0,children:[`Dimmed non-surface`,(0,x.jsx)(y,{children:`Text`}),(0,x.jsx)(r,{name:`placeholder`})]}),(0,x.jsxs)(a,{surface:`ambient`,dim:!0,children:[`Dimmed box`,(0,x.jsx)(y,{children:`Text`}),(0,x.jsx)(r,{name:`placeholder`})]}),(0,x.jsxs)(a,{surface:`primary`,dim:!0,children:[`Dimmed box`,(0,x.jsx)(y,{children:`Text`}),(0,x.jsx)(r,{name:`placeholder`})]}),(0,x.jsx)(a,{surface:`ambient`,children:(0,x.jsx)(y,{dim:!0,children:`Dimmed text`})})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Surfaces`,`DimComparison`]})))()}D();export{C as Default,T as DimComparison,w as Surfaces,E as __namedExportsOrder,S as default};