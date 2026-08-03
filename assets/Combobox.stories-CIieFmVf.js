import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./Combobox-Ds8ptwxK.js";import{n as a,t as o}from"./Icon-CPvdzLAz.js";import{n as s,t as c}from"./Box-CFmvJLRd.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=t(),s(),a(),r(),u=n(),d={title:`Components/Combobox`,argTypes:{arrow:{control:`boolean`,description:`Whether to show the arrow on the Combobox popup.`,defaultValue:!1},autoHighlight:{control:`boolean`,description:`If true, the first item will be automatically highlighted when the list opens.`,defaultValue:!1},highlightItemOnHover:{control:`boolean`,description:`If true, items will be highlighted when hovered with the mouse.`,defaultValue:!1},creatable:{control:`boolean`,description:`If true, the Combobox will allow creating new items based on user input.`,defaultValue:!1}},args:{arrow:!1,autoHighlight:!1,highlightItemOnHover:!0,creatable:!1},parameters:{controls:{expanded:!0}}},f=[{id:`apple`,label:`Apple`},{id:`banana`,label:`Banana`},{id:`cherry`,label:`Cherry`},{id:`date`,label:`Date`},{id:`elderberry`,label:`Elderberry`},{id:`fig`,label:`Fig`},{id:`grape`,label:`Grape`},{id:`honeydew`,label:`Honeydew`}],p=i.create(),m={render({arrow:e,autoHighlight:t,highlightItemOnHover:n,creatable:r}){let[i,a]=(0,l.useState)(null),s=i&&f.includes(i)?f:i?[i,...f]:f;return(0,u.jsxs)(p,{value:i,onValueChange:a,items:s,autoHighlight:t,highlightItemOnHover:n,showCreatableItem:r,onCreate:r?e=>{console.log(`Creating item:`,e),a({id:e,label:e})}:void 0,children:[(0,u.jsx)(p.Input,{icon:(0,u.jsx)(o,{name:`food`}),style:{width:200},children:r&&(0,u.jsx)(p.CreateButton,{size:`small`,emphasis:`primary`,style:{aspectRatio:`1`,height:`100%`},children:(0,u.jsx)(o,{name:`plus`})})}),(0,u.jsxs)(p.Content,{arrow:e,children:[(0,u.jsx)(p.List,{children:e=>(0,u.jsx)(p.Item,{value:e,children:e.label},e.id)}),(0,u.jsx)(p.Empty,{children:`No results found.`})]})]})}},h=[{category:`Fruits`,color:`lemon`,items:[{id:`apple`,label:`Apple`},{id:`banana`,label:`Banana`},{id:`cherry`,label:`Cherry`}]},{category:`Berries`,color:`blueberry`,items:[{id:`strawberry`,label:`Strawberry`},{id:`blueberry`,label:`Blueberry`},{id:`raspberry`,label:`Raspberry`}]}],g=i.createGrouped(),_={render({arrow:e,autoHighlight:t,highlightItemOnHover:n,creatable:r}){let[a,s]=(0,l.useState)(null),[c,d]=(0,l.useState)(``);return(0,u.jsxs)(g,{value:a,onValueChange:s,inputValue:c,onInputValueChange:d,items:h,autoHighlight:t,highlightItemOnHover:n,onCreate:r?e=>alert(`Create item: ${e}`):void 0,children:[(0,u.jsx)(g.Input,{placeholder:`Select an item...`}),(0,u.jsxs)(g.Content,{arrow:e,children:[(0,u.jsx)(g.List,{children:e=>(0,u.jsxs)(g.Group,{children:[(0,u.jsx)(g.GroupLabel,{children:e.category}),(0,u.jsx)(g.GroupList,{children:e.items.map(t=>(0,u.jsx)(g.Item,{value:t,className:`@mode-${e.color}`,children:t.label},t.id))})]},e.category)}),(0,u.jsx)(g.Empty,{children:r?(0,u.jsxs)(`div`,{children:[(0,u.jsx)(o,{name:`enterKey`}),` Create "`,c,`"`]}):`No results found.`}),(0,u.jsx)(g.Separator,{}),(0,u.jsxs)(i.Details,{children:[`Select your favorite fruit or berry.`,r?` Enter creates a new item.`:``]})]})]})}},v={render({autoHighlight:e,highlightItemOnHover:t,creatable:n}){let[r,i]=(0,l.useState)(null);return(0,u.jsx)(g,{value:r,onValueChange:i,items:h,autoHighlight:e,highlightItemOnHover:t,onCreate:n?e=>alert(`Create item: ${e}`):void 0,children:(0,u.jsxs)(c,{border:!0,p:!0,surface:`ambient`,col:!0,items:`stretch`,children:[(0,u.jsx)(g.Input,{style:{width:`100%`},disableCaret:!0,disableClear:!0,children:(0,u.jsx)(g.CreateButton,{size:`small`,emphasis:`primary`,style:{aspectRatio:`1`,height:`100%`},children:(0,u.jsx)(o,{name:`plus`})})}),(0,u.jsx)(g.List,{children:e=>(0,u.jsxs)(g.Group,{children:[(0,u.jsx)(g.GroupLabel,{children:e.category}),(0,u.jsx)(g.GroupList,{children:e.items.map(e=>(0,u.jsx)(g.Item,{value:e,children:e.label},e.id))})]},e.category)}),(0,u.jsx)(g.Empty,{children:`No results found.`})]})})}},y={render({arrow:e,autoHighlight:t,highlightItemOnHover:n,creatable:r}){let[i,a]=(0,l.useState)([]);return(0,u.jsxs)(p.Multi,{multiple:!0,value:i,onValueChange:a,items:f,autoHighlight:t,highlightItemOnHover:n,showCreatableItem:r,children:[(0,u.jsx)(p.Chips,{style:{width:300},children:(0,u.jsx)(p.MultiValue,{children:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.ChipsList,{children:e.map(e=>(0,u.jsx)(p.Chip,{color:`accent`,children:e.label},e.id))}),(0,u.jsx)(p.Input,{})]})})}),(0,u.jsxs)(p.Content,{arrow:e,children:[(0,u.jsx)(p.List,{render:(0,u.jsx)(p.GroupItemList,{}),children:e=>(0,u.jsx)(p.GroupItem,{value:e,children:e.label},e.id)}),(0,u.jsx)(p.Empty,{children:`No results found.`})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Grouped`,`NotPopover`,`MultiSelect`]})))()}x();export{m as Default,_ as Grouped,y as MultiSelect,v as NotPopover,b as __namedExportsOrder,d as default};