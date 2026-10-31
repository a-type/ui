import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Box-Fzfgogd2.js";import{n as i,t as a}from"./Button-DjiUJUfv.js";import{i as o,n as s,r as c}from"./toasts-BtvumUc0.js";var l,u,d,f;function p(){return(p=e((()=>{n(),i(),c(),l=t(),u={title:`Components/toasts`,component:s,argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:"Call `toast`, `toast.success`, or `toast.error` to show a message. `toast.promise` tracks a promise, and `toast.loading` returns a `complete` function for a later update.\n\n`Provider` mounts the toast provider and `Toaster`. Use `timeout` in milliseconds and `data.actions` for optional actions."}}}},d={render(e){return(0,l.jsxs)(r,{col:!0,gap:!0,children:[(0,l.jsx)(r,{full:`width`,justify:`end`,children:(0,l.jsx)(a,{children:`Test`})}),(0,l.jsx)(a,{onClick:()=>{o(`This is a default toast! With a lot of text. Enough to wrap around.`,{duration:12e4})},children:`Show Default Toast`}),(0,l.jsx)(a,{className:`@mode-success`,emphasis:`light`,onClick:()=>{o.success(`This is a success toast!`,{duration:2e4})},children:`Show Success Toast`}),(0,l.jsx)(a,{className:`@mode-attention`,emphasis:`light`,onClick:()=>{o.error(`This is an error toast!`,{duration:2e4})},children:`Show Error Toast`}),(0,l.jsx)(a,{onClick:()=>{let{complete:e}=o.loading(`This is a loading toast!`);setTimeout(()=>{e(`Loading complete!`,{duration:5e3,type:`success`})},5e3)},children:`Show Loading Toast`}),(0,l.jsx)(a,{onClick:()=>{o.promise((async()=>{await new Promise(e=>setTimeout(e,3e3))})(),{loading:`Promise is loading... This text is longer to test animation of transition`,success:`Promise resolved!`,error:`Promise rejected.`})},children:`Show Promise Toast`}),(0,l.jsx)(a,{onClick:()=>{o(`This is a toast with actions!`,{timeout:2e4,data:{actions:[{label:`Retry`,emphasis:`primary`,onClick:()=>{alert(`Retry clicked!`)}},{label:`Undo`,emphasis:`light`,onClick:()=>{alert(`Undo clicked!`)}}]}})},children:`Show Toast with Actions`}),(0,l.jsx)(a,{onClick:()=>{o({title:`Rich Toast`,description:`This toast has both a title and a description.`,timeout:2e4})},children:`Show Rich Toast`}),(0,l.jsx)(a,{onClick:()=>{o({id:`unique-toast-id`,title:`Unique Toast`,description:`This toast has a unique ID. If you click the button multiple times, it won't create multiple toasts, but will update the existing one.`,timeout:2e4})},children:`Show Unique Toast`})]})}},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap>
                <Box full="width" justify="end">
                    <Button>Test</Button>
                </Box>
                <Button onClick={() => {
        toast('This is a default toast! With a lot of text. Enough to wrap around.', {
          duration: 120_000
        });
      }}>
                    Show Default Toast
                </Button>
                <Button className="@mode-success" emphasis="light" onClick={() => {
        toast.success('This is a success toast!', {
          duration: 20_000
        });
      }}>
                    Show Success Toast
                </Button>
                <Button className="@mode-attention" emphasis="light" onClick={() => {
        toast.error('This is an error toast!', {
          duration: 20_000
        });
      }}>
                    Show Error Toast
                </Button>
                <Button onClick={() => {
        const {
          complete
        } = toast.loading('This is a loading toast!');
        setTimeout(() => {
          complete('Loading complete!', {
            duration: 5000,
            type: 'success'
          });
        }, 5000);
      }}>
                    Show Loading Toast
                </Button>
                <Button onClick={() => {
        toast.promise((async () => {
          await new Promise(resolve => setTimeout(resolve, 3000));
        })(), {
          loading: 'Promise is loading... This text is longer to test animation of transition',
          success: 'Promise resolved!',
          error: 'Promise rejected.'
        });
      }}>
                    Show Promise Toast
                </Button>
                <Button onClick={() => {
        toast('This is a toast with actions!', {
          timeout: 20_000,
          data: {
            actions: [{
              label: 'Retry',
              emphasis: 'primary',
              onClick: () => {
                alert('Retry clicked!');
              }
            }, {
              label: 'Undo',
              emphasis: 'light',
              onClick: () => {
                alert('Undo clicked!');
              }
            }]
          }
        });
      }}>
                    Show Toast with Actions
                </Button>
                <Button onClick={() => {
        toast({
          title: 'Rich Toast',
          description: 'This toast has both a title and a description.',
          timeout: 20_000
        });
      }}>
                    Show Rich Toast
                </Button>
                <Button onClick={() => {
        toast({
          id: 'unique-toast-id',
          title: 'Unique Toast',
          description: "This toast has a unique ID. If you click the button multiple times, it won't create multiple toasts, but will update the existing one.",
          timeout: 20_000
        });
      }}>
                    Show Unique Toast
                </Button>
            </Box>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};