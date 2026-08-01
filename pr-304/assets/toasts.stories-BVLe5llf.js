import{j as t,B as a,b as o,cV as s}from"./iframe-CLDG_V9g.js";import"./preload-helper-Cq-3Hqs1.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const u={title:"Components/toasts",argTypes:{},parameters:{controls:{expanded:!0}}},e={render(n){return t.jsxs(a,{col:!0,gap:!0,children:[t.jsx(a,{full:"width",justify:"end",children:t.jsx(o,{children:"Test"})}),t.jsx(o,{onClick:()=>{s("This is a default toast! With a lot of text. Enough to wrap around.",{duration:12e4})},children:"Show Default Toast"}),t.jsx(o,{className:"@mode-success",emphasis:"light",onClick:()=>{s.success("This is a success toast!",{duration:2e4})},children:"Show Success Toast"}),t.jsx(o,{className:"@mode-attention",emphasis:"light",onClick:()=>{s.error("This is an error toast!",{duration:2e4})},children:"Show Error Toast"}),t.jsx(o,{onClick:()=>{const{complete:i}=s.loading("This is a loading toast!");setTimeout(()=>{i("Loading complete!",{duration:5e3,type:"success"})},5e3)},children:"Show Loading Toast"}),t.jsx(o,{onClick:()=>{s.promise((async()=>{await new Promise(i=>setTimeout(i,3e3))})(),{loading:"Promise is loading... This text is longer to test animation of transition",success:"Promise resolved!",error:"Promise rejected."})},children:"Show Promise Toast"}),t.jsx(o,{onClick:()=>{s("This is a toast with actions!",{timeout:2e4,data:{actions:[{label:"Retry",emphasis:"primary",onClick:()=>{alert("Retry clicked!")}},{label:"Undo",emphasis:"light",onClick:()=>{alert("Undo clicked!")}}]}})},children:"Show Toast with Actions"}),t.jsx(o,{onClick:()=>{s({title:"Rich Toast",description:"This toast has both a title and a description.",timeout:2e4})},children:"Show Rich Toast"}),t.jsx(o,{onClick:()=>{s({id:"unique-toast-id",title:"Unique Toast",description:"This toast has a unique ID. If you click the button multiple times, it won't create multiple toasts, but will update the existing one.",timeout:2e4})},children:"Show Unique Toast"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,u as default};
