import{r as i,j as a}from"./iframe-b29PHh9x.js";import{T as c,a as T,b as s,c as n}from"./tabs-CI-EJ2F5.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./useIsHydrating-u7dD7dE2.js";const h={title:"Components/Tabs",argTypes:{color:{control:"select",options:["gray","primary"]}},parameters:{controls:{expanded:!0}}},t={render:o=>{const[l,b]=i.useState("tab1");return a.jsxs(c,{value:l,onValueChange:b,children:[a.jsxs(T,{color:o.color,children:[a.jsx(s,{value:"tab1",children:"Tab 1"}),a.jsx(s,{value:"tab2",children:"Tab 2 (long)"}),a.jsx(s,{value:"tab3",children:"Tab 3"})]}),a.jsx(n,{value:"tab1",children:a.jsx("div",{children:"Tab 1 content"})}),a.jsx(n,{value:"tab2",children:a.jsx("div",{children:"Tab 2 content"})}),a.jsx(n,{value:"tab3",children:a.jsx("div",{children:"Tab 3 content"})})]})}},r={render:o=>{const[l,b]=i.useState("tab1");return a.jsxs(c,{value:l,onValueChange:b,children:[a.jsx(T,{color:o.color,children:Array.from({length:20}).map((u,e)=>a.jsxs(s,{value:`tab${e+1}`,children:["Tab ",e+1]},e))}),Array.from({length:20}).map((u,e)=>a.jsx(n,{value:`tab${e+1}`,children:a.jsxs("div",{children:["Tab ",e+1," content"]})},e))]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};const x=["Default","WithManyTabs"];export{t as Default,r as WithManyTabs,x as __namedExportsOrder,h as default};
