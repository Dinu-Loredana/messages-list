import {useState} from "react";
import {DatePicker, Form, Input} from "antd";
import Modal from "antd/es/modal/Modal";
import {Button, dateFormatted} from "../UI/helpers";

const {Item} = Form;
const {TextArea} = Input;


const MessageModal = (props) => {
    const [form] = Form.useForm();
    const [message, setMessage] = useState('')
    const [date, setDate] = useState({})
    const [dateError, setDateError] = useState(false)


    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const dateHandler = (e) => {
        const {_d: timestamp} = e
        setDate(timestamp)
    }


    const submitForm = (newMessage) => {
        const date = dateFormatted(newMessage.date)
        const today = dateFormatted(new Date())
        if (date < today) {
            setDateError(true)
            return
        }
        props.onAddNewMessage({
            id: Math.random().toFixed(10),
            message,
            date
        })
        form.resetFields();
        setDateError(false)
    }

    return (
        <Modal visible={props.visibleForm} footer={null} onCancel={props.hideForm}>
            <Form form={form} size='small' layout="vertical" autoComplete="off" onFinish={submitForm}>
                <Item
                    label="Message" name="message"
                    rules={[{required: true, message: 'Please write your message!'}]}>
                    <TextArea placeholder="Please write your message" onChange={messageHandler} value={message}/>
                </Item>

                <Item label="Date and time" name="date"
                      rules={[{required: true, message: 'Please select date and time!'}]}>
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" value={date} onChange={dateHandler}/>
                </Item>

                {dateError && <p style={{color: 'red'}}>Posting date and time can't be in the past!</p>}

                <Button type="primary" htmlType="submit">Add Message</Button>
            </Form>
        </Modal>
    )
}

export default MessageModal