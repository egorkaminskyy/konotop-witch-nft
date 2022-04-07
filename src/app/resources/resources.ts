import { ContactType } from './../ourTeam/Team';
import { HomeResources } from './../home/component/Home';
import { HeaderResources } from "../header/component/Header"
import { AboutResources } from '../aboutUs/component/About';
import { RoadmapResources } from '../roadMap/Roadmap';
import { CollectionResources } from '../collection/Collection';
import { FooterResources } from '../footer/Footer';
import { TeamResources } from '../ourTeam/Team';
import { FaqResources } from '../faq/Faq';
import { MintResources } from '../mint/Mint';

function getResources() {
    return {
        header: getHeaderResources(),
        home: getHomeResources(),
        aboutUS: getAboutUsResources(),
        roadmap: getRoadmapResources(),
        collection: getCollectionResources(),
        footer: getFooterResources(),
        team: getTeamResources(),
        faq: getFaqResources(),
        mint: getMintResources(),
    }
}

function getMintResources(): MintResources {
    return {
        title: 'Mint your Dainty Dolphin',
        description: `Enter the amount of Dainty Dolphins\nyou would like to mint`,
        mintButton: {
            linkUrl: 'https://opensea.io/',
            title: 'Mint'
        },
        fildTitle:'Price per Dolphin',
        cryptoCurrency: 'ETH',
        multipliaer: 0.4
    }
}

function getFaqResources(): FaqResources {
    return {
        title: 'FAQ',
        collection: [
            {
                title: 'What are the konotop witch nft?',
                description: 'Dainty Dolphins is a collection of 1,836 randomly generated Dainty Dolphin NFTs on the Ethereum blockchain.\nEach Dainty Dolphin serves as an access token to our community events, tournaments, and more. \nOur dolphins are dainty, cute, goofy, and looking for a friend!',
                isActive: false
            },
            {
                title: 'When is the launch?',
                description: 'The Russian Federation\nstarted the war on February 24',
                isActive: false
            },
            {
                title: 'What is the total supple?',
                description: 'The Russian Federation\nstarted the war on February 24',
                isActive: false
            },
            {
                title: 'What network will this be launched on?',
                description: 'The Russian Federation\nstarted the war on February 24',
                isActive: false
            },
        ]
    }
}


function getTeamResources(): TeamResources {
    return {
        teamTitle: 'Our team',
        teamDescription: `We're a team of experts and entrepreneurs working\nin major technology hubs across Europe.`,
        collection: [
            {
                title: 'name surname',
                description: 'job',
                descriptionUrl:'https://opensea.io/',
                linkUrl:'nft1.svg'
            },
            {
                title: 'name surname',
                description: 'job',
                descriptionUrl:'https://opensea.io/',
                linkUrl:'nft2.svg'
            },
            {
                title: 'name surname',
                description: 'job',
                descriptionUrl:'https://opensea.io/',
                linkUrl:'nft3.svg'
            },
            {
                title: 'name surname',
                description: 'job',
                descriptionUrl:'https://opensea.io/',
                linkUrl:'nft4.svg'
            },
        ],
        contacts: [
            {
                title:'+380 63-333-33-33',
                linkUrl:'tel:380 63-333-33-33',
                type: ContactType.MOBILE
            },
            {
                title:'info@KonotopNFT',
                linkUrl:'mailto:info@KonotopNFT',
                type: ContactType.EMAIL
            },
            {
                title:'@KonotopNFT',
                linkUrl:'http://instagram.com/@KonotopNFT',
                type: ContactType.INSTAGRAM
            },
            {
                title:'@KonotopNFT',
                linkUrl:'https://telegram.me/@KonotopNFT',
                type: ContactType.TELEGRAM
            },
        ]
    }
}

function getFooterResources(): FooterResources {
    return {
        footerTitle: `<span style="color:#efc058;">Konotop</span> <span style="font-style:italic">witch</span> <span style="color:#5466f4;">NFT</span>`,
        designedBy: `website design by <div style="background-image: url(/instIcon.svg);"></div> katsubodesign.ua`,
        footerBuyNft: {
            linkUrl: 'https://opensea.io/',
            title: 'Buy NFT'
        },
    }
}

