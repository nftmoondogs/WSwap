const SHADOW_EXTENDED = 'https://raw.githubusercontent.com/SVerseLab/tokens/master/tokenlist.json'
// const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
// const CMC = 'https://tokens.pancakeswap.finance/cmc.json'

// List of official tokens list
export const OFFICIAL_LISTS = [SHADOW_EXTENDED]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  SHADOW_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
