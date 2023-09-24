import { Flex, Text, Button, ArrowForwardIcon } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="white" bold fontSize="24px">
          {t('Moondogs NFTs')}
        </Text>

        <Text color="white" mb="40px">
          {t(
            'Moondogs NFTs A Community Centric BlueChip NFT Project on CoreDAO by WOOFLabs Only 5555 in existence',
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="https://www.openwaters.uk/collection/0x302330B329191324fE83Fa6461A48F2e22406c9D" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold color="invertedContrast">
              {t('Learn More')}
            </Text>
            <ArrowForwardIcon ml="4px" color="invertedContrast" />
          </Button>
        </StyledLink>
      </Flex>
    </>
  )
}

export default LotteryCardContent
