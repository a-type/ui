import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Button-fKwnlsy8.js";import{n as a,t as o}from"./Autocomplete-BcriYEEm.js";import{n as s,t as c}from"./Icon-CPvdzLAz.js";import{n as l,t as u}from"./Box-CFmvJLRd.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d=t(),l(),r(),s(),a(),f=n(),p={title:`Components/Autocomplete`,argTypes:{arrow:{control:`boolean`,description:`Whether to show the arrow on the autocomplete popup.`,defaultValue:!1},autoHighlight:{control:`boolean`,description:`If true, the first item will be automatically highlighted when the list opens.`,defaultValue:!1},keepHighlight:{control:`boolean`,description:`If true, the highlighted item will be kept when the list is reopened.`,defaultValue:!1},highlightItemOnHover:{control:`boolean`,description:`If true, items will be highlighted when hovered with the mouse.`,defaultValue:!1}},args:{arrow:!1,autoHighlight:!1,keepHighlight:!1,highlightItemOnHover:!0},parameters:{controls:{expanded:!0}}},m=[{id:`apple`,label:`Apple`},{id:`banana`,label:`Banana`},{id:`cherry`,label:`Cherry`},{id:`date`,label:`Date`},{id:`elderberry`,label:`Elderberry`},{id:`fig`,label:`Fig`},{id:`grape`,label:`Grape`},{id:`honeydew`,label:`Honeydew`}],h=o.create(),g={render({arrow:e,autoHighlight:t,keepHighlight:n,highlightItemOnHover:r}){let[i,a]=(0,d.useState)(``);return(0,f.jsxs)(h,{value:i,onValueChange:a,items:m,autoHighlight:t,keepHighlight:n,highlightItemOnHover:r,children:[(0,f.jsx)(h.Input,{icon:(0,f.jsx)(c,{name:`food`}),style:{width:200}}),(0,f.jsxs)(h.Content,{arrow:e,children:[(0,f.jsx)(h.List,{children:e=>(0,f.jsx)(h.Item,{value:e.id,children:e.label},e.id)}),(0,f.jsx)(h.Empty,{children:`No results found.`})]})]})}},_=[{category:`Fruits`,items:[{id:`apple`,label:`Apple`},{id:`banana`,label:`Banana`},{id:`cherry`,label:`Cherry`}]},{category:`Berries`,items:[{id:`strawberry`,label:`Strawberry`},{id:`blueberry`,label:`Blueberry`},{id:`raspberry`,label:`Raspberry`}]}],v=o.createGrouped(),y={render({arrow:e,autoHighlight:t,keepHighlight:n,highlightItemOnHover:r}){let[i,a]=(0,d.useState)(void 0);return(0,f.jsxs)(v,{value:i,onValueChange:a,items:_,autoHighlight:t,keepHighlight:n,highlightItemOnHover:r,children:[(0,f.jsx)(v.Input,{}),(0,f.jsxs)(v.Content,{arrow:e,children:[(0,f.jsx)(v.List,{children:e=>(0,f.jsxs)(v.Group,{children:[(0,f.jsx)(v.GroupLabel,{children:e.category}),(0,f.jsx)(v.GroupList,{children:e.items.map(e=>(0,f.jsx)(v.Item,{value:e.id,children:e.label},e.id))})]},e.category)}),(0,f.jsx)(v.Empty,{children:`No results found.`}),(0,f.jsx)(v.Separator,{}),(0,f.jsx)(v.Details,{children:`Select your favorite fruit or berry.`})]})]})}},b={render({autoHighlight:e,keepHighlight:t,highlightItemOnHover:n}){let[r,a]=(0,d.useState)(void 0);return(0,f.jsx)(v,{value:r,onValueChange:a,items:_,autoHighlight:e,keepHighlight:t,highlightItemOnHover:n,children:(0,f.jsxs)(u,{border:!0,p:!0,surface:`ambient`,col:!0,children:[(0,f.jsx)(v.Input,{disableCaret:!0,style:{width:`100%`},disableClear:!0,children:(0,f.jsx)(i,{size:`small`,emphasis:`primary`,style:{aspectRatio:`1`,height:`100%`},children:(0,f.jsx)(c,{name:`plus`})})}),(0,f.jsx)(v.List,{children:e=>(0,f.jsxs)(v.Group,{children:[(0,f.jsx)(v.GroupLabel,{children:e.category}),(0,f.jsx)(v.GroupList,{children:e.items.map(e=>(0,f.jsx)(v.Item,{value:e.id,children:e.label},e.id))})]},e.category)}),(0,f.jsx)(v.Empty,{children:`No results found.`})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Grouped`,`NotPopover`]})))()}S();export{g as Default,y as Grouped,b as NotPopover,x as __namedExportsOrder,p as default};