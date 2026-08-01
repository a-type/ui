import{r as h,j as e,I as g,B as A,b as y}from"./iframe-CLDG_V9g.js";import{A as G}from"./Autocomplete-COcEK-kR.js";import"./preload-helper-Cq-3Hqs1.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Chip-CJSAOqgM.js";import"./Combobox-BcUIcUZX.js";import"./Input-2qYjJsLH.js";import"./Input.module-C9Yg6vyE.js";import"./stringifyLocale-BMPUsiav.js";import"./useRegisteredLabelId-C4WBTHK7.js";const k={title:"Components/Autocomplete",argTypes:{arrow:{control:"boolean",description:"Whether to show the arrow on the autocomplete popup.",defaultValue:!1},autoHighlight:{control:"boolean",description:"If true, the first item will be automatically highlighted when the list opens.",defaultValue:!1},keepHighlight:{control:"boolean",description:"If true, the highlighted item will be kept when the list is reopened.",defaultValue:!1},highlightItemOnHover:{control:"boolean",description:"If true, items will be highlighted when hovered with the mouse.",defaultValue:!1}},args:{arrow:!1,autoHighlight:!1,keepHighlight:!1,highlightItemOnHover:!0},parameters:{controls:{expanded:!0}}},x=[{id:"apple",label:"Apple"},{id:"banana",label:"Banana"},{id:"cherry",label:"Cherry"},{id:"date",label:"Date"},{id:"elderberry",label:"Elderberry"},{id:"fig",label:"Fig"},{id:"grape",label:"Grape"},{id:"honeydew",label:"Honeydew"}],l=G.create(),n={render({arrow:a,autoHighlight:u,keepHighlight:i,highlightItemOnHover:p}){const[s,r]=h.useState("");return e.jsxs(l,{value:s,onValueChange:r,items:x,autoHighlight:u,keepHighlight:i,highlightItemOnHover:p,children:[e.jsx(l.Input,{icon:e.jsx(g,{name:"food"}),style:{width:200}}),e.jsxs(l.Content,{arrow:a,children:[e.jsx(l.List,{children:o=>e.jsx(l.Item,{value:o.id,children:o.label},o.id)}),e.jsx(l.Empty,{children:"No results found."})]})]})}},b=[{category:"Fruits",items:[{id:"apple",label:"Apple"},{id:"banana",label:"Banana"},{id:"cherry",label:"Cherry"}]},{category:"Berries",items:[{id:"strawberry",label:"Strawberry"},{id:"blueberry",label:"Blueberry"},{id:"raspberry",label:"Raspberry"}]}],t=G.createGrouped(),m={render({arrow:a,autoHighlight:u,keepHighlight:i,highlightItemOnHover:p}){const[s,r]=h.useState(void 0);return e.jsxs(t,{value:s,onValueChange:r,items:b,autoHighlight:u,keepHighlight:i,highlightItemOnHover:p,children:[e.jsx(t.Input,{}),e.jsxs(t.Content,{arrow:a,children:[e.jsx(t.List,{children:o=>e.jsxs(t.Group,{children:[e.jsx(t.GroupLabel,{children:o.category}),e.jsx(t.GroupList,{children:o.items.map(c=>e.jsx(t.Item,{value:c.id,children:c.label},c.id))})]},o.category)}),e.jsx(t.Empty,{children:"No results found."}),e.jsx(t.Separator,{}),e.jsx(t.Details,{children:"Select your favorite fruit or berry."})]})]})}},d={render({autoHighlight:a,keepHighlight:u,highlightItemOnHover:i}){const[p,s]=h.useState(void 0);return e.jsx(t,{value:p,onValueChange:s,items:b,autoHighlight:a,keepHighlight:u,highlightItemOnHover:i,children:e.jsxs(A,{border:!0,p:!0,surface:"ambient",col:!0,children:[e.jsx(t.Input,{disableCaret:!0,style:{width:"100%"},disableClear:!0,children:e.jsx(y,{size:"small",emphasis:"primary",style:{aspectRatio:"1",height:"100%"},children:e.jsx(g,{name:"plus"})})}),e.jsx(t.List,{children:r=>e.jsxs(t.Group,{children:[e.jsx(t.GroupLabel,{children:r.category}),e.jsx(t.GroupList,{children:r.items.map(o=>e.jsx(t.Item,{value:o.id,children:o.label},o.id))})]},r.category)}),e.jsx(t.Empty,{children:"No results found."})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render({
    arrow,
    autoHighlight,
    keepHighlight,
    highlightItemOnHover
  }) {
    const [value, setValue] = useState<string>('');
    return <ExampleAutocomplete value={value} onValueChange={setValue} items={items} autoHighlight={autoHighlight} keepHighlight={keepHighlight} highlightItemOnHover={highlightItemOnHover}>
                <ExampleAutocomplete.Input icon={<Icon name="food" />} style={{
        width: 200
      }} />
                <ExampleAutocomplete.Content arrow={arrow}>
                    <ExampleAutocomplete.List>
                        {item => <ExampleAutocomplete.Item key={item.id} value={item.id}>
                                {item.label}
                            </ExampleAutocomplete.Item>}
                    </ExampleAutocomplete.List>
                    <ExampleAutocomplete.Empty>
                        No results found.
                    </ExampleAutocomplete.Empty>
                </ExampleAutocomplete.Content>
            </ExampleAutocomplete>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render({
    arrow,
    autoHighlight,
    keepHighlight,
    highlightItemOnHover
  }) {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <GroupedAutocomplete value={value} onValueChange={setValue} items={groupedItems} autoHighlight={autoHighlight} keepHighlight={keepHighlight} highlightItemOnHover={highlightItemOnHover}>
                <GroupedAutocomplete.Input />
                <GroupedAutocomplete.Content arrow={arrow}>
                    <GroupedAutocomplete.List>
                        {group => <GroupedAutocomplete.Group key={group.category}>
                                <GroupedAutocomplete.GroupLabel>
                                    {group.category}
                                </GroupedAutocomplete.GroupLabel>
                                <GroupedAutocomplete.GroupList>
                                    {group.items.map(item => <GroupedAutocomplete.Item key={item.id} value={item.id}>
                                            {item.label}
                                        </GroupedAutocomplete.Item>)}
                                </GroupedAutocomplete.GroupList>
                            </GroupedAutocomplete.Group>}
                    </GroupedAutocomplete.List>
                    <GroupedAutocomplete.Empty>
                        No results found.
                    </GroupedAutocomplete.Empty>
                    <GroupedAutocomplete.Separator />
                    <GroupedAutocomplete.Details>
                        Select your favorite fruit or berry.
                    </GroupedAutocomplete.Details>
                </GroupedAutocomplete.Content>
            </GroupedAutocomplete>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render({
    autoHighlight,
    keepHighlight,
    highlightItemOnHover
  }) {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <GroupedAutocomplete value={value} onValueChange={setValue} items={groupedItems} autoHighlight={autoHighlight} keepHighlight={keepHighlight} highlightItemOnHover={highlightItemOnHover}>
                <Box border p surface="ambient" col>
                    <GroupedAutocomplete.Input disableCaret style={{
          width: '100%'
        }} disableClear>
                        <Button size="small" emphasis="primary" style={{
            aspectRatio: '1',
            height: '100%'
          }}>
                            <Icon name="plus" />
                        </Button>
                    </GroupedAutocomplete.Input>
                    <GroupedAutocomplete.List>
                        {group => <GroupedAutocomplete.Group key={group.category}>
                                <GroupedAutocomplete.GroupLabel>
                                    {group.category}
                                </GroupedAutocomplete.GroupLabel>
                                <GroupedAutocomplete.GroupList>
                                    {group.items.map(item => <GroupedAutocomplete.Item key={item.id} value={item.id}>
                                            {item.label}
                                        </GroupedAutocomplete.Item>)}
                                </GroupedAutocomplete.GroupList>
                            </GroupedAutocomplete.Group>}
                    </GroupedAutocomplete.List>
                    <GroupedAutocomplete.Empty>
                        No results found.
                    </GroupedAutocomplete.Empty>
                </Box>
            </GroupedAutocomplete>;
  }
}`,...d.parameters?.docs?.source}}};const S=["Default","Grouped","NotPopover"];export{n as Default,m as Grouped,d as NotPopover,S as __namedExportsOrder,k as default};
