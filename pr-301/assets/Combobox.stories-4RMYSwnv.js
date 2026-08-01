import{r as d,j as e,I as g,B as v}from"./iframe-BTd0T825.js";import{C as I}from"./Combobox-BWdU9Xcg.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Chip-BWrs9VDD.js";import"./Input-Cq4moBCf.js";import"./Input.module-C9Yg6vyE.js";import"./stringifyLocale-BMPUsiav.js";import"./useRegisteredLabelId-D_dWLzUA.js";const B={title:"Components/Combobox",argTypes:{arrow:{control:"boolean",description:"Whether to show the arrow on the Combobox popup.",defaultValue:!1},autoHighlight:{control:"boolean",description:"If true, the first item will be automatically highlighted when the list opens.",defaultValue:!1},highlightItemOnHover:{control:"boolean",description:"If true, items will be highlighted when hovered with the mouse.",defaultValue:!1},creatable:{control:"boolean",description:"If true, the Combobox will allow creating new items based on user input.",defaultValue:!1}},args:{arrow:!1,autoHighlight:!1,highlightItemOnHover:!0,creatable:!1},parameters:{controls:{expanded:!0}}},b=[{id:"apple",label:"Apple"},{id:"banana",label:"Banana"},{id:"cherry",label:"Cherry"},{id:"date",label:"Date"},{id:"elderberry",label:"Elderberry"},{id:"fig",label:"Fig"},{id:"grape",label:"Grape"},{id:"honeydew",label:"Honeydew"}],t=I.create(),h={render({arrow:i,autoHighlight:u,highlightItemOnHover:m,creatable:n}){const[s,a]=d.useState(null),r=s&&b.includes(s)?b:s?[s,...b]:b;return e.jsxs(t,{value:s,onValueChange:a,items:r,autoHighlight:u,highlightItemOnHover:m,showCreatableItem:n,onCreate:n?l=>{console.log("Creating item:",l),a({id:l,label:l})}:void 0,children:[e.jsx(t.Input,{icon:e.jsx(g,{name:"food"}),style:{width:200},children:n&&e.jsx(t.CreateButton,{size:"small",emphasis:"primary",style:{aspectRatio:"1",height:"100%"},children:e.jsx(g,{name:"plus"})})}),e.jsxs(t.Content,{arrow:i,children:[e.jsx(t.List,{children:l=>e.jsx(t.Item,{value:l,children:l.label},l.id)}),e.jsx(t.Empty,{children:"No results found."})]})]})}},G=[{category:"Fruits",color:"lemon",items:[{id:"apple",label:"Apple"},{id:"banana",label:"Banana"},{id:"cherry",label:"Cherry"}]},{category:"Berries",color:"blueberry",items:[{id:"strawberry",label:"Strawberry"},{id:"blueberry",label:"Blueberry"},{id:"raspberry",label:"Raspberry"}]}],o=I.createGrouped(),x={render({arrow:i,autoHighlight:u,highlightItemOnHover:m,creatable:n}){const[s,a]=d.useState(null),[r,l]=d.useState("");return e.jsxs(o,{value:s,onValueChange:a,inputValue:r,onInputValueChange:l,items:G,autoHighlight:u,highlightItemOnHover:m,onCreate:n?p=>alert(`Create item: ${p}`):void 0,children:[e.jsx(o.Input,{placeholder:"Select an item..."}),e.jsxs(o.Content,{arrow:i,children:[e.jsx(o.List,{children:p=>e.jsxs(o.Group,{children:[e.jsx(o.GroupLabel,{children:p.category}),e.jsx(o.GroupList,{children:p.items.map(y=>e.jsx(o.Item,{value:y,className:`@mode-${p.color}`,children:y.label},y.id))})]},p.category)}),e.jsx(o.Empty,{children:n?e.jsxs("div",{children:[e.jsx(g,{name:"enterKey"}),' Create "',r,'"']}):"No results found."}),e.jsx(o.Separator,{}),e.jsxs(I.Details,{children:["Select your favorite fruit or berry.",n?" Enter creates a new item.":""]})]})]})}},c={render({autoHighlight:i,highlightItemOnHover:u,creatable:m}){const[n,s]=d.useState(null);return e.jsx(o,{value:n,onValueChange:s,items:G,autoHighlight:i,highlightItemOnHover:u,onCreate:m?a=>alert(`Create item: ${a}`):void 0,children:e.jsxs(v,{border:!0,p:!0,surface:"ambient",col:!0,items:"stretch",children:[e.jsx(o.Input,{style:{width:"100%"},disableCaret:!0,disableClear:!0,children:e.jsx(o.CreateButton,{size:"small",emphasis:"primary",style:{aspectRatio:"1",height:"100%"},children:e.jsx(g,{name:"plus"})})}),e.jsx(o.List,{children:a=>e.jsxs(o.Group,{children:[e.jsx(o.GroupLabel,{children:a.category}),e.jsx(o.GroupList,{children:a.items.map(r=>e.jsx(o.Item,{value:r,children:r.label},r.id))})]},a.category)}),e.jsx(o.Empty,{children:"No results found."})]})})}},C={render({arrow:i,autoHighlight:u,highlightItemOnHover:m,creatable:n}){const[s,a]=d.useState([]);return e.jsxs(t.Multi,{multiple:!0,value:s,onValueChange:a,items:b,autoHighlight:u,highlightItemOnHover:m,showCreatableItem:n,children:[e.jsx(t.Chips,{style:{width:300},children:e.jsx(t.MultiValue,{children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t.ChipsList,{children:r.map(l=>e.jsx(t.Chip,{color:"accent",children:l.label},l.id))}),e.jsx(t.Input,{})]})})}),e.jsxs(t.Content,{arrow:i,children:[e.jsx(t.List,{render:e.jsx(t.GroupItemList,{}),children:r=>e.jsx(t.GroupItem,{value:r,children:r.label},r.id)}),e.jsx(t.Empty,{children:"No results found."})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render({
    arrow,
    autoHighlight,
    highlightItemOnHover,
    creatable
  }) {
    const [value, setValue] = useState<Item | null>(null);
    const allItems = value && items.includes(value) ? items : value ? [value, ...items] : items;
    return <ExampleCombobox value={value} onValueChange={setValue} items={allItems} autoHighlight={autoHighlight} highlightItemOnHover={highlightItemOnHover} showCreatableItem={creatable} onCreate={creatable ? (value: string) => {
      console.log('Creating item:', value);
      setValue({
        id: value,
        label: value
      });
    } : undefined}>
                <ExampleCombobox.Input icon={<Icon name="food" />} style={{
        width: 200
      }}>
                    {creatable && <ExampleCombobox.CreateButton size="small" emphasis="primary" style={{
          aspectRatio: '1',
          height: '100%'
        }}>
                            <Icon name="plus" />
                        </ExampleCombobox.CreateButton>}
                </ExampleCombobox.Input>
                <ExampleCombobox.Content arrow={arrow}>
                    <ExampleCombobox.List>
                        {item => <ExampleCombobox.Item key={item.id} value={item}>
                                {item.label}
                            </ExampleCombobox.Item>}
                    </ExampleCombobox.List>
                    <ExampleCombobox.Empty>No results found.</ExampleCombobox.Empty>
                </ExampleCombobox.Content>
            </ExampleCombobox>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render({
    arrow,
    autoHighlight,
    highlightItemOnHover,
    creatable
  }) {
    const [value, setValue] = useState<Item | null>(null);
    const [input, setInput] = useState<string>('');
    return <GroupedCombobox value={value} onValueChange={setValue} inputValue={input} onInputValueChange={setInput} items={groupedItems} autoHighlight={autoHighlight} highlightItemOnHover={highlightItemOnHover} onCreate={creatable ? (value: string) => alert(\`Create item: \${value}\`) : undefined}>
                <GroupedCombobox.Input placeholder="Select an item..." />
                <GroupedCombobox.Content arrow={arrow}>
                    <GroupedCombobox.List>
                        {group => <GroupedCombobox.Group key={group.category}>
                                <GroupedCombobox.GroupLabel>
                                    {group.category}
                                </GroupedCombobox.GroupLabel>
                                <GroupedCombobox.GroupList>
                                    {group.items.map(item => <GroupedCombobox.Item key={item.id} value={item} className={\`@mode-\${group.color}\`}>
                                            {item.label}
                                        </GroupedCombobox.Item>)}
                                </GroupedCombobox.GroupList>
                            </GroupedCombobox.Group>}
                    </GroupedCombobox.List>
                    <GroupedCombobox.Empty>
                        {creatable ? <div>
                                <Icon name="enterKey" /> Create "{input}"
                            </div> : \`No results found.\`}
                    </GroupedCombobox.Empty>
                    <GroupedCombobox.Separator />
                    <Combobox.Details>
                        Select your favorite fruit or berry.
                        {creatable ? ' Enter creates a new item.' : ''}
                    </Combobox.Details>
                </GroupedCombobox.Content>
            </GroupedCombobox>;
  }
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render({
    autoHighlight,
    highlightItemOnHover,
    creatable
  }) {
    const [value, setValue] = useState<Item | null>(null);
    return <GroupedCombobox value={value} onValueChange={setValue} items={groupedItems} autoHighlight={autoHighlight} highlightItemOnHover={highlightItemOnHover} onCreate={creatable ? (value: string) => alert(\`Create item: \${value}\`) : undefined}>
                <Box border p surface="ambient" col items="stretch">
                    <GroupedCombobox.Input style={{
          width: '100%'
        }} disableCaret disableClear>
                        <GroupedCombobox.CreateButton size="small" emphasis="primary" style={{
            aspectRatio: '1',
            height: '100%'
          }}>
                            <Icon name="plus" />
                        </GroupedCombobox.CreateButton>
                    </GroupedCombobox.Input>
                    <GroupedCombobox.List>
                        {group => <GroupedCombobox.Group key={group.category}>
                                <GroupedCombobox.GroupLabel>
                                    {group.category}
                                </GroupedCombobox.GroupLabel>
                                <GroupedCombobox.GroupList>
                                    {group.items.map(item => <GroupedCombobox.Item key={item.id} value={item}>
                                            {item.label}
                                        </GroupedCombobox.Item>)}
                                </GroupedCombobox.GroupList>
                            </GroupedCombobox.Group>}
                    </GroupedCombobox.List>
                    <GroupedCombobox.Empty>No results found.</GroupedCombobox.Empty>
                </Box>
            </GroupedCombobox>;
  }
}`,...c.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render({
    arrow,
    autoHighlight,
    highlightItemOnHover,
    creatable
  }) {
    const [value, setValue] = useState<Item[]>([]);
    return <ExampleCombobox.Multi multiple value={value} onValueChange={setValue} items={items} autoHighlight={autoHighlight} highlightItemOnHover={highlightItemOnHover} showCreatableItem={creatable}>
                <ExampleCombobox.Chips style={{
        width: 300
      }}>
                    <ExampleCombobox.MultiValue>
                        {items => <>
                                <ExampleCombobox.ChipsList>
                                    {items.map(item => <ExampleCombobox.Chip key={item.id} color={'accent'}>
                                            {item.label}
                                        </ExampleCombobox.Chip>)}
                                </ExampleCombobox.ChipsList>
                                <ExampleCombobox.Input />
                            </>}
                    </ExampleCombobox.MultiValue>
                </ExampleCombobox.Chips>
                <ExampleCombobox.Content arrow={arrow}>
                    <ExampleCombobox.List render={<ExampleCombobox.GroupItemList />}>
                        {item => <ExampleCombobox.GroupItem key={item.id} value={item}>
                                {item.label}
                            </ExampleCombobox.GroupItem>}
                    </ExampleCombobox.List>
                    <ExampleCombobox.Empty>No results found.</ExampleCombobox.Empty>
                </ExampleCombobox.Content>
            </ExampleCombobox.Multi>;
  }
}`,...C.parameters?.docs?.source}}};const N=["Default","Grouped","NotPopover","MultiSelect"];export{h as Default,x as Grouped,C as MultiSelect,c as NotPopover,N as __namedExportsOrder,B as default};
