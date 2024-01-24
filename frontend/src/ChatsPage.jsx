import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
    <PrettyChatWindow
        projectId='9fbce1f2-623d-4033-a389-a21d6267f1de'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
    />
</div>

  );
};

export default ChatsPage; 