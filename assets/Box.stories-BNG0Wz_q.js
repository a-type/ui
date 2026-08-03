import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Button-fKwnlsy8.js";import{n as i,t as a}from"./Checkbox-KLw8qz4U.js";import{n as o,t as s}from"./Progress-2IRqhZNC.js";import{n as c,t as l}from"./Slider-9W_nNPSt.js";import{n as u,t as d}from"./Switch-CQ67x5MV.js";import{n as f,t as p}from"./toggleGroup-DU7yWh3z.js";import{n as m,t as h}from"./Icon-CPvdzLAz.js";import{n as g,t as _}from"./Box-CFmvJLRd.js";import{c as v,s as y}from"./typography-SS0vbNkf.js";function b({name:e}){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{children:[e,` Surface`]}),(0,x.jsxs)(_,{gap:!0,layout:`center start`,children:[(0,x.jsx)(r,{emphasis:`primary`,children:`Primary`}),(0,x.jsx)(r,{emphasis:`ghost`,children:`Ghost`}),(0,x.jsx)(a,{checked:!0}),(0,x.jsx)(d,{checked:!0})]}),(0,x.jsx)(s,{value:50,style:{width:`100%`}}),(0,x.jsxs)(p,{defaultValue:[`one`],children:[(0,x.jsx)(p.Item,{value:`one`,children:`One`}),(0,x.jsx)(p.Item,{value:`two`,children:`Two`})]}),(0,x.jsx)(l,{defaultValue:[30],style:{width:`100%`}})]})}var x,S,C,w,T,E;function D(){return(D=e((()=>{n(),i(),m(),o(),c(),u(),f(),v(),g(),x=t(),S={title:`Components/Box`,component:_,argTypes:{border:{type:`boolean`,defaultValue:!1},surface:{type:`boolean`,defaultValue:!1},elevated:{type:`string`,options:[`sm`,`md`,`lg`,`xl`,`-sm`,`-md`,`-lg`,`-xl`,`sm-up`,`md-up`,`lg-up`,`xl-up`,`-sm-up`,`-md-up`,`-lg-up`,`-xl-up`],control:{type:`select`}},layout:{type:`string`},wrap:{type:`boolean`},container:{type:`boolean`},p:{type:`string`,options:[`none`,`xs`,`sm`,`md`,`lg`,`xl`],control:{type:`select`}},gap:{type:`string`,options:[`none`,`xs`,`sm`,`md`,`lg`,`xl`],control:{type:`select`}},col:{type:`boolean`},reverse:{type:`boolean`},squish:{type:`string`,options:[`horizontal`,`vertical`],control:{type:`select`}},children:{table:{disable:!0}}},parameters:{controls:{expanded:!0}}},C={args:{children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r,{emphasis:`primary`,children:`Primary`}),(0,x.jsx)(r,{emphasis:`ghost`,children:`Ghost`}),(0,x.jsx)(r,{children:`Default`})]}),p:`md`,gap:`md`,border:!0}},w={render(e){return(0,x.jsxs)(`div`,{className:`bg-main-wash`,style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`var(--m-sp-lg)`},...e,children:[(0,x.jsx)(_,{...e,surface:`ambient`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Ambient`})}),(0,x.jsx)(_,{...e,surface:`primary`,className:`@mode-primary`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Primary`})}),(0,x.jsx)(_,{...e,surface:`secondary`,className:`@mode-primary`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Secondary`})}),(0,x.jsx)(_,{...e,surface:!0,className:`@mode-accent`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Accent`})}),(0,x.jsx)(_,{...e,surface:!0,className:`@mode-neutral`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Neutral`})}),(0,x.jsx)(_,{...e,surface:!0,className:`@mode-attention`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Attention`})}),(0,x.jsx)(_,{...e,surface:!0,className:`@mode-success`,p:`lg`,col:!0,gap:!0,children:(0,x.jsx)(b,{name:`Success`})})]})}},T={render(e){return(0,x.jsxs)(_,{gap:!0,children:[(0,x.jsxs)(_,{dim:!0,children:[`Dimmed non-surface`,(0,x.jsx)(y,{children:`Text`}),(0,x.jsx)(h,{name:`placeholder`})]}),(0,x.jsxs)(_,{surface:`ambient`,dim:!0,children:[`Dimmed box`,(0,x.jsx)(y,{children:`Text`}),(0,x.jsx)(h,{name:`placeholder`})]}),(0,x.jsxs)(_,{surface:`primary`,dim:!0,children:[`Dimmed box`,(0,x.jsx)(y,{children:`Text`}),(0,x.jsx)(h,{name:`placeholder`})]}),(0,x.jsx)(_,{surface:`ambient`,children:(0,x.jsx)(y,{dim:!0,children:`Dimmed text`})})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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