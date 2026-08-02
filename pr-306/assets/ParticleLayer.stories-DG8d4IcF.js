import{i as u,j as e,r as c,db as a,I as p,b as o}from"./iframe-5VeFnoCW.js";import{C as m}from"./Checkbox-C3paAzqb.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const v={title:"Components/ParticleLayer",component:u,argTypes:{},parameters:{}},r={render(){return e.jsx("div",{style:{position:"relative",height:"100vh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:e.jsx(h,{})})}};function h(){const t=a();if(!t)throw new Error("Must be used inside ParticleLayer");const i=n=>{t.addParticles(t.elementExplosion({element:n.currentTarget,count:10}))};return e.jsx(o,{onClick:i,children:e.jsx(o.Icon,{children:"💥"})})}const s={render(){const[t,i]=c.useState(!1),n=c.useRef(null),l=a();return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2.5rem",visibility:t?"hidden":"visible"},children:e.jsx(p,{name:"placeholder",ref:n})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(o,{onClick:()=>{l?.addParticles(l.elementExplosion({element:n.current,count:10}))},children:"Burst"}),e.jsx(m,{checked:t,onCheckedChange:d=>i(!!d)}),e.jsx("span",{children:"Hide (hidden elements should not show particles)"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const j=["Default","HiddenTest"];export{r as Default,s as HiddenTest,j as __namedExportsOrder,v as default};
