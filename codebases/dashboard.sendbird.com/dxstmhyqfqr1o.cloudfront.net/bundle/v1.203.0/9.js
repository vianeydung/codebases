(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ZtXK:function(e,t,i){"use strict";i.d(t,"e",(function(){return m})),i.d(t,"b",(function(){return j})),i.d(t,"a",(function(){return x})),i.d(t,"c",(function(){return h})),i.d(t,"d",(function(){return C})),i.d(t,"f",(function(){return y}));var a=i("dDsW"),n=i("vOnD"),s=i("JsuU"),r=i("UWC4"),o=i("6889"),d=i("nKUr");const l=n.default.li.withConfig({displayName:"UserCard__UserCardContainer",componentId:"sc-1ai7ki1-0"})(["border:1px solid ",";height:64px;",""],Object(s.cssVariables)("neutral-3"),e=>e.$single?Object(n.css)(["display:flex;justify-content:center;align-items:center;"]):Object(n.css)(["display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto;grid-gap:12px;align-items:center;padding:13px 15px;"])),c=n.default.div.withConfig({displayName:"UserCard__Content",componentId:"sc-1ai7ki1-1"})(["display:flex;flex-direction:column;"]),p=n.default.span.withConfig({displayName:"UserCard__Nickname",componentId:"sc-1ai7ki1-2"})([""," position:relative;word-break:break-all;> ","{display:inline-flex;margin-left:4px;}"],s.Subtitles["subtitle-01"],s.Lozenge),u=n.default.div.withConfig({displayName:"UserCard__CopyButtonWrapper",componentId:"sc-1ai7ki1-3"})(["position:relative;align-items:center;div{position:absolute;transform:translateY(-4px);}"]),b=n.default.span.withConfig({displayName:"UserCard__ID",componentId:"sc-1ai7ki1-4"})([""," word-break:break-all;cursor:",";color:",";","{margin-left:4px;}> ","{display:none;}&:hover{> ","{display:inline-flex;}}"],s.Typography["caption-01"],e=>e.$disabled?"auto":"default",e=>e.$disabled?Object(s.cssVariables)("neutral-5"):Object(s.cssVariables)("neutral-7"),s.Lozenge,u,u),m=n.default.ul.withConfig({displayName:"UserCard__UserCardList",componentId:"sc-1ai7ki1-5"})(["list-style:none;",":first-child{border-top-left-radius:4px;border-top-right-radius:4px;}",":last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}"," + ","{margin-top:-1px;}"],l,l,l,l);var g=Object(n.default)(s.Tooltip).withConfig({displayName:"UserCard___StyledTooltip",componentId:"sc-1ai7ki1-6"})(["display:inline-flex;"]);const j=()=>{const e=Object(a.a)();return Object(d.jsx)(g,{variant:s.TooltipVariant.Light,content:e.formatMessage({id:"calls.studio.components.userCard.deleted.tooltip"}),tooltipContentStyle:"max-width: 256px;",children:Object(d.jsx)(s.Lozenge,{variant:s.LozengeVariant.Light,color:"red","data-test-id":"Deleted",children:e.formatMessage({id:"calls.studio.components.userCard.deleted"})})})},x=()=>{const e=Object(a.a)();return Object(d.jsx)(s.Lozenge,{variant:s.LozengeVariant.Light,color:"neutral","data-test-id":"Deactivated",children:e.formatMessage({id:"calls.studio.components.userCard.deactivated"})})},f=({message:e})=>Object(d.jsx)(s.Tooltip,{variant:s.TooltipVariant.Light,tooltipContentStyle:"max-width: 256px;",content:e,children:Object(d.jsx)(s.TooltipTargetIcon,{icon:"warning-filled",color:Object(s.cssVariables)("red-5")})}),h=({userId:e,nickname:t,profileUrl:i,deactivated:a,deleted:n,errorMessage:s,action:m})=>{const g=!(!n&&!s);return Object(d.jsxs)(l,{"data-test-id":"UserCard",children:[Object(d.jsx)(o.Zb,{size:"medium",userID:e,imageUrl:i}),Object(d.jsxs)(c,{children:[!g&&Object(d.jsx)(o.ab,{component:p,text:t||r.Z,maxLines:1,children:a&&Object(d.jsx)(x,{})}),Object(d.jsxs)(o.ab,{component:b,text:`User ID: ${e}`,maxLines:g?2:1,children:[!g&&Object(d.jsx)(u,{children:Object(d.jsx)(o.D,{size:"xsmall",copyableText:e})}),n&&Object(d.jsx)(j,{}),s&&Object(d.jsx)(f,{message:s})]})]}),m]})};var O=Object(n.default)(s.InlineNotification).withConfig({displayName:"UserCard___StyledInlineNotification",componentId:"sc-1ai7ki1-7"})(["margin:7px 15px;width:100%;"]);const C=({message:e,onRetry:t})=>{const i=Object(a.a)();return Object(d.jsx)(l,{$single:!0,children:Object(d.jsx)(O,{type:"error",message:e,action:{label:i.formatMessage({id:"calls.studio.components.userCard.retry"}),onClick:t}})})},y=()=>Object(d.jsx)(l,{$single:!0,children:Object(d.jsx)(s.Spinner,{})})}}]);
//# sourceMappingURL=9.js.map?v=751cdf0381ed5a18d07b