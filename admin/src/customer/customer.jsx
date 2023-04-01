import React, { useEffect, useState } from "react";
import "./customer.css";
import { io } from "socket.io-client";
import axios from "axios";
import axiosClient from "../API/axiosClient";

const Customer = () => {
  const [name, setname] = useState("abcd123123123ef");
  const [users, setusers] = useState("");
  const [content, setContent] = useState();
  let [datamessage, setdatamess] = useState([]);
  const [load, setload] = useState(false);

  // id dùng để chat
  const [id, setid] = useState("");
  const addPost = (data) => {
    setname(data);
  };
  const submitHanler = (e) => {
    e.preventDefault();
    if (!id) {
      return;
    }
    const data = {
      id: id,
      content: content,
      sender: "admin",
    };
    axiosClient.post("/chat", data).then((data) => {
      // console.log(data);
      setContent("");
    });
  };
  const renderuser = (user) => {
    // console.log(user);
    return (
      <div className="user_list_item">
        <img
          className="avatar"
          src="https://img.icons8.com/color/36/000000/administrator-male.png"
          alt="..."
        />
        <div
          className="user_list_item_id"
          onClick={() => {
            // console.log(user._id);
            setid(user._id);
            localStorage.setItem("chatid", user._id);
          }}
        >
          {user._id}
        </div>
      </div>
    );
  };
  let socket;
  useEffect(() => {
    socket = io("https://server-asm3.glitch.me", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });
    socket.on("posts", (data) => {
      console.log(data.action);
      console.log(id);
      console.log(users);
      console.log(data.action == localStorage.getItem("chatid"));
      if (data.action == localStorage.getItem("chatid")) {
        setload(true);
      }
    });
  }, []);
  useEffect(() => {
    axiosClient.get("/users").then((data) => {
      console.log(data.data);
      const userfilter = data.data.filter((i) => i.role == "client");
      if (userfilter.length > 0) {
        // console.log(userfilter[0]._id);
        setid(userfilter[0]._id);
        setusers(userfilter);
      }
    });
  }, []);
  useEffect(() => {
    if (id) {
      axiosClient.get(`/chat/${id}`).then((data) => {
        console.log(data);
        if (data.data) {
          setdatamess(data.data.message);
        } else {
          setdatamess([]);
        }
      });
    }
    setload(false);
  }, [id, load]);
  // console.log(datamess);
  console.log(id);
  return (
    <div className="chat">
      {!localStorage.getItem("userId") ? (
        <h1>Please Login</h1>
      ) : (
        <>
          <div className="userlist">
            {users && users.map((user) => renderuser(user))}
          </div>
          <div className="message">
            <div className="content">
              {datamessage &&
                datamessage.map((value) =>
                  value.sender === "admin" ? (
                    <div className="admin" key={value.id}>
                      <p className="message-content">You: {value.content}</p>
                    </div>
                  ) : (
                    <div className="client" key={value.id}>
                      <div className="chat-client">
                        <img
                          className="avatar"
                          src="https://img.icons8.com/color/36/000000/administrator-male.png"
                          alt="..."
                        />
                        <div className="media-body" key={value.id}>
                          <p className="message-content">
                            Client: {value.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
            <form onSubmit={submitHanler}>
              <input
                className="form_input"
                type="text"
                value={content}
                name="name"
                placeholder="Type and Enter"
                onChange={(e) => setContent(e.target.value)}
              />
              <button className="send_btn" type="submit">
                send
              </button>
              {/* <i class="fa-solid fa-paper-plane"></i> */}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Customer;
