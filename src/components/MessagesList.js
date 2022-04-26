import {Button, Col, List} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {Wrapper} from "../UI/helpers";

const {Item: ItemAnt} = List


const Item = styled(ItemAnt)`
  box-sizing: border-box;
  margin: 1em;
  background-color: #e0e8f5;
  border: 0.2em solid #e0e8f5;
  border-radius: 0.4em;
  padding: 0.6em;

`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e0e8f5;
  padding: 0.2em;
  border: 0.1em solid #e0e8f5
`


const MessagesList = (props) => {
    return (
        <Wrapper>
            <Button type="primary" onClick={props.showForm} style={{display: 'block', margin: 'auto'}}>
                Add Message
            </Button>
            <List itemLayout="horizontal" dataSource={props.list}
                  renderItem={item =>
                      <Item key={item.title}>
                          <Col xs={{span: 22, order: 3}} sm={{span: 16, order: 1}}>
                              <p style={{textAlign: 'justify'}}>
                                  {item.message}
                              </p>

                          </Col>
                          <Col xs={{span: 18, order: 1}} sm={{span: 3, order: 2}}>
                              {item.date}
                          </Col>
                          <Col xs={{span: 6, order: 2}} sm={{span: 2, order: 3}}>
                              <IconsWrapper>
                                  <EditOutlined onClick={() => props.edit(item)}/>
                                  <DeleteOutlined onClick={() => props.delete(item.id)}
                                                  style={{color: 'red', marginLeft: '1em'}}/>
                              </IconsWrapper>
                          </Col>
                      </Item>
                  }
            />
        </Wrapper>
    )
}


export default MessagesList