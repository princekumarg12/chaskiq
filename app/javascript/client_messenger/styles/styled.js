import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core'

import React from 'react'

import StyledFrame from '../styledFrame'
import { lighten, darken } from "polished";

import {textColor} from './utils' 

export const mainColor = "#0a1a27"; //"#42a5f5";


const rotate = keyframes`
  from {
    transform: rotate(-45deg);
    //transform: scale(0.5);
    translateY(-30);
  }

  to {
    transform: rotate(0deg);
    //transform: scale(1);
    transform: translateY(-8px);
  }
`;

const appear = keyframes`
  from {
    transform: translateY(1000px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Bounce = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`

export const FadeInBottom = keyframes`
    0% {
      -webkit-transform: translateY(50px);
              transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
`

export const FadeInRight = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const FadeOutBottom = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
  }
`

export const FadeOutRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(50px);
    opacity: 0;
  }
`

export const Container = styled.div`

  animation: ${appear} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  ${
    
    (props)=> props.isMobile ? 
  
      `min-height: 250px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
      opacity: 1;
      z-index: 2147483001;
      width: 100%;
      height: 100%;
      max-height: none;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      position: fixed;
      overflow: hidden;
      border-radius: 0px;` : 

      `z-index: 2147483000;
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 376px;
      min-height: 250px;
      max-height: 704px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
      opacity: 1;
      height: calc(100% - 120px);
      border-radius: 8px;
      overflow: hidden;`
  }

`;

export const AssigneeStatus = styled.span`
  font-size: 11px;
  color: ${(props)=> textColor(props.theme.palette.primary)};
`


export const ShowMoreWrapper = styled.div`

    z-index: 10000;
    position: absolute;
    width: 275px;
    //border: 1px solid red;
    display: flex;
    justify-content: space-between;

    ${(props)=> FadeBottomAnimation(props)}

    button {
      padding: 9px;
      box-shadow: -1px 1px 1px #00000036;
      border-radius: 11px;
      background: #a6aeceaa;
      border: none;
      color: white;
      cursor: pointer;
    }

    button.close{

    }

`

const Button = styled.button`
  color: turquoise;
`

export const SuperDuper = styled('div')`
  /*
  display: block;
  overflow: scroll;
  border: 0px;
  z-index: 10000;
  position: absolute;
  width: 100%;
  margin: 0px auto;
  height: 415px;
  bottom: 83px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    overflow: scroll;
    border: 0px;
    z-index: 1000000000;
    position: absolute;
    width: 100%;
    margin: 0px auto;
    height: 102vh;
    bottom: -6px;
    width: calc(100vw + 20px);
    left: -12px;
  }
  */

  width: 100%;
  height: 100%;
  position: absolute;
`

export const UserAutoMessageStyledFrame = styled(StyledFrame)
  `
    display: block;
    border: 0px;
    z-index: 1000;
    width: 350px;
    position: absolute;

    ${(props) => {
      return props.isMinimized ? `height: 73px;` : `height: 70vh;`
    }}

    ${(props)=>{
      return props.theme.isMessengerActive ? `
        bottom: 49px;
        right: 6px;
      ` : `
        bottom: 0px;
        right: 0px;
      `
    }}

    

    /* box-shadow: 1px 1px 100px 2px rgba(0,0,0,0.22); */
`

