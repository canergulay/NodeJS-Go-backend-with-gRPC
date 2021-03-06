const responseWrapper = require("../../../utils/response_wrapper");
const { Logger } = require("../../../utils/log_manager");
const {
  SaveMessage,
  CreateConversation,
  CheckIfConversationExist,
  GetConversationById,
  UpdateConversationLastMessage,
  GetConversationsUserIn,
  GetMessages,
} = require("../datasource/chat_datasource");

const CheckUserConversationsRepositary = (userid) => {
  return GetConversationsUserIn(userid)
    .then((conversations) => {
      return responseWrapper(0, conversations);
    })
    .catch((e) => {
      Logger(
        e,
        "An unexpected error has occured when checking user conversations for the following userid",
        userid,
      );
      return responseWrapper(1, e);
    });
};

const GetMessagesRepositary = (conversationid, lastMessageCreatedAt) => {
  return GetMessages(conversationid, lastMessageCreatedAt)
    .then((messages) => {
      return responseWrapper(0, messages);
    })
    .catch((e) => {
      Logger(
        e,
        "An unexpected error has occured when getting messages for the following conversationid and lastMessageCreatedAt",
        conversationid,
        lastMessageCreatedAt
      );
      return responseWrapper(1, e);
    });
};

const SaveMessageRepositary = (message) => {
  SaveMessage(message)
    .then((saved) => {
      const { conversationId } = message;
      return UpdateConversationLastMessage(conversationId, saved.id);
    })
    .then((conversationUpdated) => {
      return true;
    })
    .catch((e) => {
      return false;
    });
};

const CheckIfConversationExistAndSaveMessage = async (message) => {
  let convid = await CheckIfConversationExist(message.sender, message.receiver).then(
    (conversations) => {
      const doesConversationExist = conversations.length >= 1;
      if (doesConversationExist) {
        let conversation = conversations[0];
        message.conversationId = conversation.id;
        SaveMessageRepositary(message);
        return conversation.id
      } else {
        CreateConversation(message.sender, message.receiver).then(
          (conversationCreated) => {
            message.conversationId = conversationCreated.id;
            SaveMessageRepositary(message);
            return conversationCreated.id
          }
        );
      }
    }
  );
  return convid
};

module.exports = {
  SaveMessageRepositary,
  CheckIfConversationExistAndSaveMessage,
  CheckUserConversationsRepositary,
  GetMessagesRepositary,
};
