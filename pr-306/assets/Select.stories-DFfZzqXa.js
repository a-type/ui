import{l as n,j as e,B as u,dh as l,cl as s,cm as a,b as x}from"./iframe-5VeFnoCW.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const T={title:"Components/Select",component:n,argTypes:{},parameters:{controls:{expanded:!0}},args:{value:"One"}},c={render(r){return e.jsx(u,{full:!0,layout:"center center",style:{minHeight:200},children:e.jsxs(n,{...r,children:[e.jsx(l,{}),e.jsx(s,{children:["One","Two","Three"].map(t=>e.jsx(a,{value:t,children:t},t))})]})})}},o={render(r){return e.jsx(u,{full:!0,layout:"center center",style:{minHeight:200},children:e.jsxs(n,{value:null,children:[e.jsx(l,{placeholder:"Select an option"}),e.jsx(s,{children:["One","Two","Three"].map(t=>e.jsx(a,{value:t,children:t},t))})]})})}},i={render({defaultValue:r,value:t,...h}){return e.jsx(u,{full:!0,layout:"center center",style:{minHeight:200},children:e.jsxs(n,{...h,defaultValue:0,itemToStringLabel:d=>`Item number ${d+1}`,children:[e.jsx(l,{}),e.jsx(s,{children:new Array(50).fill(null).map((d,S)=>{const p=`Item number ${S+1}`;return e.jsx(a,{value:S,children:p},p)})})]})})}},m={render(r){return e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsxs(n,{...r,children:[e.jsx(l,{}),e.jsx(s,{children:["One","Two","Three"].map(t=>e.jsx(a,{value:t,children:t},t))})]}),e.jsx(x,{children:"Button"}),e.jsxs(n,{...r,children:[e.jsx(l,{size:"small"}),e.jsx(s,{children:["One","Two","Three"].map(t=>e.jsx(a,{value:t,children:t},t))})]}),e.jsx(x,{size:"small",children:"Button"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box full layout="center center" style={{
      minHeight: 200
    }}>
                <Select {...args}>
                    <SelectTrigger />
                    <SelectContent>
                        {['One', 'Two', 'Three'].map(item => <SelectItem key={item} value={item}>
                                {item}
                            </SelectItem>)}
                    </SelectContent>
                </Select>
            </Box>;
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box full layout="center center" style={{
      minHeight: 200
    }}>
                <Select value={null}>
                    <SelectTrigger placeholder="Select an option" />
                    <SelectContent>
                        {['One', 'Two', 'Three'].map(item => <SelectItem key={item} value={item}>
                                {item}
                            </SelectItem>)}
                    </SelectContent>
                </Select>
            </Box>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render({
    defaultValue: _,
    value: __,
    ...args
  }) {
    return <Box full layout="center center" style={{
      minHeight: 200
    }}>
                <Select {...args} defaultValue={0} itemToStringLabel={(i: number) => \`Item number \${i + 1}\`}>
                    <SelectTrigger />
                    <SelectContent>
                        {new Array(50).fill(null).map((_, i) => {
            const item = \`Item number \${i + 1}\`;
            return <SelectItem key={item} value={i}>
                                    {item}
                                </SelectItem>;
          })}
                    </SelectContent>
                </Select>
            </Box>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
                <Select {...args}>
                    <SelectTrigger />
                    <SelectContent>
                        {['One', 'Two', 'Three'].map(item => <SelectItem key={item} value={item}>
                                {item}
                            </SelectItem>)}
                    </SelectContent>
                </Select>
                <Button>Button</Button>

                <Select {...args}>
                    <SelectTrigger size="small" />
                    <SelectContent>
                        {['One', 'Two', 'Three'].map(item => <SelectItem key={item} value={item}>
                                {item}
                            </SelectItem>)}
                    </SelectContent>
                </Select>
                <Button size="small">Button</Button>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const f=["Default","Empty","LongListWithItemLabels","CompareSelectAndButton"];export{m as CompareSelectAndButton,c as Default,o as Empty,i as LongListWithItemLabels,f as __namedExportsOrder,T as default};
