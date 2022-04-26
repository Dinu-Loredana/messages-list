import styled from "styled-components";
import {Button as ButtonAnt} from "antd";

export const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 2em;
  font-size: ${props => props.bigHeading ? '1.5em' : '1em'};
`

export const Wrapper = styled.div`
  background-color: #f3f4f6;
  border: 0.2em solid #f3f4f6;
  border-radius: 0.4em;
  margin: 1em;
  padding: 2em 1em;
  height: ${props => props.minHeight ? '20em' : 'auto'};
`

export const Button = styled(ButtonAnt)`
  display: block;
  margin: auto;
`

const sortDate = (a, b) => {
    let dateA = new Date(a.date).getTime();
    let dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
};

export const sortMessagesByDate = (newMsg, prevList) => {
    const messagesOrderedByDate = [newMsg, ...prevList].sort(sortDate)
    return messagesOrderedByDate
}

export const dateFormatted = (date) => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date)
}