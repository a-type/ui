import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,r as n,t as r}from"./props-BMS6i8ui.js";import{n as i,t as a}from"./clsx-BB58Nicv.js";import{t as o}from"./jsx-runtime-BdxMnOeJ.js";import{n as s,t as c}from"./Box-CFmvJLRd.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l=`_bgWash_1kkuw_1`,u=`_bgLight_1kkuw_4`,d=`_bgMid_1kkuw_7`,f=`_bgHeavy_1kkuw_10`,p=`_bgInk_1kkuw_13`,m=`_bgNeutralInk_1kkuw_17`,h=`_bgNeutralPaper_1kkuw_20`,g=`_bgNeutralWash_1kkuw_23`,_=`_rangeLabel_1kkuw_27`,v=`_bgLighten1_1kkuw_41`,y=`_bgLighten2_1kkuw_44`,b=`_bgDarken1_1kkuw_47`,x=`_bgDarken2_1kkuw_50`,S=`_bgBetweenMidLight_1kkuw_54`,C=`_bgBetweenMidHeavy_1kkuw_57`,w={bgWash:l,bgLight:u,bgMid:d,bgHeavy:f,bgInk:p,bgNeutralInk:m,bgNeutralPaper:h,bgNeutralWash:g,rangeLabel:_,bgLighten1:v,bgLighten2:y,bgDarken1:b,bgDarken2:x,bgBetweenMidLight:S,bgBetweenMidHeavy:C}})))()}function E({className:e,children:t,style:n}){return(0,k.jsx)(`div`,{className:a(e,`color-contrast`),style:{height:`100px`,display:`flex`,justifyContent:`center`,alignItems:`center`,flex:`1`,...n},children:t})}function D({className:e,style:t}){return(0,k.jsxs)(c,{className:a(`relative`,e),style:t,children:[(0,k.jsx)(E,{className:w.bgWash}),(0,k.jsx)(E,{className:w.bgLight}),(0,k.jsx)(E,{className:w.bgMid}),(0,k.jsx)(E,{className:w.bgHeavy}),(0,k.jsx)(E,{className:w.bgInk}),(0,k.jsx)(`div`,{className:w.rangeLabel,children:e})]})}function O({className:e,style:t}){return(0,k.jsxs)(c,{className:e,style:t,children:[(0,k.jsx)(E,{className:w.bgWash,children:`W`}),(0,k.jsx)(E,{className:a(w.bgLight,w.bgLighten2),children:`L+2`}),(0,k.jsx)(E,{className:w.bgLight,children:`L`}),(0,k.jsx)(E,{className:w.bgBetweenMidLight,children:`B/W`}),(0,k.jsx)(E,{className:a(w.bgMid,w.bgLighten2),children:`P+2`}),(0,k.jsx)(E,{className:a(w.bgMid,w.bgLighten1),children:`P+1`}),(0,k.jsx)(E,{className:w.bgMid,children:`P`}),(0,k.jsx)(E,{className:a(w.bgMid,w.bgDarken1),children:`P-1`}),(0,k.jsx)(E,{className:a(w.bgMid,w.bgDarken2),children:`P-2`}),(0,k.jsx)(E,{className:w.bgBetweenMidHeavy,children:`B/H`}),(0,k.jsx)(E,{className:w.bgHeavy,children:`H`}),(0,k.jsx)(E,{className:a(w.bgHeavy,w.bgDarken2),children:`H-2`}),(0,k.jsx)(E,{className:w.bgInk,children:`I`})]})}var k,A,j,M,N;function P(){return(P=e((()=>{i(),n(),T(),s(),k=o(),A={title:`System/Colors`,argTypes:{customHue:{control:{type:`number`,min:0,max:360}}},args:{customHue:0},parameters:{controls:{expanded:!0}}},j={render(e){let n=e.customHue?{[r]:e.customHue,[t]:`1`}:{},i=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(D,{className:`@mode-user`,style:n}),(0,k.jsx)(D,{className:`@mode-lemon`}),(0,k.jsx)(D,{className:`@mode-leek`}),(0,k.jsx)(D,{className:`@mode-tomato`}),(0,k.jsx)(D,{className:`@mode-eggplant`}),(0,k.jsx)(D,{className:`@mode-blueberry`}),(0,k.jsx)(D,{className:`@mode-attention`}),(0,k.jsx)(D,{className:`@mode-success`}),(0,k.jsx)(D,{className:`@mode-neutral`}),(0,k.jsxs)(c,{className:`h-100px`,children:[(0,k.jsx)(c,{grow:!0,className:w.bgNeutralInk}),(0,k.jsx)(c,{grow:!0,className:w.bgNeutralWash}),(0,k.jsx)(c,{grow:!0,className:w.bgNeutralPaper})]})]});return(0,k.jsxs)(c,{col:!0,children:[(0,k.jsx)(`input`,{type:`color`,className:`sticky top-0 z-1`}),(0,k.jsxs)(c,{full:!0,children:[(0,k.jsx)(c,{col:!0,grow:!0,p:!0,surface:`ambient`,children:i}),(0,k.jsx)(c,{col:!0,className:`@mode-dark`,surface:`ambient`,grow:!0,p:!0,children:i})]})]})}},M={render(e){let t=e.customHue?{[r]:e.customHue}:{};return(0,k.jsxs)(c,{col:!0,children:[(0,k.jsx)(O,{className:`@mode-neutral`}),(0,k.jsx)(O,{className:`@mode-lemon`}),(0,k.jsx)(O,{className:`@mode-leek`}),(0,k.jsx)(O,{className:`@mode-tomato`}),(0,k.jsx)(O,{className:`@mode-eggplant`}),(0,k.jsx)(O,{className:`@mode-blueberry`}),(0,k.jsx)(O,{style:t,className:`theme`})]})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Modifiers`]})))()}P();export{j as Default,M as Modifiers,N as __namedExportsOrder,A as default};