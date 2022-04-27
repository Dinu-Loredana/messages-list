import 'antd/dist/antd.css';
import {useState} from "react";
import EditingMessageModal from "./components/EditingMessageModal";
import MessagesList from "./components/MessagesList";
import MessageModal from "./components/MessageModal";
import NoMessage from "./components/NoMessage";
import {Heading, sortMessagesByDate} from "./UI/helpers";


function App() {
    const [messagesList, setMessagesList] = useState([])
    const [visibleForm, setVisibleForm] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editingMessage, setEditingMessage] = useState(null)


    const showForm = () => {
        setVisibleForm(true)
    }

    const hideForm = () => {
        setVisibleForm(false)
    }


    const addNewMessage = (newMsg) => {
        setMessagesList(prevList => {
            return sortMessagesByDate(newMsg, prevList)
        })

        hideForm()
    }


    const editMessage = (msg) => {
        setIsEditing(true)
        setEditingMessage({...msg})
    }

    const deleteMessage = (id) => {
        setMessagesList(prevState => prevState.filter(msg => msg.id !== id))
    }

    const resetEditing = () => {
        setIsEditing(false)
        setEditingMessage(null)
    }

    // console.log(messagesList)
    return (
        <div style={{paddingTop: '3em'}}>
            <Heading bigHeading>Messages List</Heading>
            {messagesList.length === 0
                ? <NoMessage showForm={showForm}/>
                : <MessagesList list={messagesList} edit={editMessage} delete={deleteMessage} showForm={showForm}/>
            }
            <MessageModal visibleForm={visibleForm} hideForm={hideForm} onAddNewMessage={addNewMessage}/>
            <EditingMessageModal
                isEditing={isEditing} resetEditing={resetEditing}
                setMessagesList={setMessagesList}
                editingMessage={editingMessage} setEditingMessage={setEditingMessage}
            />
        </div>
    );
}

export default App;
