import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CciHQ3Nt.js";import{a as i,o as a}from"./blocks-bs_svrH_.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/InfiniteLoadTrigger`}),`
`,(0,c.jsx)(t.h1,{id:`infiniteloadtrigger`,children:`InfiniteLoadTrigger`}),`
`,(0,c.jsxs)(t.p,{children:[`Place `,(0,c.jsx)(t.code,{children:`InfiniteLoadTrigger`}),` after a list to request more content when the
trigger becomes visible.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { InfiniteLoadTrigger } from '@a-type/ui';

function LoadMoreTrigger({
	hasNextPage,
	isLoading,
	loadNextPage,
}: {
	hasNextPage: boolean;
	isLoading: boolean;
	loadNextPage: () => void;
}) {
	if (!hasNextPage || isLoading) return null;
	return <InfiniteLoadTrigger onVisible={loadNextPage} />;
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`It uses an `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` and may call `,(0,c.jsx)(t.code,{children:`onVisible`}),` again when the
trigger re-enters the viewport or remounts. The caller must handle loading,
pagination, and duplicate requests.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};