import{j as a,r as u,c as m}from"./iframe-b29PHh9x.js";import{S as r}from"./Slider-CR9jBNQh.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./valueToPercent-WVG-g_BQ.js";import"./stringifyLocale-BMPUsiav.js";import"./useIsHydrating-u7dD7dE2.js";const b={title:"Components/Slider",component:r,argTypes:{},parameters:{controls:{expanded:!0}}},s={},t={args:{orientation:"vertical",style:{height:"200px"}}},o={args:{orientation:"vertical",style:{height:"200px"},min:-2,max:2,defaultValue:0},render:l=>{const[e,c]=u.useState(0);return a.jsx(r.Base,{value:e,onValueChange:n=>{Array.isArray(n)?c(n[0]):c(n)},className:e<0?"@mode-attention":e>0?"@mode-success":"@mode-base",...l,children:a.jsxs(r.Track,{className:m({"bg-attention":e===-2,"bg-attention-light":e===-1,"bg-main":e===0,"bg-success-light":e===1,"bg-success":e===2}),children:[a.jsx(r.Indicator,{}),a.jsx(r.Thumb,{style:{height:24,width:24},children:a.jsx("div",{className:"text-primary",children:["😭","😔","😐","😊","😃"][e+2]})})]})})}},i={args:{defaultValue:50},render:l=>a.jsxs(r.Root,{...l,children:[a.jsx(r.Ui,{}),a.jsx(r.Value,{})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    style: {
      height: '200px'
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  },
  render: args => <Slider.Root {...args}>
            <Slider.Ui />
            <Slider.Value />
        </Slider.Root>
}`,...i.parameters?.docs?.source}}};const V=["Default","Vertical","CustomStyles","WithValue"];export{o as CustomStyles,s as Default,t as Vertical,i as WithValue,V as __namedExportsOrder,b as default};
