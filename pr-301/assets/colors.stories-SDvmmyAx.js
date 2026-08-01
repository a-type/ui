import{$ as i,j as e,B as t,c as l,a as d}from"./iframe-BTd0T825.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const b="_bgWash_1kkuw_1",N="_bgLight_1kkuw_4",x="_bgMid_1kkuw_7",h="_bgHeavy_1kkuw_10",k="_bgInk_1kkuw_13",j="_bgNeutralInk_1kkuw_17",_="_bgNeutralPaper_1kkuw_20",p="_bgNeutralWash_1kkuw_23",y="_rangeLabel_1kkuw_27",w="_bgLighten1_1kkuw_41",B="_bgLighten2_1kkuw_44",M="_bgDarken1_1kkuw_47",f="_bgDarken2_1kkuw_50",H="_bgBetweenMidLight_1kkuw_54",L="_bgBetweenMidHeavy_1kkuw_57",s={bgWash:b,bgLight:N,bgMid:x,bgHeavy:h,bgInk:k,bgNeutralInk:j,bgNeutralPaper:_,bgNeutralWash:p,rangeLabel:y,bgLighten1:w,bgLighten2:B,bgDarken1:M,bgDarken2:f,bgBetweenMidLight:H,bgBetweenMidHeavy:L},W={title:"System/Colors",argTypes:{customHue:{control:{type:"number",min:0,max:360}}},args:{customHue:0},parameters:{controls:{expanded:!0}}},m={render(r){const n=r.customHue?{[i]:r.customHue,[d]:"1"}:{},g=e.jsxs(e.Fragment,{children:[e.jsx(o,{className:"@mode-user",style:n}),e.jsx(o,{className:"@mode-lemon"}),e.jsx(o,{className:"@mode-leek"}),e.jsx(o,{className:"@mode-tomato"}),e.jsx(o,{className:"@mode-eggplant"}),e.jsx(o,{className:"@mode-blueberry"}),e.jsx(o,{className:"@mode-attention"}),e.jsx(o,{className:"@mode-success"}),e.jsx(o,{className:"@mode-neutral"}),e.jsxs(t,{className:"h-100px",children:[e.jsx(t,{grow:!0,className:s.bgNeutralInk}),e.jsx(t,{grow:!0,className:s.bgNeutralWash}),e.jsx(t,{grow:!0,className:s.bgNeutralPaper})]})]});return e.jsxs(t,{col:!0,children:[e.jsx("input",{type:"color",className:"sticky top-0 z-1"}),e.jsxs(t,{full:!0,children:[e.jsx(t,{col:!0,grow:!0,p:!0,surface:"ambient",children:g}),e.jsx(t,{col:!0,className:"@mode-dark",surface:"ambient",grow:!0,p:!0,children:g})]})]})}};function a({className:r,children:n,style:g}){return e.jsx("div",{className:l(r,"color-contrast"),style:{height:"100px",display:"flex",justifyContent:"center",alignItems:"center",flex:"1",...g},children:n})}function o({className:r,style:n}){return e.jsxs(t,{className:l("relative",r),style:n,children:[e.jsx(a,{className:s.bgWash}),e.jsx(a,{className:s.bgLight}),e.jsx(a,{className:s.bgMid}),e.jsx(a,{className:s.bgHeavy}),e.jsx(a,{className:s.bgInk}),e.jsx("div",{className:s.rangeLabel,children:r})]})}const u={render(r){const n=r.customHue?{[i]:r.customHue}:{};return e.jsxs(t,{col:!0,children:[e.jsx(c,{className:"@mode-neutral"}),e.jsx(c,{className:"@mode-lemon"}),e.jsx(c,{className:"@mode-leek"}),e.jsx(c,{className:"@mode-tomato"}),e.jsx(c,{className:"@mode-eggplant"}),e.jsx(c,{className:"@mode-blueberry"}),e.jsx(c,{style:n,className:"theme"})]})}};function c({className:r,style:n}){return e.jsxs(t,{className:r,style:n,children:[e.jsx(a,{className:s.bgWash,children:"W"}),e.jsx(a,{className:l(s.bgLight,s.bgLighten2),children:"L+2"}),e.jsx(a,{className:s.bgLight,children:"L"}),e.jsx(a,{className:s.bgBetweenMidLight,children:"B/W"}),e.jsx(a,{className:l(s.bgMid,s.bgLighten2),children:"P+2"}),e.jsx(a,{className:l(s.bgMid,s.bgLighten1),children:"P+1"}),e.jsx(a,{className:s.bgMid,children:"P"}),e.jsx(a,{className:l(s.bgMid,s.bgDarken1),children:"P-1"}),e.jsx(a,{className:l(s.bgMid,s.bgDarken2),children:"P-2"}),e.jsx(a,{className:s.bgBetweenMidHeavy,children:"B/H"}),e.jsx(a,{className:s.bgHeavy,children:"H"}),e.jsx(a,{className:l(s.bgHeavy,s.bgDarken2),children:"H-2"}),e.jsx(a,{className:s.bgInk,children:"I"})]})}m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args: any) {
    const style: any = args.customHue ? {
      [$userColorHue]: args.customHue,
      [$userColorSaturation]: '1'
    } : {};
    const ranges = <>
                <Range className="@mode-user" style={style} />
                <Range className="@mode-lemon" />
                <Range className="@mode-leek" />
                <Range className="@mode-tomato" />
                <Range className="@mode-eggplant" />
                <Range className="@mode-blueberry" />
                <Range className="@mode-attention" />
                <Range className="@mode-success" />
                <Range className="@mode-neutral" />
                <Box className="h-100px">
                    <Box grow className={cls.bgNeutralInk} />
                    <Box grow className={cls.bgNeutralWash} />
                    <Box grow className={cls.bgNeutralPaper} />
                </Box>
            </>;
    return <Box col>
                <input type="color" className="sticky top-0 z-1" />
                <Box full>
                    <Box col grow p surface="ambient">
                        {ranges}
                    </Box>
                    <Box col className="@mode-dark" surface="ambient" grow p>
                        {ranges}
                    </Box>
                </Box>
            </Box>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args: any) {
    const style: any = args.customHue ? {
      [$userColorHue]: args.customHue
    } : {};
    return <Box col>
                <ModifierRange className="@mode-neutral" />
                <ModifierRange className="@mode-lemon" />
                <ModifierRange className="@mode-leek" />
                <ModifierRange className="@mode-tomato" />
                <ModifierRange className="@mode-eggplant" />
                <ModifierRange className="@mode-blueberry" />
                <ModifierRange style={style} className="theme" />
            </Box>;
  }
}`,...u.parameters?.docs?.source}}};const D=["Default","Modifiers"];export{m as Default,u as Modifiers,D as __namedExportsOrder,W as default};
