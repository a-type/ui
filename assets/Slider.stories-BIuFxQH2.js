import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{n,t as r}from"./clsx-Ym2CzL_v.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Slider-DuV6P6IM.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s=t(),a(),c=i(),l={title:`Components/Slider`,component:o,argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:"Use `Slider` with `defaultValue`, or control it with `value` and `onValueChange`; configure `min`, `max`, and `step` as needed. `Slider.getSingle` extracts one value from a number or value array.\n\nFor a labeled thumb or a displayed value, compose `Slider.Root`, `Slider.Ui`, and `Slider.Value`."}}}},u={},d={args:{orientation:`vertical`,style:{height:`200px`}}},f={args:{orientation:`vertical`,style:{height:`200px`},min:-2,max:2,defaultValue:0},render:e=>{let[t,n]=(0,s.useState)(0);return(0,c.jsx)(o.Base,{value:t,onValueChange:e=>{n(Array.isArray(e)?e[0]:e)},className:t<0?`@mode-attention`:t>0?`@mode-success`:`@mode-base`,...e,children:(0,c.jsxs)(o.Track,{className:r({"bg-attention":t===-2,"bg-attention-light":t===-1,"bg-main":t===0,"bg-success-light":t===1,"bg-success":t===2}),children:[(0,c.jsx)(o.Indicator,{}),(0,c.jsx)(o.Thumb,{style:{height:24,width:24},children:(0,c.jsx)(`div`,{className:`text-primary`,children:[`😭`,`😔`,`😐`,`😊`,`😃`][t+2]})})]})})}},p={args:{defaultValue:50},render:e=>(0,c.jsxs)(o.Root,{...e,children:[(0,c.jsx)(o.Ui,{}),(0,c.jsx)(o.Value,{})]})},m=[`Default`,`Vertical`,`CustomStyles`,`WithValue`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    style: {
      height: '200px'
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    style: {
      height: '200px'
    },
    min: -2,
    max: 2,
    defaultValue: 0
  },
  render: args => {
    const [value, setValue] = useState<number>(0);
    return <Slider.Base value={value} onValueChange={v => {
      if (Array.isArray(v)) {
        setValue(v[0]);
      } else {
        setValue(v as number);
      }
    }} className={value < 0 ? '@mode-attention' : value > 0 ? '@mode-success' : '@mode-base'} {...args}>
                <Slider.Track className={clsx({
        'bg-attention': value === -2,
        'bg-attention-light': value === -1,
        'bg-main': value === 0,
        'bg-success-light': value === 1,
        'bg-success': value === 2
      })}>
                    <Slider.Indicator />
                    <Slider.Thumb style={{
          height: 24,
          width: 24
        }}>
                        <div className="text-primary">
                            {['😭', '😔', '😐', '😊', '😃'][(value as number) + 2]}
                        </div>
                    </Slider.Thumb>
                </Slider.Track>
            </Slider.Base>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  },
  render: args => <Slider.Root {...args}>
            <Slider.Ui />
            <Slider.Value />
        </Slider.Root>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as CustomStyles,u as Default,d as Vertical,p as WithValue,m as __namedExportsOrder,l as default};