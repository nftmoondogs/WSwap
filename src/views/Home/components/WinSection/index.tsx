import styled from 'styled-components'
import { Flex, TicketFillIcon, PredictionsIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import ColoredWordHeading from '../ColoredWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'
import LotteryCardContent from './LotteryCardContent'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  background: ${({ theme }) => (theme.isDark ? 'rgba(0, 0, 0, 0)' : ' rgba(0, 0, 0, 0)')};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

const PredictionCardData: IconCardData = {
  icon: <PredictionsIcon width="60px" color="inverseContrast" />,
  background: ' linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%);',
  borderColor: '#ffb237',
  rotation: '-2.36deg',
}

const LotteryCardData: IconCardData = {
  icon: <TicketFillIcon color="white" width="60px" />,
  background:
    ' radial-gradient(263px at 100.2% 3%, rgb(12, 85, 141) 31.1%, rgb(205, 181, 93) 36.4%, rgb(244, 102, 90) 50.9%, rgb(199, 206, 187) 60.7%, rgb(249, 140, 69) 72.5%, rgb(12, 73, 116) 72.6%);',
  borderColor: '#3C1786',
  rotation: '1.43deg',
}

// const bottomLeftImage = {
//   path: '/images/home/prediction-cards/',
//   attributes: [
//     { src: 'bottom-left', alt: 'CAKE card' },
//     { src: 'green', alt: 'Green CAKE card with up arrow' },
//     { src: 'red', alt: 'Red Cake card with down arrow' },
//     { src: 'top-right', alt: 'CAKE card' },
//   ],
// }

// const topRightImage = {
//   path: '/images/home/lottery-balls/',
//   attributes: [
//     { src: '2', alt: 'Lottery ball number 2' },
//     { src: '4', alt: 'Lottery ball number 4' },
//     { src: '6', alt: 'Lottery ball number 6' },
//     { src: '7', alt: 'Lottery ball number 7' },
//     { src: '9', alt: 'Lottery ball number 9' },
//   ],
// }

const WinSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <ColoredWordHeading
            textAlign="center"
            text={t('All Products Revolves Around WOOF Token in the WOOFLabs Ecosystem')}
          />
          <Flex m="0 auto" flexDirection={['column', null, null, 'row']} maxWidth="700px">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}>
                <PredictionCardContent />
              </IconCard>
            </Flex>
            <Flex flex="1" maxWidth={['275px', null, null, '100%']}>
              <IconCard {...LotteryCardData}>
                <LotteryCardContent />
              </IconCard>
            </Flex>
          </Flex>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
