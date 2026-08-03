import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,n as a,o,r as s}from"./tabs-CKd9-E3H.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{c=t(),o(),l=n(),u={title:`Components/Tabs`,argTypes:{color:{control:`select`,options:[`gray`,`primary`]}},parameters:{controls:{expanded:!0}}},d={render:e=>{let[t,n]=(0,c.useState)(`tab1`);return(0,l.jsxs)(i,{value:t,onValueChange:n,children:[(0,l.jsxs)(s,{color:e.color,children:[(0,l.jsx)(r,{value:`tab1`,children:`Tab 1`}),(0,l.jsx)(r,{value:`tab2`,children:`Tab 2 (long)`}),(0,l.jsx)(r,{value:`tab3`,children:`Tab 3`})]}),(0,l.jsx)(a,{value:`tab1`,children:(0,l.jsx)(`div`,{children:`Tab 1 content`})}),(0,l.jsx)(a,{value:`tab2`,children:(0,l.jsx)(`div`,{children:`Tab 2 content`})}),(0,l.jsx)(a,{value:`tab3`,children:(0,l.jsx)(`div`,{children:`Tab 3 content`})})]})}},f={render:e=>{let[t,n]=(0,c.useState)(`tab1`);return(0,l.jsxs)(i,{value:t,onValueChange:n,children:[(0,l.jsx)(s,{color:e.color,children:Array.from({length:20}).map((e,t)=>(0,l.jsxs)(r,{value:`tab${t+1}`,children:[`Tab `,t+1]},t))}),Array.from({length:20}).map((e,t)=>(0,l.jsx)(a,{value:`tab${t+1}`,children:(0,l.jsxs)(`div`,{children:[`Tab `,t+1,` content`]})},t))]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('tab1');
    return <TabsRoot value={value} onValueChange={setValue}>
                <TabsList color={args.color}>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2 (long)</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                    <div>Tab 1 content</div>
                </TabsContent>
                <TabsContent value="tab2">
                    <div>Tab 2 content</div>
                </TabsContent>
                <TabsContent value="tab3">
                    <div>Tab 3 content</div>
                </TabsContent>
            </TabsRoot>;
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('tab1');
    return <TabsRoot value={value} onValueChange={setValue}>
                <TabsList color={args.color}>
                    {Array.from({
          length: 20
        }).map((_, i) => <TabsTrigger key={i} value={\`tab\${i + 1}\`}>
                            Tab {i + 1}
                        </TabsTrigger>)}
                </TabsList>
                {Array.from({
        length: 20
      }).map((_, i) => <TabsContent key={i} value={\`tab\${i + 1}\`}>
                        <div>Tab {i + 1} content</div>
                    </TabsContent>)}
            </TabsRoot>;
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`Default`,`WithManyTabs`]})))()}m();export{d as Default,f as WithManyTabs,p as __namedExportsOrder,u as default};