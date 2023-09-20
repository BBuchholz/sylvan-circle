import { ref } from 'vue'

export const allCards = ref([
  {
    passCode: 'BOOK',
    book_title: 'Title Goes Here',
    book_author: 'Author Here',
    book_link: '#',
    book_cover_url: 'https://madamadam.s3.us-east-2.amazonaws.com/COVER_ART_NEEDED.png',
    siteUrl: 'https://forms.gle/7TkRQD8BK9gN7mdG9',
    siteName: 'CLICK HERE TO ADD A BOOK',
    siteDesc: 'BOOK is a template for all book sources within Sylvan Circle Academy, to add a book that isn\'t already listed simply submit it through the form by clicking the link. To see all books currently registered with tha Circle, enter pass code "BOOKS"',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SCA_BOOK_TMPLT_CARD.png',
  },
  {
    passCode: 'CARDS',
    siteUrl: 'https://myriad-central.netlify.app/',
    siteName: 'Myriad Central Node',
    siteDesc: 'Both a noun and a proper noun, thee Myriad Central Node is the template for all Myriad Central Nodes. Comes equipped with the basic tools to maintain a node as well as documentation explaining what the ecosystem is and how it all works',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CARDS-6752_CARD.png',
  },
  {
    passCode: 'JUSBEU',
    lpPassCode: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/JUSBEU-60ad_CARD2.png',
  },
  {
    passCode: 'NBP',
    lpPassCode: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/NBP-85ed_CARD.png',
  },
  {
    passCode: 'PLAY',
    siteUrl: 'https://sonic-circle.netlify.app/',
    siteName: 'Sonic Circle',
    siteDesc: 'A Place 4 Musicians 2 Play! A non-judgemental, turn based, participation oriented playground for musicians and aspiring musicians of all skill levels and goal orientations',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PLAY-4249.png',
  },
  {
    passCode: 'QUARTZ',
    lpPassCode: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/QUARTZ-e6a6_CARD.png',
  },
  {
    passCode: 'STS',
    siteUrl: '',
    siteName: 'Shepton Transmission Services',
    siteDesc: 'COMING SOON',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/STS-3ff9.png',
  },
  {
    passCode: 'SYLFAN',
    siteUrl: 'https://sylvan-circle.netlify.app/',
    siteName: 'Sylvan Circle Academy',
    siteDesc: 'The "Sylfan" philosophy of Sylvan Circle Academy encourages "Self and Circle" thinking with regards to learning and dissemination of learning...',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYLFAN-857a_CARD.png',
  },
  {
    passCode: 'TAROG',
    siteUrl: '',
    siteName: 'PaNDaeMoNium Studio',
    siteDesc: 'COMING SOON',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/TAROG-05d8_CARD.png',
  },
])

export function getCardFor(aPassCode) {
  const foundCard
        = allCards.value.find(card =>
          card.passCode.toLowerCase()
                  === aPassCode.toLowerCase(),
        )

  return foundCard
}
