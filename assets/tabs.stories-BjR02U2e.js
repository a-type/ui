import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a,o,r as s,t as c}from"./tabs-zgN05_z4.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),o(),u=n(),d={title:`Components/Tabs`,component:c,argTypes:{color:{control:`select`,options:[`gray`,`primary`]}},parameters:{controls:{expanded:!0},docs:{description:{component:"Compose `Tabs` with `Tabs.List`, `Tabs.Trigger`, and matching `Tabs.Content` values. Use `value` and `onValueChange` to control the active tab.\n\nThe tab list scrolls horizontally when its triggers do not fit."}}}},f={render:e=>{let[t,n]=(0,l.useState)(`tab1`);return(0,u.jsxs)(i,{value:t,onValueChange:n,children:[(0,u.jsxs)(s,{color:e.color,children:[(0,u.jsx)(r,{value:`tab1`,children:`Tab 1`}),(0,u.jsx)(r,{value:`tab2`,children:`Tab 2 (long)`}),(0,u.jsx)(r,{value:`tab3`,children:`Tab 3`})]}),(0,u.jsx)(a,{value:`tab1`,children:(0,u.jsx)(`div`,{children:`Tab 1 content`})}),(0,u.jsx)(a,{value:`tab2`,children:(0,u.jsx)(`div`,{children:`Tab 2 content`})}),(0,u.jsx)(a,{value:`tab3`,children:(0,u.jsx)(`div`,{children:`Tab 3 content`})})]})}},p={render:e=>{let[t,n]=(0,l.useState)(`tab1`);return(0,u.jsxs)(i,{value:t,onValueChange:n,children:[(0,u.jsx)(s,{color:e.color,children:Array.from({length:20}).map((e,t)=>(0,u.jsxs)(r,{value:`tab${t+1}`,children:[`Tab `,t+1]},t))}),Array.from({length:20}).map((e,t)=>(0,u.jsx)(a,{value:`tab${t+1}`,children:(0,u.jsxs)(`div`,{children:[`Tab `,t+1,` content`]})},t))]})}},m=[`Default`,`WithManyTabs`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}}})))()}h();export{f as Default,p as WithManyTabs,m as __namedExportsOrder,d as default};