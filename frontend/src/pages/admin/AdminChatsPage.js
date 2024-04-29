import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const AdminChatsPage = () => {
    const { chatRooms, socket } = useSelector((state) => state.adminChat);

    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />
            </Col>
            <Col md={10}>
                <Row>
                    {Object.entries(chatRooms).map(([socketUser, chatRoom], index) => (
                        <AdminChatRoomComponent
                            key={socketUser}
                            chatRoom={chatRoom}
                            roomIndex={index + 1}
                            socket={socket}
                            socketUser={socketUser}
                        />
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default AdminChatsPage;
