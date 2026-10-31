import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CciHQ3Nt.js";import{a as i,o as a}from"./blocks-bs_svrH_.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Provider`}),`
`,(0,c.jsx)(t.h1,{id:`provider`,children:`Provider`}),`
`,(0,c.jsxs)(t.p,{children:[`Import the library stylesheet and wrap your application in `,(0,c.jsx)(t.code,{children:`Provider`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import '@a-type/ui/main.css';
import { Provider } from '@a-type/ui';

<Provider>
	<App />
</Provider>;
`})}),`
`,(0,c.jsx)(t.p,{children:`The provider supplies the icon spritesheet, toast and tooltip providers,
particle layer, and PWA install dialog. It also manages viewport and virtual
keyboard behavior.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The install dialog loads `,(0,c.jsx)(t.code,{children:`/manifest.json`}),` by default. Pass `,(0,c.jsx)(t.code,{children:`manifestPath`}),` to
change the path, or `,(0,c.jsx)(t.code,{children:`manifestPath={false}`}),` to disable the dialog.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disableParticles`}),` omits the particle layer. Otherwise, its children render
after the client mounts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`virtualKeyboardBehavior`}),` accepts `,(0,c.jsx)(t.code,{children:`displace`}),` (the default) or `,(0,c.jsx)(t.code,{children:`overlay`}),` on
supported browsers. `,(0,c.jsx)(t.code,{children:`disableViewportOffset`}),` and `,(0,c.jsx)(t.code,{children:`disableTitleBarColor`}),` opt
out of those global updates.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};