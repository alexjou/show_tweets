import React, { useEffect, useState, useContext } from "react";
import socketio from "socket.io-client";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDvr, MdSettings } from "react-icons/md";

import { Container, LinkContainer, CustomLink, Hashtag, Title } from "./styles";

import MonitorContext from "../../contexts/MonitorContext";

import defaultConfig from "../../configs/defaultConfig";

function Header(props) {
  const { hashtag, setHashtag, setMonitoring, setApproved, setReceived, setRejected } = useContext(MonitorContext);

  const [currentRoute, setCurrentRouter] = useState(props.location.pathname);

  useEffect(() => {
    props.history.listen((location, action) => {
      setCurrentRouter(location.pathname);
    });
  }, [props]);

  useEffect(() => {
    const socket = socketio(defaultConfig.baseURL);

    socket.on("initialState", (data) => {
      setHashtag(data.hashtag);
      setMonitoring(data.monitoring);
      setReceived(data.received);
      setApproved(data.approved);
      setRejected(data.rejected);
    });

    socket.on("stateChange", (data) => {
      setHashtag(data.hashtag);
      setMonitoring(data.monitoring);
    });

    socket.on("received_request", (data) => { setReceived(data); console.log('received_request: ', data) });

    socket.on("approved_request", setApproved);

    socket.on("reject_request", setRejected);
  }, [setApproved, setReceived, setRejected, setHashtag, setMonitoring]);

  return (
    <Container>
      <Hashtag>
        {(currentRoute === "/" && (
          <div>
            {(hashtag && (
              <>
                <h4>Monitorando Hashtag</h4>
                <h1>#{hashtag}</h1>
              </>
            )) || <h1>Monitor</h1>}
          </div>
        )) || <h1>Painel de Controle</h1>}
      </Hashtag>

      <LinkContainer>
        {(currentRoute === "/" && (
          <CustomLink to='/painel' title='Painel de Controle'>
            <Title>Painel de controle</Title>
          </CustomLink>
        )) || (
            <CustomLink to='/' title='Monitor de Hashtag'>
              <Title>Monitor</Title>
            </CustomLink>
          )}
      </LinkContainer>
    </Container>
  );
}

export default withRouter(Header);
