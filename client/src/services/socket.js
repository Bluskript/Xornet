import io from "socket.io-client";
import { token } from "@/services/localStorage";

const socket = io("wss://backend.xornet.cloud", {
  reconnect: true,
  auth: {
    type: "client",
    token: token.value,
  },
});
socket.on("connect", () => console.log("[Socket] Connected"));
socket.on("disconnect", () => console.log("[Socket] Disconnected"));

export default socket;
