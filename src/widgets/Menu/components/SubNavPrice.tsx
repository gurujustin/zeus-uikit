import React from "react";
import styled from "styled-components";
// import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import Flex from "../../../components/Box/Flex";

interface Props {
  treePriceUsd?: number;
}

const PriceContainer = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.input};
  height: 42px;
  border-radius: 24px;
  margin: 0px 10px;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    display: flex;
  }
  .right-eye {
    animation-delay: 20ms;
  }
`;

const SkeletonContainer = styled.div`
  display: none;
  align-items: center;
  padding: 0px 12px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    display: flex;
  }
`

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 12px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SubNavPrice: React.FC<Props> = ({ treePriceUsd }) => {
  return treePriceUsd ? (
      <PriceContainer>
        <PriceLink
          href="https://pancakeswap.finance/swap?outputCurrency=0xba07eed3d09055d60caef2bdfca1c05792f2dfad"
          target="_blank"
        >
            <Text color="text" bold>{`$${treePriceUsd.toFixed(6)}`}</Text>
        </PriceLink>
      </PriceContainer>
    ) : (
      <SkeletonContainer>
        <Skeleton width={100} height={32} />
      </SkeletonContainer>
    );
};

export default React.memo(SubNavPrice);
