import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CciHQ3Nt.js";import{a as i,o as a}from"./blocks-bs_svrH_.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/ErrorBoundary`}),`
`,(0,c.jsx)(t.h1,{id:`errorboundary`,children:`ErrorBoundary`}),`
`,(0,c.jsx)(t.p,{children:`Wrap a subtree to show a fallback if a descendant throws while rendering.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ErrorBoundary } from '@a-type/ui';

<ErrorBoundary
	fallback={({ error, clearError }) => (
		<div>
			<p>{error.message}</p>
			<button type="button" onClick={clearError}>
				Try again
			</button>
		</div>
	)}
>
	<App />
</ErrorBoundary>;
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`fallback`}),` can also be a React node. Without one, the boundary renders nothing
after an error. React error boundaries do not catch errors in event handlers.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};