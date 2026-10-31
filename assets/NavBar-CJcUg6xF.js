import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CciHQ3Nt.js";import{a as i,o as a}from"./blocks-bs_svrH_.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/NavBar`}),`
`,(0,c.jsx)(t.h1,{id:`navbar`,children:`NavBar`}),`
`,(0,c.jsxs)(t.p,{children:[`Compose a navigation bar from `,(0,c.jsx)(t.code,{children:`NavBar`}),` and its item parts.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { NavBar } from '@a-type/ui';

<nav aria-label="Primary">
	<NavBar>
		<NavBar.Item
			active
			render={<a href="/" aria-current="page" />}
			nativeButton={false}
		>
			<NavBar.ItemIcon name="home" />
			<NavBar.ItemText>Home</NavBar.ItemText>
		</NavBar.Item>
	</NavBar>
</nav>;
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`active`}),` changes the item's appearance; routing and the current-page state are
the caller's responsibility. `,(0,c.jsx)(t.code,{children:`NavBar.ItemPip`}),` can display a notification marker.
Use `,(0,c.jsx)(t.code,{children:`PageNav`}),` to place the bar in the page layout.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};