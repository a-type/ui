import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Button-fKwnlsy8.js";import{i,r as a}from"./toasts-BlHKV1dG.js";import{n as o,t as s}from"./Box-CFmvJLRd.js";var c,l,u,d;function f(){return(f=e((()=>{o(),n(),a(),c=t(),l={title:`Components/toasts`,argTypes:{},parameters:{controls:{expanded:!0}}},u={render(e){return(0,c.jsxs)(s,{col:!0,gap:!0,children:[(0,c.jsx)(s,{full:`width`,justify:`end`,children:(0,c.jsx)(r,{children:`Test`})}),(0,c.jsx)(r,{onClick:()=>{i(`This is a default toast! With a lot of text. Enough to wrap around.`,{duration:12e4})},children:`Show Default Toast`}),(0,c.jsx)(r,{className:`@mode-success`,emphasis:`light`,onClick:()=>{i.success(`This is a success toast!`,{duration:2e4})},children:`Show Success Toast`}),(0,c.jsx)(r,{className:`@mode-attention`,emphasis:`light`,onClick:()=>{i.error(`This is an error toast!`,{duration:2e4})},children:`Show Error Toast`}),(0,c.jsx)(r,{onClick:()=>{let{complete:e}=i.loading(`This is a loading toast!`);setTimeout(()=>{e(`Loading complete!`,{duration:5e3,type:`success`})},5e3)},children:`Show Loading Toast`}),(0,c.jsx)(r,{onClick:()=>{i.promise((async()=>{await new Promise(e=>setTimeout(e,3e3))})(),{loading:`Promise is loading... This text is longer to test animation of transition`,success:`Promise resolved!`,error:`Promise rejected.`})},children:`Show Promise Toast`}),(0,c.jsx)(r,{onClick:()=>{i(`This is a toast with actions!`,{timeout:2e4,data:{actions:[{label:`Retry`,emphasis:`primary`,onClick:()=>{alert(`Retry clicked!`)}},{label:`Undo`,emphasis:`light`,onClick:()=>{alert(`Undo clicked!`)}}]}})},children:`Show Toast with Actions`}),(0,c.jsx)(r,{onClick:()=>{i({title:`Rich Toast`,description:`This toast has both a title and a description.`,timeout:2e4})},children:`Show Rich Toast`}),(0,c.jsx)(r,{onClick:()=>{i({id:`unique-toast-id`,title:`Unique Toast`,description:`This toast has a unique ID. If you click the button multiple times, it won't create multiple toasts, but will update the existing one.`,timeout:2e4})},children:`Show Unique Toast`})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`]})))()}f();export{u as Default,d as __namedExportsOrder,l as default};