export const UserAutoMessageStyledFrameDis = styled(({ isMinimized, ...rest })=>(
  <StyledFrame {...rest}/>
  ))`
    display: block;
    border: 0px;
    z-index: 1000;
    width: 350px;
    position: absolute;

    ${(props) => {
      return props.isMinimized ? `height: 73px;` : `height: 70vh;`
    }}

    ${(props)=>{
      return props.theme.isMessengerActive ? `
        bottom: 77px;
        right: 17px;
      ` : `
        bottom: 0px;
        right: 0px;
      `
    }}

    /* box-shadow: 1px 1px 100px 2px rgba(0,0,0,0.22); */
`

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  z-index: 30000;
  top: 22px;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`

export const SuperFragment = styled.div`
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif,"Apple Color Emoji";

    .fade-in-bottom {
      -webkit-animation: ${FadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
              animation: ${FadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .fade-in-right {
      animation: ${FadeInRight} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .fade-out-bottom {
      animation: ${FadeOutBottom} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .fade-out-right {
      animation: ${FadeOutRight} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
}
`

export const FadeRightAnimation = (props)=>{
  return props.in === "in" ? 
      `animation: ${FadeInRight.name} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;      ` : 
      `animation: ${FadeOutRight.name} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`
}

export const FadeBottomAnimation = (props)=>{
  return props.in === "in" ? 
      `animation: ${FadeInBottom.name} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;` : 
      `animation: ${FadeOutBottom.name} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`
}

export const MessageSpinner = styled.div`
  display: inline-block;
  padding: 15px 20px;
  font-size: 14px;
  color: #ccc;
  border-radius: 30px;
  line-height: 1.25em;
  font-weight: 200;
  opacity: 0.2;
  margin: 0;
  width: 30px;
  text-align: center;

  & > div {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${Bounce} 1.4s infinite ease-in-out both;
    animation: ${Bounce} 1.4s infinite ease-in-out both;
    background: rgba(0,0,0,1);
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  
  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`

export const UserAutoMessageFlex = styled(({ isMinimized, ...rest }) => (
  <div {...rest} />
))`
  display: flex;
  flex-direction: column;

  ${(props) => {
    return props.isMinimized ? `height: 70vh;` : `height: 92vh;`
  }}

  
  justify-content: space-between;
`

export const MessageCloseBtn = styled.a`
  position: absolute;
  right: 8px;
  display: inline-block;
  padding: 4px;
  background: #73737394;
  border-radius: 3px;
  font-size: 0.8em;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  float: right;
  color: white;
  text-transform: uppercase;
  font-weight: 100;
`

export const ConversationEventContainer = styled.div`
  padding: 1.2em;
  border-radius: 7px;
  background: gold;
  display: flex;
  justify-content: center;
  margin: 1.2em;
`

export const AppPackageBlockContainer = styled.div`
    padding: 1.2em;
    border-radius: 7px;
    background: #f1f0f9;
    display: flex;
    justify-content: center;
    margin: 1.2em;

    .form-group{
      //margin-bottom: 1rem;
    }
    
    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      //width: 69%;
      flex-wrap: wrap;
      button {
        margin: 3px;
      }
    }
    label {
      margin: 3px;
      display: inline-block;
      margin-bottom: .5rem;
    }
    input {
      margin: 3px;
      display: block;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    button:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
    [type=reset], [type=submit], button, html [type=button] {
        -webkit-appearance: button;
    }
    button {
      //.btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      //}

      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
`




export const UserAutoMessage = styled.div`
    box-shadow: -1px 3px 3px 3px rgba(158,191,208,0.09);
    border: 1px solid #f3f0f0;
    height: 100vh;
    width: 96vw;
    overflow: scroll;
    border-radius: 5px;
    background: #fff;
    /* -webkit-flex: 1; */
    -ms-flex: 1;
    /* flex: 1; */
    /* align-self: end; */
    margin-bottom: 10px;
`

export const UserAutoMessageBlock = styled.div`
    height: 16px;
    width: 96vw;
    background: transparent;
    margin-bottom: 10px;
`

export const AvatarSection = styled.div`
  /* stylelint-disable value-no-vendor-prefix */
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  /* stylelint-enable */
  grid-area: avatar-area;
  margin-right: 8px;
`;

export const EditorSection = styled.div`
  /* stylelint-disable value-no-vendor-prefix */
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  /* stylelint-enable */
  grid-area: editor-area;
`;

export const EditorWrapper = styled.div`
  width: 376px;
  position: fixed;
  right: 14px;
  bottom: 14px;
  z-index: 90000000000000000;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    right: 0px;
    bottom: 0px;
  }

  .inline-frame {
    z-index: 10000000;
    position: absolute;
    bottom: 89px;
    width: 288px;
    
    right: 20px;
    border: none;


    @media screen and (min-width: 1024px) and (max-width: 1280px) { 
      height: 26vw;
    }
   
    @media screen and (min-width: 781px) and (max-width: 1024px) {
      height: 50vw;
    }
   
    @media screen and (min-width: 320px) and (max-width: 780px) {
      height: 100vw;
    }

  }


`

export const EditorActions = styled.div`
  box-sizing: border-box;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  padding: 12px 1px;
`

export const CommentsWrapper = styled.div`
  /*min-height: 250px;
  overflow: auto;

  ${(props)=> ( props.isMobile ? 
  'min-height: 76vh; overflow: auto; max-height: 250px;' : 
  'height: 248px;' 
  )}*/

  padding-bottom: 105px;

  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow-anchor: none;
  height: auto;
  -webkit-box-orient: vertical;

  ${(props)=> ( props.isReverse ? 
    `
    -ms-flex-direction: column-reverse;
    flex-direction : column-reverse;` : `
      -ms-flex-direction: column;
      flex-direction: column;
    `

  )}

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
`

export const CommentsItem = styled.div`
    padding: 12px;
    /* background-color: #ccc; */
    border-bottom: 1px solid #ececec;
    cursor: pointer;
    &:hover{
      background: aliceblue;
      border-bottom: 1px solid #ececec;
    }

    transition: all 0.4s ease-out;

    ${(props)=> props.displayOpacity ? 
      `opacity: 1;` : 
      `opacity: 0;` 
    }
    
`

export const Prime = styled.div`
    position: relative;
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    text-align: center;
    margin: 0 0;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
    cursor: pointer;
    transition: all .1s ease-out;
    position: relative;
    z-index: 998;
    //overflow: hidden;
    color: ${(props)=> textColor(props.theme.palette.secondary)};
    background: ${(props)=> props.theme.palette.secondary };
    float: right;
    margin: 14px 27px;
    animation: ${rotate} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const CountBadge = styled.div`
  position: absolute;
  border-radius: 50%;
  /* height: 20px; */
  width: 13px;
  padding: 4px;
  background-color: red;
  font-size: 10px;
  text-align: center;
  color: #f3f3f3;
  ${(props)=> props.section === "home" ? 
    `top: 64px;left: 14px;` : "" 
  }

  ${(props)=> props.section === "conversation" ? 
  `top: 13px;left: 7px;` : "" }

  ${(props)=> props.section === "conversations" ? 
  `top: 13px;left: 7px;` : "" }

}

`

export const Header = styled(({isMobile, ...rest})=>(<div {...rest}></div>))`
  /*
    defaults 
    rgb(36, 36, 36);
  */
 
  /*
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${(props)=> textColor(props.theme.palette.primary)};
  height: 55px;
  background: ${mainColor};

  padding-top: 8px;

  border-top-left-radius: ${(props) => props.isMobile ? '0px' : '10px' };
  border-top-right-radius: ${(props) => props.isMobile ? '0px' : '10px' };
  */

  height: 75px;
  position: relative;
  min-height: 75px;
  background: ${(props)=> props.theme.palette.primary };
  background: linear-gradient(135deg, ${(props)=> props.theme.palette.primary } 0%,${(props)=> darken(0.2, props.theme.palette.primary) } 100%);
  color: ${(props)=> textColor(props.theme.palette.primary)};
  -webkit-transition: height 160ms ease-out;
  transition: height 160ms ease-out;

  &:before{
    content: "";
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: absolute;
    ${(props)=>{
      return props.theme.palette.pattern ? 
      `
        opacity: 0.38; 
        background-image: url(${props.theme.palette.pattern});
      ` : ''
    }}
    background-size: 610px 610px, cover;
    pointer-events: none;
  }

`

export const Body = styled.div`
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
    -webkit-box-shadow: inset 0 21px 4px -20px rgba(0,0,0,.2);
    box-shadow: inset 0 21px 4px -20px rgba(0,0,0,.2);
`

export const Footer = styled.div`

    z-index: 2147483001;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0 0 6px 6px;
    height: 90px;
    /*pointer-events: none;*/
    background: -webkit-gradient(linear,left bottom,left top,from(#fff),to(rgba(255,255,255,0)));
    background: linear-gradient(0deg,#fff,rgba(255,255,255,0));

    &.inline{
      background: transparent;
      textarea {
        border-radius: 4px !important;
        box-shadow: rgba(35, 47, 53, 0.09) 4px 5px 9px 0px !important;
      }
      input[type="file"]{
        display: none;
      }
    }
`

export const ConversationsFooter = styled.div`
  z-index: 2147483001;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 6px 6px;
  height: 90px;
  pointer-events: none;
  background: -webkit-gradient(linear,left bottom,left top,from(#fff),to(rgba(255,255,255,0)));
  background: linear-gradient(0deg,#fff,rgba(255,255,255,0));
}
`

export const UserAutoChatAvatar = styled.div`
    display:flex;
    align-items: center;
    span{
      font-size: 0.8rem;
      margin-left: 10px;
      color: #b1b1b1;
    }
    img {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 50%;
    }
`

export const ReadIndicator = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  left: 3px;
  top: 20px;
  border-radius: 50%;

`

export const MessageItem = styled.div`
    position: relative;
    margin: 8px 0 15px 0;
    padding: 8px 10px;
    //max-width: ${(props) => (props.messageSourceType === "UserAutoMessage" ?  '86%' : '60%')};
    min-width: 25%;
    display: block;
    word-wrap: break-word;
    -webkit-animation: zoomIn .5s cubic-bezier(.42, 0, .58, 1);
    animation: zoomIn .5s cubic-bezier(.42, 0, .58, 1);
    clear: both;
    z-index: 999;

    &.admin {
      align-self: flex-start;
      display: flex;
      flex-direction: row;
      
      .message-content-wrapper {
        background: #fff;
        padding: 16px;
        margin: 5px;
        border-radius: 6px;
        /* box-shadow: 1px 1px 2px #e0e0e0; */
        /* border: 1px solid #dedbdb; */
        min-width: 80px;

        /* NEW */
        box-shadow: rgba(35, 47, 53, 0.09) 0px 2px 8px 0px;
        font-size: 13px;
        line-height: 1.5;
        //height: 100%;
        position: relative;
        padding: 17px 22px;
        border-radius: 5px 5px 5px 0px;
        
      }

      .text{
        p{
          color: #000;
        }
      }
    }

    &.user {

      .message-content-wrapper {
        background: ${mainColor};
        min-width: 80px;
        padding: 16px;
        margin: 5px;
        border-radius: 6px;
        /* box-shadow: 1px 1px 2px #e0e0e0; */
        /* border: 1px solid #dedbdb; */
        min-width: 80px;

        /* NEW STYLES */
        box-shadow: rgba(35, 47, 53, 0.09) 0px 2px 8px 0px;
        font-size: 13px;
        line-height: 1.5;
        height: 100%;
        position: relative;
        padding: 17px 22px;
        border-radius: 5px 5px 0px 5px;
      }
      // hack on image from user, not use position absolute
      .graf-image {
        position: inherit !important;
      }


      ${(props) => (props.messageSourceType === "UserAutoMessage" ? `
        align-self: center;
        border: 1px solid #f1f0f0;
      ` : `
        align-self: flex-end;
        //background: ${mainColor};
        //margin-right: 20px;
        //float: right;
        display: flex;
        flex-direction: row-reverse;

      `)}

      color: #eceff1; 

      .text{
        p{
          color: #fff;
        }
      }
    }


    .text{
      margin-bottom: 1em;
      color: #eceff1; 
      p{
        font-size: 0.86rem;
        margin: 0px;
        padding: 0px;
      }
    }


    .status {
      display: flex;
      justify-content: flex-end;
      color: #b1afaf;
      font-size: 12px;
      text-align: right;
    }
`;

export const HeaderOption = styled.div`
  //float: left;
  font-size: 15px;
  list-style: none;
  position: relative;
  height: 100%;
  width: 100%;
  text-align: relative;
  margin-right: 10px;
  letter-spacing: 0.5px;
  font-weight: 400;
  display: flex;
  align-items: center;
  ${(props)=> FadeRightAnimation(props)}
`

export const HeaderTitle = styled.span`
  /*${(props)=> FadeRightAnimation(props)}*/
`

export const HeaderAvatar = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-self: center;
    //margin-left: 15px;
    color: ${(props)=> textColor(props.theme.palette.primary)};

    img {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 50%;
    }

    div{
      display: flex;
      flex-flow: column;
      margin-left: .6em;
      p {
        padding: 0px;
        margin: 0px;
      }
    }
`

export const ChatAvatar = styled.div`
    //left: -52px;
    //background: rgba(0, 0, 0, 0.03);
    //position: absolute;
    //top: 0;

    align-self: flex-end;

    img {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 50%;
    }
`

export const AnchorButton = styled.a`
  text-decoration: none;
  background-color: ${(props)=> props.theme.palette.secondary };
  -webkit-box-shadow: 0 4px 12px rgba(0,0,0,.1);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  height: 40px;
  color: ${(props)=> textColor(props.theme.palette.secondary)} !important;
  font-size: 13px;
  line-height: 14px;
  pointer-events: auto;
  cursor: pointer;
  border-radius: 40px;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;


  padding: 0 24px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

`

export const NewConvoBtn = styled(AnchorButton)`
    position: absolute;
    bottom: 77px;
    left: 20%;
    ${(props)=> FadeBottomAnimation(props)}
`

export const ConversationSummary = styled.div`

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    position: relative;
    padding: 6px;

`

export const ConversationSummaryAvatar = styled.div`
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      align-self: flex-end;
      margin-left: 15px;
      img {
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
      }
`

export const ConversationSummaryBody = styled.div`
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      padding-left: 16px;    
`

export const ConversationSummaryBodyMeta = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 8px;   
`

export const ConversationSummaryBodyItems = styled.div`
  display: flex;
  font-size: 12px;
  .you{
    margin-right:5px;
  }
`
export const ConversationSummaryBodyContent = styled.div`
  color: #969696;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  //padding-left: 16px;    
  font-weight: 300;
  p {
    margin: 0px;
  }
`

export const Autor = styled.div`
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #8b8b8b;
`

export const Hint = styled.p`
    padding: 29px;
    color: rgb(136, 136, 136);
    background: #f9f9f9;
    margin: 0px;
    height: 100%;
`


export const SpinnerAnim = keyframes`
  to {transform: rotate(360deg);}
`

export const Spinner = styled.div`
  &:before {
    content: '';
    box-sizing: border-box;
    //position: absolute;
    //top: 50%;
    //left: 50%;
    width: 20px;
    height: 20px;
    //margin-top: -10px;
    //margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: ${SpinnerAnim} .6s linear infinite;
    display:inline-block;
  }
`