function getCollectionResources(): CollectionResources {
    return {
        collectionTitle: 'Collection',
        viewMoreButton: {
            linkUrl: '',
            title: 'View more on OpenSea',
        },
        collection: [
            {
                title: 'NFT #1',
                description: 'The Russian Federation\nstarted the war on February 24',
                linkUrl:'nft1.svg'
            },
            {
                title: 'NFT #2',
                description: 'The Russian Federation\nstarted the war on February 24',
                linkUrl:'nft2.svg'
            },
            {
                title: 'NFT #3',
                description: 'The Russian Federation\nstarted the war on February 24',
                linkUrl:'nft3.svg'
            },
            {
                title: 'NFT #4',
                description: 'The Russian Federation\nstarted the war on February 24',
                linkUrl:'nft4.svg'
            },
        ]
    }
}


function getRoadmapResources(): RoadmapResources {
    return {
        roadmapTitle: 'Our Roadmap',
        table: {
            columns:[
                {
                    cells: [
                        '25% Minted:', 'Dainty Dolphins airdrop to three lucky holders.'
                    ]
                },
                {
                    cells: [
                        '50% Minted:', 'Dainty Dolphins will donate 5 ETH to a charity chosen by our community'
                    ]
                },
                {
                    cells: [
                        '75% Minted:', 'Dainty Dolphins merch store + free merch giveaway!'
                    ]
                },
                {
                    cells: [
                        '100% Minted:', 'Dainty Dolphins will donate our remaining charity ETH to a charity chosen\nby our community… and now the fun begins.'
                    ]
                },
                {
                    cells: [
                        'Post Mint', 'Dainty Dolphins is a community-driven project meaning we want to hear\nfrom you! By owning a Dolphin you get to decide the future of this project.\nWe will have weekly town hall meetings with holders to decide the direction\nwe are headed.'
                    ]
                },
                {
                    cells: [
                        'Gaming', `Post a full mint, #DaintyDolphins NFTs will serve as access tokens\nto holder-only gaming events. 🎮 We will be offering prizes in the form\nof $ETH and #NFTs! 🏆

                        Games we will be hosting include, but are not limited to, Rocket League,\nValorant, Minecraft, SSBU, Brawlhala, and more!`
                    ]
                },
            ]
        }
    }
}


function getAboutUsResources(): AboutResources {
    return {
        aboutTitle: 'About project',
        aboutDescription: `The Russian Federation started the war on February 24, 2022 against Ukraine.\nAt 05:05 Kyiv time, Russian bombers began attacking military and civilian infrastructure.\nWe are raising funds to help the Ukrainian army! #StopPutin`,
        buyNft: {
            linkUrl: 'https://opensea.io/',
            title: 'Buy NFT'
        },
    }
}


function getHomeResources(): HomeResources {
    return {
        homeTitle: `BUY <span style="color:#efc058;">NFT</span>  - \nHELP <span style="color:#5466f4;">UKRAINE</span>`,
        homeDescription: `100% of the proceeds will go to help the Ukrainian army\nand Ukrainian refugees who left their homes due to hostilities\nby the Russian Federation`,
        buyNft: {
            linkUrl: 'https://opensea.io/',
            title: 'Buy NFT'
        },
        helpUkraine: {
            linkUrl: 'https://opensea.io/',
            title: 'Help Ukraine'
        },
    }
}

function getHeaderResources(): HeaderResources {
    return {
            aboutLink: {
                linkUrl: '/about',
                title: 'About'
            },
            homeLink: {
                linkUrl: 'home',
                title: 'Home'
            },
            faqLink: {
                linkUrl: '/faq',
                title: 'FAQ'
            },
            collectionLink: {
                linkUrl: '/collection',
                title: 'Collection'
            },
            singInLink: {
                linkUrl: 'https://opensea.io/',
                title: 'Sing In'
            },
            logoUrl: {
                linkUrl: '/',
                title: 'konotop witch nft'
            },
            teamLink: {
                linkUrl: '/',
                title: 'Team'
            },
        }
}

export { getResources, getHeaderResources }