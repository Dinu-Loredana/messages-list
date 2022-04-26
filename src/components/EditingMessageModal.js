import {useState} from "react";
import {DatePicker, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import {dateFormatted} from "../UI/helpers";


const EditingMessageModal = (props) => {
    const [dateError, setDateError] = useState(false)

    return (
        <>
            <Modal title="Edit Message" okText="Save"
                   visible={props.isEditing}
                   onCancel={() => props.resetEditing()}
                   onOk={() => {
                       const today = dateFormatted(new Date())
                       if (new Date(props.editingMessage.date).getTime() < new Date(today).getTime()) {
                           setDateError(true)
                           return
                       }
                       props.setMessagesList((prevList) => {
                           return prevList.map(msg => {
                               if (msg.id === props.editingMessage.id) {
                                   return props.editingMessage
                               } else {
                                   return msg
                               }
                           })
                       })
                       setDateError(false)
                       props.resetEditing()
                   }}>

                <TextArea value={props.editingMessage?.message} onChange={(e) => {
                    props.setEditingMessage((prev) => {
                        return {...prev, message: e.target.value}
                    })
                }}/>

                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={(e) => {
                    const {_d: timestamp} = e
                    props.setEditingMessage((prev) => {
                        return {...prev, date: dateFormatted(timestamp)}
                    })
                }}/>
                {dateError && <p style={{color: 'red'}}>Posting date and time can't be in the past!</p>}
            </Modal>
        </>
    )
}


export default EditingMessageModal