import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function createGroup(groupData) {
  const endpoint= config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupData.groupName !== '' && groupData.activityType !== '' && groupData.email !== '') {
    socket.emit('createGroupInfo', groupData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
