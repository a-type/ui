import{j as e,ao as n,B as a,b as u}from"./iframe-5VeFnoCW.js";import{I as o}from"./Input-DOaNHhHL.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Input.module-C9Yg6vyE.js";const g={title:"Components/ScrollArea",argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal","both"]}},args:{direction:"vertical"},parameters:{controls:{expanded:!0}}},t={render({direction:i}){return e.jsx(n,{direction:i,style:{height:"200px",width:"400px"},children:e.jsx(n.Content,{style:{width:i==="horizontal"?"10000px":void 0,height:i==="both"?"10000px":void 0},children:e.jsx(r,{})})})}},s={render({direction:i}){return e.jsx(n,{direction:i,style:{height:300,width:300},children:e.jsxs(n.Content,{children:[e.jsxs(a,{gap:!0,children:[e.jsx(o,{placeholder:"Test input"}),e.jsx(u,{children:"Submit"})]}),e.jsx(r,{})]})})}};function r(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sollicitudin ornare. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consectetur. Vivamus fermentum nibh in augue. Praesent a lacus at urna consequat rhoncus. Morbi dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut rhoncus gravida arcu."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sollicitudin ornare. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consectetur. Vivamus fermentum nibh in augue. Praesent a lacus at urna consequat rhoncus. Morbi dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut rhoncus gravida arcu."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sollicitudin ornare. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consectetur. Vivamus fermentum nibh in augue. Praesent a lacus at urna consequat rhoncus. Morbi dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut rhoncus gravida arcu."})]})}t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render({
    direction
  }) {
    return <ScrollArea direction={direction} style={{
      height: '200px',
      width: '400px'
    }}>
                <ScrollArea.Content style={{
        width: direction === 'horizontal' ? '10000px' : undefined,
        height: direction === 'both' ? '10000px' : undefined
      }}>
                    <Content />
                </ScrollArea.Content>
            </ScrollArea>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render({
    direction
  }) {
    return <ScrollArea direction={direction} style={{
      height: 300,
      width: 300
    }}>
                <ScrollArea.Content>
                    <Box gap>
                        <Input placeholder="Test input" />
                        <Button>Submit</Button>
                    </Box>
                    <Content />
                </ScrollArea.Content>
            </ScrollArea>;
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","ConstraintTest"];export{s as ConstraintTest,t as Default,h as __namedExportsOrder,g as default};
