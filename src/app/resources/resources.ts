import { HeaderResources } from "../header/HeaderSlice"


function getResources() {
    return {
        header: getHeaderResources(),
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
                linkUrl: '/singIn',
                title: 'Sing In'
            },
            logoUrl: '',
        }
}

export { getResources, getHeaderResources }