import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Icon-BO1W1Vex.js";import{n as a,r as o}from"./ParticleContext-VFK7U-cb.js";import{n as s,t as c}from"./ParticleLayer-Cuirmh_v.js";import{n as l,t as u}from"./Button-BZXNPMdH.js";import{n as d,t as f}from"./Checkbox-DzPuv5zi.js";function p(){let e=o();if(!e)throw Error(`Must be used inside ParticleLayer`);return(0,h.jsx)(u,{onClick:t=>{e.addParticles(e.elementExplosion({element:t.currentTarget,count:10}))},children:(0,h.jsx)(u.Icon,{children:`💥`})})}var m,h,g,_,v,y;function b(){return(b=e((()=>{m=t(),l(),d(),r(),a(),s(),h=n(),g={title:`Components/ParticleLayer`,component:c,argTypes:{},parameters:{}},_={render(){return(0,h.jsx)(`div`,{style:{position:`relative`,height:`100vh`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:(0,h.jsx)(p,{})})}},v={render(){let[e,t]=(0,m.useState)(!1),n=(0,m.useRef)(null),r=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{style:{position:`relative`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`2.5rem`,visibility:e?`hidden`:`visible`},children:(0,h.jsx)(i,{name:`placeholder`,ref:n})}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,h.jsx)(u,{onClick:()=>{r?.addParticles(r.elementExplosion({element:n.current,count:10}))},children:`Burst`}),(0,h.jsx)(f,{checked:e,onCheckedChange:e=>t(!!e)}),(0,h.jsx)(`span`,{children:`Hide (hidden elements should not show particles)`})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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