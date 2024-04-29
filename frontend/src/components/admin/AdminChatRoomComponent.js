import { Toast, Button, Form } from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";
import { setMessageReceived } from "../../redux/actions/chatActions";
import { useDispatch } from "react-redux";

const AdminChatRoomComponent = ({ chatRoom, roomIndex, socket, socketUser }) => {
    const dispatch = useDispatch();

    const [showToast, setShowToast] = useState(true);
    const [rerender, setRerender] = useState(false);

    const closeToast = (socketId) => {
        setShowToast(false);
        socket.emit("admin closes chat", socketId);
    };

    const adminSubmitChatMsg = (e) => {
        e.preventDefault();
        const msg = e.target.elements.adminChatMsg.value.trim();
        if (!msg) return;
        chatRoom[1].push({ admin: msg });
        socket.emit("admin sends message", { user: socketUser, message: msg });
        setRerender(!rerender);
        dispatch(setMessageReceived(false));
        e.target.elements.adminChatMsg.value = "";
        setTimeout(() => {
            const chatMessages = document.querySelector(`.cht-msg${socketUser}`);
            if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 200);
    };

    useEffect(() => {
        const chatMessages = document.querySelector(`.cht-msg${socketUser}`);
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    }, [rerender, socketUser]);

    return (
        <>
            <Toast show={showToast} onClose={() => closeToast(chatRoom[0])} className="ms-4 mb-5">
                <Toast.Header>
                    <strong className="me-auto">Chat with User</strong>
                </Toast.Header>
                <Toast.Body>
                    <div className={`cht-msg${socketUser}`} style={{ maxHeight: "500px", overflow: "auto" }}>
                        {chatRoom[1].map((msg, idx) => (
                            <Fragment key={idx}>
                                {msg.client && (
                                    <p key={idx} className="bg-primary p-3 ms-4 text-light rounded-pill">
                                        <b>User wrote:</b> {msg.client}
                                    </p>
                                )}
                                {msg.admin && (
                                    <p key={idx}>
                                        <b>Admin wrote:</b> {msg.admin}
                                    </p>
                                )}
                            </Fragment>
                        ))}
                    </div>

                    <Form onSubmit={adminSubmitChatMsg}>
                        <Form.Group className="mb-3" controlId={`adminChatMsg${roomIndex}`}>
                            <Form.Label>Write a message</Form.Label>
                            <Form.Control as="textarea" rows={2} name="adminChatMsg" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Toast.Body>
            </Toast>
        </>
    );
};

export default AdminChatRoomComponent;
