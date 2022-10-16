import React from "react";
import styled from "styled-components";

const List = styled.ul``;
const ListItem = styled.li``;

// Contrato que define a estrutura do socialShareMap
interface SocialShareProvider {
  shareUrl: string;
  display: string | JSX.Element;
}
const socialShareMap: Record<string, SocialShareProvider> = {
  facebook: {
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    display: "Facebook",
  },
  twitter: {
    shareUrl: "https://twitter.com/intent/tweet?text=",
    display: "Twitter",
  },
  linkedIn: {
    shareUrl:
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//omegabrothers-tech.github.io/commarea-formatter/&title=Formatador%20de%20Commarea%20COBOL&summary=Facilite%20seus%20testes%20com%20essa%20ferramenta%20maravilhosa!&source=",
    display: "LinkedIn",
  },
};

interface SocialShareButtonsProps {
  url: string;
}
export function SocialShareButtons({
  url,
}: SocialShareButtonsProps): JSX.Element {
  return (
    <List>
      {Object.entries(socialShareMap).map(
        ([socialShareItemKey, socialShareProvider]) => (
          <ListItem key={socialShareItemKey}>
            <a href={`${socialShareProvider.shareUrl}${url}`}>
              {socialShareProvider.display}
            </a>
          </ListItem>
        )
      )}
    </List>
  );
}
