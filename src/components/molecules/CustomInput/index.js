import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa";

import { Container, Input, Button, ButtonClear, ContainerButtons } from "./styles";

function CustomInput({ handleStartMonitoring, handleResetMonitoring, pHashtag }) {
  const [hashtag, setHashtag] = useState(pHashtag || "");

  return (
    <Container>
      <div>
        <FaHashtag size='24' color='#000' />
        <Input placeholder='Digite uma hashtag...' value={hashtag} onChange={(event) => setHashtag(event.target.value)} />
      </div>
      <ContainerButtons>
        <Button onClick={() => (hashtag.length > 0 ? handleStartMonitoring(hashtag) : null)} disabled={!hashtag.length > 0}>
          Monitorar
        </Button>
        {pHashtag && (
          <ButtonClear
            onClick={() => {
              handleResetMonitoring();
              setHashtag("");
            }}
            disabled={!pHashtag.length > 0}
          >
            Limpar
          </ButtonClear>
        )}
      </ContainerButtons>
    </Container>
  );
}

export default React.memo(CustomInput);
