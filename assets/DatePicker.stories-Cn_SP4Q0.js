import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{n,t as r}from"./clsx-BB58Nicv.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./Spinner-ZMBwO9BP.js";import{n as s,t as c}from"./Icon-CPvdzLAz.js";import{a as l,c as u,d,g as f,i as p,l as m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./DateRangePicker-DagAN_VB.js";var S,C;function w(){return(w=e((()=>{S=`_root_1pdl2_1`,C={root:S}})))()}function T(){let{setDisplayInfo:e,month:t,year:n}=f(),r=new Date(n,t).toLocaleDateString(`en-US`,{month:`long`,year:`numeric`});return(0,k.jsxs)(u,{children:[(0,k.jsx)(g,{emphasis:`ghost`,onClick:()=>e({month:t-1,year:n}),children:(0,k.jsx)(c,{name:`arrowLeft`})}),(0,k.jsx)(y,{children:r}),(0,k.jsx)(g,{emphasis:`ghost`,onClick:()=>e({month:t+1,year:n}),children:(0,k.jsx)(c,{name:`arrowRight`})})]})}function E({className:e,value:t,onChange:n,children:i,...a}){let[{month:o,year:s},c]=(0,O.useState)(()=>({month:new Date().getMonth(),year:new Date().getFullYear()}));return(0,k.jsx)(`div`,{className:r(C.root,e),...a,children:(0,k.jsx)(_,{displayMonth:o,displayYear:s,value:t,onChange:n,onDisplayChange:c,children:i})})}function D(e){return(0,k.jsxs)(E,{...e,children:[(0,k.jsx)(T,{}),(0,k.jsx)(p,{children:e=>(0,k.jsx)(v,{value:e},e.key)})]})}var O,k,A;function j(){return(j=e((()=>{x(),n(),O=t(),s(),m(),w(),k=i(),A=Object.assign(D,{Root:E,Calendar:_,CalendarDay:v,CalendarDays:d,CalendarGrid:p,DayLabels:l,MonthControls:T,MonthButton:g,MonthLabel:y,MonthRow:u}),D.__docgenInfo={description:``,methods:[],displayName:`DatePickerDefault`,props:{value:{required:!0,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(date: Date | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},name:`date`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})))()}function M({value:e}){let[t,n]=(0,N.useState)(!0);(0,N.useEffect)(()=>{let e=setTimeout(()=>n(!1),Math.random()*2e3+500);return()=>clearTimeout(e)},[]);let[r]=(0,N.useState)(()=>Math.random()<.3);return(0,P.jsx)(A.CalendarDay,{value:e,disabled:t||r,children:t?(0,P.jsx)(o,{size:10}):e.date.getDate()})}var N,P,F,I,L,R,z;function B(){return(B=e((()=>{N=t(),a(),j(),h(),P=i(),F={title:`Components/DatePicker`,component:A,argTypes:{},parameters:{controls:{expanded:!0}}},I={render(){let[e,t]=(0,N.useState)(null);return(0,P.jsx)(A,{value:e,onChange:t})}},L={render(){let[e,t]=(0,N.useState)({start:null,end:null});return(0,P.jsx)(b,{value:e,onChange:t})}},R={render(){let[e,t]=(0,N.useState)(null);return(0,P.jsxs)(A.Root,{value:e,onChange:t,children:[(0,P.jsx)(A.MonthControls,{}),(0,P.jsx)(A.CalendarGrid,{children:e=>(0,P.jsx)(M,{value:e},e.key)})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState<Date | null>(null);
    return <DatePicker value={value} onChange={setValue} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState<{
      start: Date | null;
      end: Date | null;
    }>({
      start: null,
      end: null
    });
    return <DateRangePicker value={value} onChange={setValue} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState<Date | null>(null);
    return <DatePicker.Root value={value} onChange={setValue}>
                <DatePicker.MonthControls />
                <DatePicker.CalendarGrid>
                    {value => <FakeLoadingDay value={value} key={value.key} />}
                </DatePicker.CalendarGrid>
            </DatePicker.Root>;
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Range`,`CustomComposition`]})))()}B();export{R as CustomComposition,I as Default,L as Range,z as __namedExportsOrder,F as default};