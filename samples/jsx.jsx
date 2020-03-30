import React, { Component } from "react";
import MessagesList from "./messagesList";
import { getCurrentUser } from "../services/authService";
import { getUserFromId } from "../services/userService";
import MessagesChat from "./messagesChat";
import MessagesInput from "./messagesInput";

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 1 }
  },
  icon: {
    height: 50,
    backgroundColor: "#FFD540"
  },
  input: {
    fontSize: 20
  }
});

Input.defaultProps = {
  placeholder: "Placeholder text"
};

class Messages extends Component {
  state = {
    selectedConversation: null
  };

  getSelectedConversation = (
    conversation_id,
    user_conversations,
    new_conversation
  ) => {
    let userConversations = user_conversations
        ? user_conversations
        : this.state.userConversations,
      newConversation = new_conversation;

    if (newConversation) return newConversation;
    return userConversations.find(
      obj => obj.conversation_id === parseInt(conversation_id)
    );
  };

  getTempConversation = async queryStringParams => {
    const user = getCurrentUser();
    let { to: toUserId } = queryStringParams,
      { data: recipent } = await getUserFromId(toUserId);

    return {
      conversation_id: "provisoric",
      recipent: recipent.name
    };
  };

  render() {
    const { userConversations, selectedConversation, user } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              {userConversations && (
                <MessagesList
                  selectedConversation={selectedConversation}
                  userConversations={userConversations}
                  onClick={this.handleClick}
                  currentUser={user}
                />
              )}
            </div>
            {selectedConversation && (
              <div className="col chat-container">
                {
                  <MessagesChat
                    conversation={selectedConversation}
                    parent={this}
                    scrollToBottom={this.scrollToBottom}
                    currentUser={user}
                    messagesFetched={this.handleMessagesFetched}
                  />
                }
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col">
              {user && selectedConversation && (
                <MessagesInput
                  newConversationCreated={this.newConversationCreated}
                  conversation={selectedConversation}
                  currentUser={user}
                  test="str"
                  test2={100}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
