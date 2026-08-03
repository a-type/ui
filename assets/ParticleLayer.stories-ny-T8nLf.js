import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Button-fKwnlsy8.js";import{n as a,t as o}from"./Checkbox-KLw8qz4U.js";import{n as s,t as c}from"./Icon-CPvdzLAz.js";import{n as l,r as u}from"./ParticleContext-CIkbidMM.js";import{n as d,t as f}from"./ParticleLayer-C1zItZT8.js";function p(){let e=u();if(!e)throw Error(`Must be used inside ParticleLayer`);return(0,h.jsx)(i,{onClick:t=>{e.addParticles(e.elementExplosion({element:t.currentTarget,count:10}))},children:(0,h.jsx)(i.Icon,{children:`💥`})})}var m,h,g,_,v,y;function b(){return(b=e((()=>{m=t(),r(),a(),s(),l(),d(),h=n(),g={title:`Components/ParticleLayer`,component:f,argTypes:{},parameters:{}},_={render(){return(0,h.jsx)(`div`,{style:{position:`relative`,height:`100vh`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:(0,h.jsx)(p,{})})}},v={render(){let[e,t]=(0,m.useState)(!1),n=(0,m.useRef)(null),r=u();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{style:{position:`relative`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`2.5rem`,visibility:e?`hidden`:`visible`},children:(0,h.jsx)(c,{name:`placeholder`,ref:n})}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,h.jsx)(i,{onClick:()=>{r?.addParticles(r.elementExplosion({element:n.current,count:10}))},children:`Burst`}),(0,h.jsx)(o,{checked:e,onCheckedChange:e=>t(!!e)}),(0,h.jsx)(`span`,{children:`Hide (hidden elements should not show particles)`})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render() {
    return <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
                <ExplodeButton />
            </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    const [hide, setHide] = useState(false);
    const targetRef = useRef<SVGSVGElement>(null);
    const particles = useParticles();
    return <>
                <div style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem',
        visibility: hide ? 'hidden' : 'visible'
      }}>
                    <Icon name="placeholder" ref={targetRef} />
                </div>
                <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
                    <Button onClick={() => {
          particles?.addParticles(particles.elementExplosion({
            element: targetRef.current!,
            count: 10
          }));
        }}>
                        Burst
                    </Button>
                    <Checkbox checked={hide} onCheckedChange={c => setHide(!!c)} />
                    <span>Hide (hidden elements should not show particles)</span>
                </div>
            </>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`HiddenTest`]})))()}b();export{_ as Default,v as HiddenTest,y as __namedExportsOrder,g as default};