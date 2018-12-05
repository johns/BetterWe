import socketIOClient from 'socket.io-client';


export default function createTask(taskData) {
  const endpoint= "http://10.27.230.45:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (taskData.taskName !== '') {
    socket.emit('createTask', taskData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
