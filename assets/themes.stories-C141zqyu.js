import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{n,r,t as i}from"./props-BMS6i8ui.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{a as o,n as ee,o as te,t as s}from"./Button-fKwnlsy8.js";import{r as ne,t as re}from"./Tooltip-HebT17o6.js";import{o as ie,t as c}from"./tabs-CKd9-E3H.js";import{n as ae,t as oe}from"./Avatar-DrwNkYyL.js";import{n as l,t as se}from"./Checkbox-KLw8qz4U.js";import{a as ce,t as u}from"./Select-CRleDLX6.js";import{n as le,t as d}from"./contextMenu-dWXbNmI3.js";import{n as ue,t as f}from"./Dialog-_jozKxl7.js";import{n as de,t as fe}from"./Input-D3GMLuze.js";import{n as pe,t as me}from"./Progress-2IRqhZNC.js";import{n as he,t as ge}from"./Slider-9W_nNPSt.js";import{n as _e,t as p}from"./toggleGroup-DU7yWh3z.js";import{n as ve,t as m}from"./Icon-CPvdzLAz.js";import{n as ye,t as h}from"./Box-CFmvJLRd.js";import{c as be,i as g,n as xe,o as _,r as Se}from"./typography-SS0vbNkf.js";import{i as Ce,n as we,r as Te,t as v}from"./ActionButton-BCKMJtca.js";import{n as Ee,t as y}from"./Chip-BG5K9-rv.js";import{d as b,t as x}from"./Card-CFQUcECo.js";import{n as S,t as C}from"./DateRangePicker-DagAN_VB.js";import{n as w,t as T}from"./TextArea-bxaEiXlE.js";import{n as E,t as D}from"./HorizontalList-7ALzBzC4.js";import{n as De,t as Oe}from"./ImageUploader-PyIIWpG6.js";import{i as ke,n as O,r as Ae,t as je}from"./PageContent-DA-mxCBf.js";import{a as k,c as Me,i as A,l as Ne,n as j,o as M,r as N,s as Pe,u as Fe}from"./NavBar-Chy1s8H9.js";import{n as Ie,t as Le}from"./Note-DYqGM4Zk.js";import{n as Re,t as P}from"./skeletons-B7Ra_L7e.js";function F({children:e,count:t,size:n=24,className:r,style:i,...a}){let o=t>0?n+(t-1)*(n*2/3):0;return(0,z.jsx)(B.Provider,{value:{size:n},children:(0,z.jsx)(`div`,{className:r,style:{...i,position:`relative`,flexBasis:`auto`,width:o,minWidth:o,height:n},...a,children:e})})}function I({index:e,children:t,className:n,style:r}){let{size:i}=(0,R.useContext)(B);return(0,z.jsx)(`div`,{className:n,style:{...r,position:`absolute`,left:e===0?0:e*(i*2/3),zIndex:e,top:0},children:t})}function L({index:e,className:t,...n}){let{size:r}=(0,R.useContext)(B);return(0,z.jsx)(I,{index:e,className:t,children:(0,z.jsx)(oe,{style:{width:r,height:r},...n})})}var R,z,B,V;function H(){return(H=e((()=>{R=t(),ae(),z=a(),B=(0,R.createContext)({size:24}),V=Object.assign(F,{Item:L,ItemRoot:I}),F.__docgenInfo={description:``,methods:[],displayName:`AvatarListRoot`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},count:{required:!0,tsType:{name:`number`},description:``},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`24`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},I.__docgenInfo={description:``,methods:[],displayName:`AvatarListItemRoot`,props:{index:{required:!0,tsType:{name:`number`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},L.__docgenInfo={description:``,methods:[],displayName:`AvatarListItem`,props:{index:{required:!0,tsType:{name:`number`},description:``},popIn:{required:!1,tsType:{name:`boolean`},description:`@deprecated`},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},imageSrc:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},name:{required:!1,tsType:{name:`string`},description:``},crossOrigin:{required:!1,tsType:{name:`HTMLProps['crossOrigin']`,raw:`HTMLProps<HTMLImageElement>['crossOrigin']`},description:``},size:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``}},composes:[`BaseAvatarProps`]}})))()}var U,W;function G(){return(G=e((()=>{U=`_grid_12zgz_1`,W={grid:U}})))()}function K({className:e,style:t}){let n=new Date;return n.setDate(n.getDate()+7),(0,J.jsxs)(Ae,{"data-testid":`demo`,className:e,style:t,children:[(0,J.jsx)(je,{children:(0,J.jsxs)(`div`,{className:W.grid,children:[(0,J.jsxs)(h,{gap:!0,wrap:!0,p:!0,children:[(0,J.jsx)(s,{emphasis:`primary`,children:`Primary`}),(0,J.jsx)(s,{className:`@mode-accent`,emphasis:`primary`,children:`Accent`}),(0,J.jsx)(s,{children:`Default`}),(0,J.jsx)(s,{className:`@mode-inverted`,children:`Contrast`}),(0,J.jsx)(s,{className:`@mode-attention`,emphasis:`primary`,children:`Destructive`}),(0,J.jsx)(s,{emphasis:`ghost`,children:`Ghost`}),(0,J.jsx)(s,{className:`@mode-accent`,emphasis:`ghost`,children:`Ghost Accent`}),(0,J.jsx)(s,{size:`small`,className:`@mode-attention`,emphasis:`primary`,children:`Destructive Small`}),(0,J.jsx)(s,{size:`small`,className:`@mode-attention`,emphasis:`ghost`,children:`Ghost Destructive Small`})]}),(0,J.jsxs)(h,{gap:!0,wrap:!0,p:!0,items:`start`,children:[(0,J.jsx)(fe,{placeholder:`Placeholder`}),(0,J.jsx)(T,{placeholder:`Placeholder`}),(0,J.jsxs)(h,{gap:!0,items:`center`,children:[(0,J.jsx)(se,{defaultChecked:!0}),(0,J.jsx)(`span`,{children:`Checkbox`})]}),(0,J.jsxs)(p,{defaultValue:[`1`],children:[(0,J.jsx)(p.Item,{value:`1`,children:`Toggle 1`}),(0,J.jsx)(p.Item,{value:`2`,children:`Toggle 2`})]})]}),(0,J.jsxs)(h,{layout:`start safe-center`,col:!0,gap:!0,p:!0,style:{maxHeight:200},overflow:`auto-y`,children:[(0,J.jsx)(g,{emphasis:`primary`,children:`Heading 1`}),(0,J.jsx)(g,{emphasis:`secondary`,children:`Heading 2`}),(0,J.jsx)(g,{emphasis:`ambient`,children:`Heading 3`}),(0,J.jsx)(_,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),(0,J.jsx)(P,{maxLength:30}),(0,J.jsx)(P,{maxLength:10})]}),(0,J.jsxs)(h,{col:!0,gap:!0,children:[(0,J.jsxs)(x,{children:[(0,J.jsxs)(x.Main,{onClick:()=>{},children:[(0,J.jsx)(x.Title,{children:`Card Title`}),(0,J.jsx)(x.Content,{children:`Card Content`}),(0,J.jsx)(x.Content,{unstyled:!0,children:(0,J.jsxs)(y,{children:[(0,J.jsx)(m,{name:`clock`}),` 2 hrs`]})})]}),(0,J.jsx)(x.Footer,{children:(0,J.jsxs)(x.Actions,{children:[(0,J.jsx)(s,{size:`small`,children:`Action 1`}),(0,J.jsx)(s,{size:`small`,emphasis:`ghost`,children:(0,J.jsx)(m,{name:`placeholder`})})]})})]}),(0,J.jsxs)(x,{size:`sm`,children:[(0,J.jsxs)(x.Main,{onClick:()=>{},children:[(0,J.jsx)(x.Title,{children:`Card Title`}),(0,J.jsx)(x.Content,{children:`Card Content`}),(0,J.jsx)(x.Content,{unstyled:!0,children:(0,J.jsxs)(y,{children:[(0,J.jsx)(m,{name:`clock`}),` 2 hrs`]})})]}),(0,J.jsx)(x.Footer,{children:(0,J.jsxs)(x.Actions,{children:[(0,J.jsx)(s,{size:`small`,children:`Action 1`}),(0,J.jsx)(s,{size:`small`,emphasis:`ghost`,children:(0,J.jsx)(m,{name:`placeholder`})})]})})]})]}),(0,J.jsxs)(c,{defaultValue:`tab1`,children:[(0,J.jsxs)(c.List,{children:[(0,J.jsx)(c.Trigger,{value:`tab1`,children:`Tab 1`}),(0,J.jsx)(c.Trigger,{value:`tab2`,children:`Tab 2`})]}),(0,J.jsx)(c.Content,{value:`tab1`,children:`Tab 1 Content`}),(0,J.jsx)(c.Content,{value:`tab2`,children:`Tab 2 Content`})]}),(0,J.jsxs)(Te,{children:[(0,J.jsxs)(v,{children:[(0,J.jsx)(m,{name:`placeholder`}),`Hello`]}),(0,J.jsxs)(v,{color:`primary`,children:[(0,J.jsx)(m,{name:`placeholder`}),`World`]}),(0,J.jsx)(v,{children:(0,J.jsx)(m,{name:`placeholder`})})]}),(0,J.jsxs)(V,{count:3,children:[(0,J.jsx)(V.Item,{index:0,name:`John Doe`}),(0,J.jsx)(V.Item,{index:1,name:`Jane Doe`}),(0,J.jsx)(V.Item,{index:2,name:`John Smith`})]}),(0,J.jsxs)(d,{children:[(0,J.jsx)(d.Trigger,{render:(0,J.jsx)(re,{content:`Hello World`}),children:(0,J.jsx)(s,{children:`Hover or right click`})}),(0,J.jsxs)(d.Content,{children:[(0,J.jsx)(d.Item,{children:`Item 1`}),(0,J.jsx)(d.Item,{children:`Item 2`}),(0,J.jsx)(d.Item,{children:`Item 3`})]})]}),(0,J.jsxs)(o,{children:[(0,J.jsx)(o.Trigger,{render:(0,J.jsx)(s,{}),style:{margin:`auto`},children:`Dropdown`}),(0,J.jsxs)(o.Content,{children:[(0,J.jsx)(o.Item,{children:`Item 1`}),(0,J.jsx)(o.Item,{children:`Item 2`}),(0,J.jsx)(o.Item,{children:`Item 3`}),(0,J.jsx)(o.Item,{disabled:!0,children:`Disabled Item`}),(0,J.jsx)(o.Separator,{}),(0,J.jsx)(o.Item,{children:`Item 4`}),(0,J.jsx)(o.Item,{children:`Item 5`}),(0,J.jsx)(o.Item,{children:`Item 6`}),(0,J.jsxs)(o.Item,{children:[`With icon`,(0,J.jsx)(o.ItemRightSlot,{children:(0,J.jsx)(m,{name:`flag`})})]})]})]}),(0,J.jsxs)(u,{value:`1`,itemToStringLabel:e=>`Item ${e}`,children:[(0,J.jsx)(u.Trigger,{}),(0,J.jsxs)(u.Content,{children:[(0,J.jsx)(u.Item,{value:`1`,children:`Item 1`}),(0,J.jsx)(u.Item,{value:`2`,children:`Item 2`}),(0,J.jsx)(u.Item,{value:`3`,children:`Item 3`}),(0,J.jsx)(u.Item,{value:`4`,children:`Item 4`}),(0,J.jsx)(u.Item,{value:`5`,children:`Item 5`}),(0,J.jsx)(u.Item,{value:`6`,children:`Item 6`}),(0,J.jsx)(u.Item,{value:`7`,children:`Item 7`}),(0,J.jsx)(u.Item,{value:`8`,children:`Item 8`}),(0,J.jsx)(u.Item,{value:`9`,children:`Item 9`}),(0,J.jsx)(u.Item,{value:`10`,children:`Item 10`})]})]}),(0,J.jsxs)(f,{children:[(0,J.jsx)(f.Trigger,{render:(0,J.jsx)(s,{}),children:`Click`}),(0,J.jsxs)(f.Content,{children:[(0,J.jsx)(f.Title,{children:`Hello there`}),(0,J.jsx)(f.Description,{children:`Im a dialog`}),(0,J.jsxs)(f.Actions,{children:[(0,J.jsx)(f.Close,{children:`Close`}),(0,J.jsx)(s,{color:`primary`,children:`Action`})]})]})]}),(0,J.jsx)(C,{style:{gridColumn:`span 2`},value:{start:new Date,end:n},onChange:()=>{}}),(0,J.jsx)(me,{value:50,style:{margin:`auto`}}),(0,J.jsx)(ge,{defaultValue:50,min:0,max:100}),(0,J.jsxs)(h,{surface:`primary`,p:!0,gap:!0,col:!0,children:[(0,J.jsx)(g,{emphasis:`primary`,children:`Primary surface`}),(0,J.jsx)(g,{emphasis:`secondary`,children:`Primary surface`}),(0,J.jsx)(g,{emphasis:`ambient`,children:`Primary surface`}),(0,J.jsx)(`div`,{children:`Primary surface`}),(0,J.jsx)(s,{emphasis:`ghost`,children:`Ghost`})]}),(0,J.jsxs)(h,{surface:`primary`,color:`accent`,p:!0,col:!0,style:{maxHeight:200},overflow:`auto-y`,children:[(0,J.jsx)(g,{emphasis:`primary`,children:`Accent surface`}),(0,J.jsx)(_,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),(0,J.jsx)(_,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),(0,J.jsx)(_,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),(0,J.jsx)(P,{maxLength:30}),(0,J.jsx)(P,{maxLength:10}),`Accent surface`]}),(0,J.jsx)(h,{surface:`secondary`,p:!0,col:!0,children:`Secondary surface`}),(0,J.jsx)(h,{surface:`ambient`,p:!0,col:!0,children:`Ambient surface`}),(0,J.jsxs)(h,{surface:!0,color:`attention`,p:!0,col:!0,children:[(0,J.jsx)(xe,{children:`Attention surface`}),(0,J.jsx)(Se,{children:`Attention surface`}),`Attention surface`,(0,J.jsx)(s,{emphasis:`ghost`,children:`Ghost`})]}),(0,J.jsx)(h,{children:(0,J.jsx)(Le,{children:`Note note`})}),(0,J.jsx)(h,{justify:`start`,items:`start`,children:(0,J.jsxs)(D,{openDirection:`down`,children:[(0,J.jsx)(s,{size:`small`,children:`One`}),(0,J.jsx)(s,{size:`small`,children:`Two`}),(0,J.jsx)(s,{size:`small`,children:`Three`}),(0,J.jsx)(s,{size:`small`,children:`Four`}),(0,J.jsx)(s,{size:`small`,children:`Five`}),(0,J.jsx)(s,{size:`small`,children:`Six`}),(0,J.jsx)(s,{size:`small`,children:`Seven`}),(0,J.jsx)(s,{size:`small`,children:`Eight`}),(0,J.jsx)(s,{size:`small`,children:`Nine`}),(0,J.jsx)(s,{size:`small`,children:`Ten`}),(0,J.jsx)(s,{size:`small`,children:`Eleven`})]})}),(0,J.jsx)(Oe,{style:{height:200},value:null,onChange:()=>{}})]})}),(0,J.jsx)(Ne,{children:(0,J.jsxs)(Pe,{children:[(0,J.jsxs)(j,{children:[(0,J.jsx)(A,{children:(0,J.jsx)(N,{name:`cart`})}),(0,J.jsx)(M,{children:`Item 1 long`})]}),(0,J.jsxs)(j,{active:!0,children:[(0,J.jsx)(A,{children:(0,J.jsx)(N,{name:`book`})}),(0,J.jsx)(M,{children:`Item 2`}),(0,J.jsx)(k,{})]}),(0,J.jsxs)(j,{color:`neutral`,children:[(0,J.jsx)(A,{children:(0,J.jsx)(N,{render:(0,J.jsx)(m,{name:`book`})})}),(0,J.jsx)(M,{children:`Neutral`})]}),(0,J.jsxs)(j,{color:`neutral`,active:!0,children:[(0,J.jsx)(A,{children:(0,J.jsx)(N,{render:(0,J.jsx)(m,{name:`book`})})}),(0,J.jsx)(M,{children:`Neutral`}),(0,J.jsx)(k,{})]})]})})]})}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{q=t(),r(),Ce(),we(),ee(),b(),ve(),H(),ye(),l(),Ee(),le(),S(),ue(),te(),be(),E(),De(),Me(),Ie(),O(),Fe(),ke(),pe(),ce(),he(),Re(),_e(),ne(),de(),ie(),w(),G(),J=a(),Y={title:`Theme Demo`,argTypes:{},parameters:{controls:{expanded:!0},layout:`fullscreen`},tags:[]},X={render(){return(0,J.jsxs)(h,{col:!0,p:!0,gap:!0,children:[(0,J.jsx)(h,{gap:!0,surface:`primary`,children:(0,J.jsx)(s,{color:`primary`,children:`Root theme`})}),(0,J.jsx)(K,{className:`@mode-eggplant override-dark`,style:{flex:1}})]})}},Z={render(){let[e,t]=(0,q.useState)({[i]:70,[n]:.5});return(0,J.jsxs)(h,{col:!0,full:!0,gap:!0,items:`stretch`,style:e,children:[(0,J.jsx)(s,{onClick:()=>{t({[i]:Math.floor(Math.random()*360),[n]:Math.random()})},children:`Reroll`}),(0,J.jsx)(K,{className:`@mode-user`})]})}},K.__docgenInfo={description:``,methods:[],displayName:`DemoUI`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`function DemoUI({
  className,
  style
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  return <PageRoot data-testid="demo" className={className} style={style}>
            <PageContent>
                <div className={cls.grid}>
                    <Box gap wrap p>
                        <Button emphasis="primary">Primary</Button>
                        <Button className="@mode-accent" emphasis="primary">
                            Accent
                        </Button>
                        <Button>Default</Button>
                        <Button className="@mode-inverted">Contrast</Button>
                        <Button className="@mode-attention" emphasis="primary">
                            Destructive
                        </Button>
                        <Button emphasis="ghost">Ghost</Button>
                        <Button className="@mode-accent" emphasis="ghost">
                            Ghost Accent
                        </Button>
                        <Button size="small" className="@mode-attention" emphasis="primary">
                            Destructive Small
                        </Button>
                        <Button size="small" className="@mode-attention" emphasis="ghost">
                            Ghost Destructive Small
                        </Button>
                    </Box>
                    <Box gap wrap p items="start">
                        <Input placeholder="Placeholder" />
                        <TextArea placeholder="Placeholder" />
                        <Box gap items="center">
                            <Checkbox defaultChecked />
                            <span>Checkbox</span>
                        </Box>
                        <ToggleGroup defaultValue={['1']}>
                            <ToggleGroup.Item value="1">Toggle 1</ToggleGroup.Item>
                            <ToggleGroup.Item value="2">Toggle 2</ToggleGroup.Item>
                        </ToggleGroup>
                    </Box>
                    <Box layout="start safe-center" col gap p style={{
          maxHeight: 200
        }} overflow="auto-y">
                        <Heading emphasis="primary">Heading 1</Heading>
                        <Heading emphasis="secondary">Heading 2</Heading>
                        <Heading emphasis="ambient">Heading 3</Heading>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </P>
                        <TextSkeleton maxLength={30} />
                        <TextSkeleton maxLength={10} />
                    </Box>
                    <Box col gap>
                        <Card>
                            <Card.Main onClick={() => {}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Content>Card Content</Card.Content>
                                <Card.Content unstyled>
                                    <Chip>
                                        <Icon name="clock" /> 2 hrs
                                    </Chip>
                                </Card.Content>
                            </Card.Main>
                            <Card.Footer>
                                <Card.Actions>
                                    <Button size="small">Action 1</Button>
                                    <Button size="small" emphasis="ghost">
                                        <Icon name="placeholder" />
                                    </Button>
                                </Card.Actions>
                            </Card.Footer>
                        </Card>
                        <Card size="sm">
                            <Card.Main onClick={() => {}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Content>Card Content</Card.Content>
                                <Card.Content unstyled>
                                    <Chip>
                                        <Icon name="clock" /> 2 hrs
                                    </Chip>
                                </Card.Content>
                            </Card.Main>
                            <Card.Footer>
                                <Card.Actions>
                                    <Button size="small">Action 1</Button>
                                    <Button size="small" emphasis="ghost">
                                        <Icon name="placeholder" />
                                    </Button>
                                </Card.Actions>
                            </Card.Footer>
                        </Card>
                    </Box>
                    <Tabs defaultValue="tab1">
                        <Tabs.List>
                            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="tab1">Tab 1 Content</Tabs.Content>
                        <Tabs.Content value="tab2">Tab 2 Content</Tabs.Content>
                    </Tabs>
                    <ActionBar>
                        <ActionButton>
                            <Icon name="placeholder" />
                            Hello
                        </ActionButton>
                        <ActionButton color="primary">
                            <Icon name="placeholder" />
                            World
                        </ActionButton>
                        <ActionButton>
                            <Icon name="placeholder" />
                        </ActionButton>
                    </ActionBar>
                    <AvatarList count={3}>
                        <AvatarList.Item index={0} name="John Doe" />
                        <AvatarList.Item index={1} name="Jane Doe" />
                        <AvatarList.Item index={2} name="John Smith" />
                    </AvatarList>
                    <ContextMenu>
                        <ContextMenu.Trigger render={<Tooltip content="Hello World" />}>
                            <Button>Hover or right click</Button>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>Item 1</ContextMenu.Item>
                            <ContextMenu.Item>Item 2</ContextMenu.Item>
                            <ContextMenu.Item>Item 3</ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu>
                    <DropdownMenu>
                        <DropdownMenu.Trigger render={<Button />} style={{
            margin: 'auto'
          }}>
                            Dropdown
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                            <DropdownMenu.Item>Item 3</DropdownMenu.Item>
                            <DropdownMenu.Item disabled>Disabled Item</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Item 4</DropdownMenu.Item>
                            <DropdownMenu.Item>Item 5</DropdownMenu.Item>
                            <DropdownMenu.Item>Item 6</DropdownMenu.Item>
                            <DropdownMenu.Item>
                                With icon
                                <DropdownMenu.ItemRightSlot>
                                    <Icon name="flag" />
                                </DropdownMenu.ItemRightSlot>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                    <Select value="1" itemToStringLabel={i => \`Item \${i}\`}>
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item value="1">Item 1</Select.Item>
                            <Select.Item value="2">Item 2</Select.Item>
                            <Select.Item value="3">Item 3</Select.Item>
                            <Select.Item value="4">Item 4</Select.Item>
                            <Select.Item value="5">Item 5</Select.Item>
                            <Select.Item value="6">Item 6</Select.Item>
                            <Select.Item value="7">Item 7</Select.Item>
                            <Select.Item value="8">Item 8</Select.Item>
                            <Select.Item value="9">Item 9</Select.Item>
                            <Select.Item value="10">Item 10</Select.Item>
                        </Select.Content>
                    </Select>
                    <Dialog>
                        <Dialog.Trigger render={<Button />}>Click</Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Title>Hello there</Dialog.Title>
                            <Dialog.Description>Im a dialog</Dialog.Description>
                            <Dialog.Actions>
                                <Dialog.Close>Close</Dialog.Close>
                                <Button color="primary">Action</Button>
                            </Dialog.Actions>
                        </Dialog.Content>
                    </Dialog>
                    <DateRangePicker style={{
          gridColumn: 'span 2'
        }} value={{
          start: new Date(),
          end: nextWeek
        }} onChange={() => {}} />
                    <Progress value={50} style={{
          margin: 'auto'
        }} />
                    <Slider defaultValue={50} min={0} max={100} />
                    <Box surface="primary" p gap col>
                        <Heading emphasis="primary">Primary surface</Heading>
                        <Heading emphasis="secondary">Primary surface</Heading>
                        <Heading emphasis="ambient">Primary surface</Heading>
                        <div>Primary surface</div>
                        <Button emphasis="ghost">Ghost</Button>
                    </Box>
                    <Box surface="primary" color="accent" p col style={{
          maxHeight: 200
        }} overflow="auto-y">
                        <Heading emphasis="primary">Accent surface</Heading>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </P>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </P>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </P>
                        <TextSkeleton maxLength={30} />
                        <TextSkeleton maxLength={10} />
                        Accent surface
                    </Box>
                    <Box surface="secondary" p col>
                        Secondary surface
                    </Box>
                    <Box surface="ambient" p col>
                        Ambient surface
                    </Box>
                    <Box surface color="attention" p col>
                        <H2>Attention surface</H2>
                        <H3>Attention surface</H3>
                        Attention surface
                        <Button emphasis="ghost">Ghost</Button>
                    </Box>
                    <Box>
                        <Note>Note note</Note>
                    </Box>
                    <Box justify="start" items="start">
                        <HorizontalList openDirection="down">
                            <Button size="small">One</Button>
                            <Button size="small">Two</Button>
                            <Button size="small">Three</Button>
                            <Button size="small">Four</Button>
                            <Button size="small">Five</Button>
                            <Button size="small">Six</Button>
                            <Button size="small">Seven</Button>
                            <Button size="small">Eight</Button>
                            <Button size="small">Nine</Button>
                            <Button size="small">Ten</Button>
                            <Button size="small">Eleven</Button>
                        </HorizontalList>
                    </Box>
                    <ImageUploader style={{
          height: 200
        }} value={null} onChange={() => {}} />
                </div>
            </PageContent>
            <PageNav>
                <NavBarRoot>
                    <NavBarItem>
                        <NavBarItemIconWrapper>
                            <NavBarItemIcon name="cart" />
                        </NavBarItemIconWrapper>
                        <NavBarItemText>Item 1 long</NavBarItemText>
                    </NavBarItem>
                    <NavBarItem active>
                        <NavBarItemIconWrapper>
                            <NavBarItemIcon name="book" />
                        </NavBarItemIconWrapper>
                        <NavBarItemText>Item 2</NavBarItemText>
                        <NavBarItemPip />
                    </NavBarItem>
                    <NavBarItem color="neutral">
                        <NavBarItemIconWrapper>
                            <NavBarItemIcon render={<Icon name="book" />} />
                        </NavBarItemIconWrapper>
                        <NavBarItemText>Neutral</NavBarItemText>
                    </NavBarItem>
                    <NavBarItem color="neutral" active>
                        <NavBarItemIconWrapper>
                            <NavBarItemIcon render={<Icon name="book" />} />
                        </NavBarItemIconWrapper>
                        <NavBarItemText>Neutral</NavBarItemText>
                        <NavBarItemPip />
                    </NavBarItem>
                </NavBarRoot>
            </PageNav>
        </PageRoot>;
}`,...K.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render() {
    return <Box col p gap>
                <Box gap surface="primary">
                    <Button color="primary">Root theme</Button>
                </Box>
                <DemoUI className="@mode-eggplant override-dark" style={{
        flex: 1
      }} />
            </Box>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render() {
    const [theme, setTheme] = useState({
      [$userColorHue]: 70,
      [$userColorSaturation]: 0.5
    });
    const reroll = () => {
      setTheme({
        [$userColorHue]: Math.floor(Math.random() * 360),
        [$userColorSaturation]: Math.random()
      });
    };
    return <Box col full gap items="stretch" style={theme as any}>
                <Button onClick={reroll}>Reroll</Button>
                <DemoUI className="@mode-user" />
            </Box>;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DemoUI`,`Nesting`,`Custom`]})))()}$();export{Z as Custom,K as DemoUI,X as Nesting,Q as __namedExportsOrder,Y as default};