import React, { useRef, useState } from 'react'
import 'lu2/theme/edge/css/common/ui/Button.css'
import 'lu2/theme/edge/css/common/ui/Input.css'
import 'lu2/theme/edge/css/common/ui/Date.css'
import 'lu2/theme/edge/js/common/ui/DateTime.js'
import './index.less'
function CssComponent() {
  const dialogRef = useRef(null)
  const [show, setShow] = useState(false)
  function open() {
    dialogRef.current.showModal()
  }
  function close() {
    dialogRef.current.close()
  }
  function openCustom() {
    setShow(true)
  }
  function hidden() {
    setShow(false)
  }
  return <div id='csscomponent__wrapper'>
    <div className='lulu__ui__wrapper'>
      <h2>Lu Lu UI edge主题</h2>
      <h3>Lu Lu UI button</h3>
      <p><button className='ui-button'>lulu ui button</button></p>
      <p><button className='ui-button loading'>lulu ui loading</button></p>
      <p><button className='ui-button disabled'>lulu ui disabled</button></p>
      <p><button is='ui-button'>is属性 lulu ui disabled</button></p>
      <p><button is='ui-button' type='primary'>is属性 lulu ui primary</button></p>
      <input type="date" is="ui-datetime" />
    </div>
    <div className='loading__mask'>
      <h3>mask&animation的用法</h3>
      <p><button className='btn'></button></p>
      <p><button className='btn-chi'></button></p>
      <div className='smile'></div>
    </div>
    <div className='dialog__wrapper'>
      <button is='ui-button' onClick={open}>打开html原生弹框</button>
      <dialog ref={dialogRef} className='css-dialog'>
        <p>html 原生弹框dialog😊😂🤣❤😍😍👌😘</p>
        <button onClick={close} className='btn'>关闭</button>
      </dialog>
    </div>
    <div className='custom__dialog'
      onClick={hidden}
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? 1 : 0
      }}>
      <div className='panel'
        style={{
          marginTop: show ? 0 : -40
        }}>
          自定义弹框😘👌😁😍❤🤦‍♀️😂🤦‍♂️🤦‍♂️😁💕✌🤞
        </div>
    </div>
    <p><button className='custBtn' onClick={openCustom}>打开自定义弹框</button></p>
  </div>
}

export default CssComponent
