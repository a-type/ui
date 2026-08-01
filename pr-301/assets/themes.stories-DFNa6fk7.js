import{j as e,r as N,B as r,b as t,o as d,P as g,I as m,m as W,n as o,l as s,D as u,d9 as G,da as _,a as w,$ as H}from"./iframe-BTd0T825.js";import{d as h}from"./tabs-8ZHHUv4R.js";import{T as D}from"./toggleGroup-DZzq_zpo.js";import{T as I}from"./skeletons-Dz09uxUm.js";import{h as n}from"./Card-DAiqbjnM.js";import{C as z}from"./Chip-BWrs9VDD.js";import{A as F,a as b}from"./ActionButton-gT4BSkqJ.js";import{A as $}from"./Avatar-ZKT8yNet.js";import{C as x}from"./contextMenu-BIc1Qx4j.js";import{f as E}from"./DateRangePicker-DuIbGN7h.js";import{P as U}from"./Progress-TDcxe1hw.js";import{S as O}from"./Slider-DTGOr08T.js";import{N as V}from"./Note-BY7B8IA5.js";import{H as J}from"./HorizontalList-BlPMNreI.js";import{I as K}from"./ImageUploader-DNgdlttD.js";import{P as Q,a as X}from"./PageContent-BzT5Q2Gu.js";import{I as Y}from"./Input-Cq4moBCf.js";import{T as Z}from"./TextArea-CkTXWKKN.js";import{C as ee}from"./Checkbox-DlCA4thB.js";import{P as te,N as re,a as j,b as B,c as C,d as v,e as k}from"./NavBar-OD3Iqlzs.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./useIsHydrating-CM-CnGaw.js";import"./masonry-Bi0tWQYb.js";import"./timing-C8g-0Emv.js";import"./Collapsible-DbvMZwGJ.js";import"./valueToPercent-WVG-g_BQ.js";import"./stringifyLocale-BMPUsiav.js";import"./useRegisteredLabelId-D_dWLzUA.js";import"./Camera-Bq-1LV5b.js";import"./useSize-qmGftaZ1.js";import"./Input.module-C9Yg6vyE.js";const A=N.createContext({size:24});function L({children:i,count:l,size:a=24,className:c,style:S,...R}){const P=l>0?a+(l-1)*(a*2/3):0;return e.jsx(A.Provider,{value:{size:a},children:e.jsx("div",{className:c,style:{...S,position:"relative",flexBasis:"auto",width:P,minWidth:P,height:a},...R,children:i})})}function M({index:i,children:l,className:a,style:c}){const{size:S}=N.useContext(A);return e.jsx("div",{className:a,style:{...c,position:"absolute",left:i===0?0:i*(S*2/3),zIndex:i,top:0},children:l})}function q({index:i,className:l,...a}){const{size:c}=N.useContext(A);return e.jsx(M,{index:i,className:l,children:e.jsx($,{style:{width:c,height:c},...a})})}const T=Object.assign(L,{Item:q,ItemRoot:M});L.__docgenInfo={description:"",methods:[],displayName:"AvatarListRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},count:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};M.__docgenInfo={description:"",methods:[],displayName:"AvatarListItemRoot",props:{index:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"AvatarListItem",props:{index:{required:!0,tsType:{name:"number"},description:""},popIn:{required:!1,tsType:{name:"boolean"},description:"@deprecated"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},imageSrc:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},crossOrigin:{required:!1,tsType:{name:"HTMLProps['crossOrigin']",raw:"HTMLProps<HTMLImageElement>['crossOrigin']"},description:""},size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["BaseAvatarProps"]};const ae="_grid_12zgz_1",ne={grid:ae},qe={title:"Theme Demo",argTypes:{},parameters:{controls:{expanded:!0},layout:"fullscreen"},tags:[]};function p({className:i,style:l}){const a=new Date;return a.setDate(a.getDate()+7),e.jsxs(Q,{"data-testid":"demo",className:i,style:l,children:[e.jsx(X,{children:e.jsxs("div",{className:ne.grid,children:[e.jsxs(r,{gap:!0,wrap:!0,p:!0,children:[e.jsx(t,{emphasis:"primary",children:"Primary"}),e.jsx(t,{className:"@mode-accent",emphasis:"primary",children:"Accent"}),e.jsx(t,{children:"Default"}),e.jsx(t,{className:"@mode-inverted",children:"Contrast"}),e.jsx(t,{className:"@mode-attention",emphasis:"primary",children:"Destructive"}),e.jsx(t,{emphasis:"ghost",children:"Ghost"}),e.jsx(t,{className:"@mode-accent",emphasis:"ghost",children:"Ghost Accent"}),e.jsx(t,{size:"small",className:"@mode-attention",emphasis:"primary",children:"Destructive Small"}),e.jsx(t,{size:"small",className:"@mode-attention",emphasis:"ghost",children:"Ghost Destructive Small"})]}),e.jsxs(r,{gap:!0,wrap:!0,p:!0,items:"start",children:[e.jsx(Y,{placeholder:"Placeholder"}),e.jsx(Z,{placeholder:"Placeholder"}),e.jsxs(r,{gap:!0,items:"center",children:[e.jsx(ee,{defaultChecked:!0}),e.jsx("span",{children:"Checkbox"})]}),e.jsxs(D,{defaultValue:["1"],children:[e.jsx(D.Item,{value:"1",children:"Toggle 1"}),e.jsx(D.Item,{value:"2",children:"Toggle 2"})]})]}),e.jsxs(r,{layout:"start safe-center",col:!0,gap:!0,p:!0,style:{maxHeight:200},overflow:"auto-y",children:[e.jsx(d,{emphasis:"primary",children:"Heading 1"}),e.jsx(d,{emphasis:"secondary",children:"Heading 2"}),e.jsx(d,{emphasis:"ambient",children:"Heading 3"}),e.jsx(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(I,{maxLength:30}),e.jsx(I,{maxLength:10})]}),e.jsxs(r,{col:!0,gap:!0,children:[e.jsxs(n,{children:[e.jsxs(n.Main,{onClick:()=>{},children:[e.jsx(n.Title,{children:"Card Title"}),e.jsx(n.Content,{children:"Card Content"}),e.jsx(n.Content,{unstyled:!0,children:e.jsxs(z,{children:[e.jsx(m,{name:"clock"})," 2 hrs"]})})]}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(t,{size:"small",children:"Action 1"}),e.jsx(t,{size:"small",emphasis:"ghost",children:e.jsx(m,{name:"placeholder"})})]})})]}),e.jsxs(n,{size:"sm",children:[e.jsxs(n.Main,{onClick:()=>{},children:[e.jsx(n.Title,{children:"Card Title"}),e.jsx(n.Content,{children:"Card Content"}),e.jsx(n.Content,{unstyled:!0,children:e.jsxs(z,{children:[e.jsx(m,{name:"clock"})," 2 hrs"]})})]}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(t,{size:"small",children:"Action 1"}),e.jsx(t,{size:"small",emphasis:"ghost",children:e.jsx(m,{name:"placeholder"})})]})})]})]}),e.jsxs(h,{defaultValue:"tab1",children:[e.jsxs(h.List,{children:[e.jsx(h.Trigger,{value:"tab1",children:"Tab 1"}),e.jsx(h.Trigger,{value:"tab2",children:"Tab 2"})]}),e.jsx(h.Content,{value:"tab1",children:"Tab 1 Content"}),e.jsx(h.Content,{value:"tab2",children:"Tab 2 Content"})]}),e.jsxs(F,{children:[e.jsxs(b,{children:[e.jsx(m,{name:"placeholder"}),"Hello"]}),e.jsxs(b,{color:"primary",children:[e.jsx(m,{name:"placeholder"}),"World"]}),e.jsx(b,{children:e.jsx(m,{name:"placeholder"})})]}),e.jsxs(T,{count:3,children:[e.jsx(T.Item,{index:0,name:"John Doe"}),e.jsx(T.Item,{index:1,name:"Jane Doe"}),e.jsx(T.Item,{index:2,name:"John Smith"})]}),e.jsxs(x,{children:[e.jsx(x.Trigger,{render:e.jsx(W,{content:"Hello World"}),children:e.jsx(t,{children:"Hover or right click"})}),e.jsxs(x.Content,{children:[e.jsx(x.Item,{children:"Item 1"}),e.jsx(x.Item,{children:"Item 2"}),e.jsx(x.Item,{children:"Item 3"})]})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{render:e.jsx(t,{}),style:{margin:"auto"},children:"Dropdown"}),e.jsxs(o.Content,{children:[e.jsx(o.Item,{children:"Item 1"}),e.jsx(o.Item,{children:"Item 2"}),e.jsx(o.Item,{children:"Item 3"}),e.jsx(o.Item,{disabled:!0,children:"Disabled Item"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{children:"Item 4"}),e.jsx(o.Item,{children:"Item 5"}),e.jsx(o.Item,{children:"Item 6"}),e.jsxs(o.Item,{children:["With icon",e.jsx(o.ItemRightSlot,{children:e.jsx(m,{name:"flag"})})]})]})]}),e.jsxs(s,{value:"1",itemToStringLabel:c=>`Item ${c}`,children:[e.jsx(s.Trigger,{}),e.jsxs(s.Content,{children:[e.jsx(s.Item,{value:"1",children:"Item 1"}),e.jsx(s.Item,{value:"2",children:"Item 2"}),e.jsx(s.Item,{value:"3",children:"Item 3"}),e.jsx(s.Item,{value:"4",children:"Item 4"}),e.jsx(s.Item,{value:"5",children:"Item 5"}),e.jsx(s.Item,{value:"6",children:"Item 6"}),e.jsx(s.Item,{value:"7",children:"Item 7"}),e.jsx(s.Item,{value:"8",children:"Item 8"}),e.jsx(s.Item,{value:"9",children:"Item 9"}),e.jsx(s.Item,{value:"10",children:"Item 10"})]})]}),e.jsxs(u,{children:[e.jsx(u.Trigger,{render:e.jsx(t,{}),children:"Click"}),e.jsxs(u.Content,{children:[e.jsx(u.Title,{children:"Hello there"}),e.jsx(u.Description,{children:"Im a dialog"}),e.jsxs(u.Actions,{children:[e.jsx(u.Close,{children:"Close"}),e.jsx(t,{color:"primary",children:"Action"})]})]})]}),e.jsx(E,{style:{gridColumn:"span 2"},value:{start:new Date,end:a},onChange:()=>{}}),e.jsx(U,{value:50,style:{margin:"auto"}}),e.jsx(O,{defaultValue:50,min:0,max:100}),e.jsxs(r,{surface:"primary",p:!0,gap:!0,col:!0,children:[e.jsx(d,{emphasis:"primary",children:"Primary surface"}),e.jsx(d,{emphasis:"secondary",children:"Primary surface"}),e.jsx(d,{emphasis:"ambient",children:"Primary surface"}),e.jsx("div",{children:"Primary surface"}),e.jsx(t,{emphasis:"ghost",children:"Ghost"})]}),e.jsxs(r,{surface:"primary",color:"accent",p:!0,col:!0,style:{maxHeight:200},overflow:"auto-y",children:[e.jsx(d,{emphasis:"primary",children:"Accent surface"}),e.jsx(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(I,{maxLength:30}),e.jsx(I,{maxLength:10}),"Accent surface"]}),e.jsx(r,{surface:"secondary",p:!0,col:!0,children:"Secondary surface"}),e.jsx(r,{surface:"ambient",p:!0,col:!0,children:"Ambient surface"}),e.jsxs(r,{surface:!0,color:"attention",p:!0,col:!0,children:[e.jsx(G,{children:"Attention surface"}),e.jsx(_,{children:"Attention surface"}),"Attention surface",e.jsx(t,{emphasis:"ghost",children:"Ghost"})]}),e.jsx(r,{children:e.jsx(V,{children:"Note note"})}),e.jsx(r,{justify:"start",items:"start",children:e.jsxs(J,{openDirection:"down",children:[e.jsx(t,{size:"small",children:"One"}),e.jsx(t,{size:"small",children:"Two"}),e.jsx(t,{size:"small",children:"Three"}),e.jsx(t,{size:"small",children:"Four"}),e.jsx(t,{size:"small",children:"Five"}),e.jsx(t,{size:"small",children:"Six"}),e.jsx(t,{size:"small",children:"Seven"}),e.jsx(t,{size:"small",children:"Eight"}),e.jsx(t,{size:"small",children:"Nine"}),e.jsx(t,{size:"small",children:"Ten"}),e.jsx(t,{size:"small",children:"Eleven"})]})}),e.jsx(K,{style:{height:200},value:null,onChange:()=>{}})]})}),e.jsx(te,{children:e.jsxs(re,{children:[e.jsxs(j,{children:[e.jsx(B,{children:e.jsx(C,{name:"cart"})}),e.jsx(v,{children:"Item 1 long"})]}),e.jsxs(j,{active:!0,children:[e.jsx(B,{children:e.jsx(C,{name:"book"})}),e.jsx(v,{children:"Item 2"}),e.jsx(k,{})]}),e.jsxs(j,{color:"neutral",children:[e.jsx(B,{children:e.jsx(C,{render:e.jsx(m,{name:"book"})})}),e.jsx(v,{children:"Neutral"})]}),e.jsxs(j,{color:"neutral",active:!0,children:[e.jsx(B,{children:e.jsx(C,{render:e.jsx(m,{name:"book"})})}),e.jsx(v,{children:"Neutral"}),e.jsx(k,{})]})]})})]})}const f={render(){return e.jsxs(r,{col:!0,p:!0,gap:!0,children:[e.jsx(r,{gap:!0,surface:"primary",children:e.jsx(t,{color:"primary",children:"Root theme"})}),e.jsx(p,{className:"@mode-eggplant override-dark",style:{flex:1}})]})}},y={render(){const[i,l]=N.useState({[H]:70,[w]:.5}),a=()=>{l({[H]:Math.floor(Math.random()*360),[w]:Math.random()})};return e.jsxs(r,{col:!0,full:!0,gap:!0,items:"stretch",style:i,children:[e.jsx(t,{onClick:a,children:"Reroll"}),e.jsx(p,{className:"@mode-user"})]})}};p.__docgenInfo={description:"",methods:[],displayName:"DemoUI",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function DemoUI({
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Re=["DemoUI","Nesting","Custom"];export{y as Custom,p as DemoUI,f as Nesting,Re as __namedExportsOrder,qe as default};
