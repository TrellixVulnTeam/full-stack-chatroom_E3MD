
import './ChatMessage.css';


function ChatMessage(props) {

  return (
      
   
    <div className={"chat-message-view "+ (props.isUser?"user":" ")}>
                <p class="username-text">{props.userName}</p>
        <p onClick={props.onClick} className={"chat-message-text "+ (props.isUser?"user":" ")}>
            {props.text}
        </p>


    </div>
    );
}

export default ChatMessage;
