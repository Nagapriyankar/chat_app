import React from 'react'

const Message = () => {
  return (
      <div>
          < div className="chat chat-start" >
          <div className="chat-image avatar">
              <div className="w-10 rounded-full ">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>
          <div className="chat-bubble">Hi How are you?</div>
          <div className="chat-footer opacity-50 text-white">12:46</div>
      </div >
          < div className="chat chat-end" >
              <div className="chat-image avatar">
                  <div className="w-10 rounded-full ">
                      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
              </div>
              <div className="chat-bubble">I am fine! And you?</div>
              <div className="chat-footer opacity-50 text-white">12:46</div>
          </div >
      </div>
  )
}

export default Message



/* starter code for Message 

import React from 'react'

const Message = () => {
  return (
      <div>
          < div className="chat chat-start" >
          <div className="chat-image avatar">
              <div className="w-10 rounded-full ">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>
          <div className="chat-bubble">Hi How are you?</div>
          <div className="chat-footer opacity-50 text-white">12:46</div>
      </div >
          < div className="chat chat-end" >
              <div className="chat-image avatar">
                  <div className="w-10 rounded-full ">
                      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
              </div>
              <div className="chat-bubble">I am fine! And you?</div>
              <div className="chat-footer opacity-50 text-white">12:46</div>
          </div >
      </div>
  )
}

export default Message */