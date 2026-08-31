import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Box-AeM6K2f6.js";import{n as i,t as a}from"./Button-BC1L4JFj.js";import{a as o,i as s,n as c,r as l,t as u}from"./Select-NVP1BKT6.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o(),d=t(),f={title:`Components/Select`,component:u,argTypes:{},parameters:{controls:{expanded:!0}},args:{value:`One`}},p={render(e){return(0,d.jsx)(r,{full:!0,layout:`center center`,style:{minHeight:200},children:(0,d.jsxs)(u,{...e,children:[(0,d.jsx)(s,{}),(0,d.jsx)(c,{children:[`One`,`Two`,`Three`].map(e=>(0,d.jsx)(l,{value:e,children:e},e))})]})})}},m={render(e){return(0,d.jsx)(r,{full:!0,layout:`center center`,style:{minHeight:200},children:(0,d.jsxs)(u,{value:null,children:[(0,d.jsx)(s,{placeholder:`Select an option`}),(0,d.jsx)(c,{children:[`One`,`Two`,`Three`].map(e=>(0,d.jsx)(l,{value:e,children:e},e))})]})})}},h={render({defaultValue:e,value:t,...n}){return(0,d.jsx)(r,{full:!0,layout:`center center`,style:{minHeight:200},children:(0,d.jsxs)(u,{...n,defaultValue:0,itemToStringLabel:e=>`Item number ${e+1}`,children:[(0,d.jsx)(s,{}),(0,d.jsx)(c,{children:Array(50).fill(null).map((e,t)=>{let n=`Item number ${t+1}`;return(0,d.jsx)(l,{value:t,children:n},n)})})]})})}},g={render(e){return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,d.jsxs)(u,{...e,children:[(0,d.jsx)(s,{}),(0,d.jsx)(c,{children:[`One`,`Two`,`Three`].map(e=>(0,d.jsx)(l,{value:e,children:e},e))})]}),(0,d.jsx)(a,{children:`Button`}),(0,d.jsxs)(u,{...e,children:[(0,d.jsx)(s,{size:`small`}),(0,d.jsx)(c,{children:[`One`,`Two`,`Three`].map(e=>(0,d.jsx)(l,{value:e,children:e},e))})]}),(0,d.jsx)(a,{size:`small`,children:`Button`})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Empty`,`LongListWithItemLabels`,`CompareSelectAndButton`]})))()}v();export{g as CompareSelectAndButton,p as Default,m as Empty,h as LongListWithItemLabels,_ as __namedExportsOrder,f as default};