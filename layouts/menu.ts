import { Menu } from './types/type'
// mock data
const localMenus: Menu[] = [
    {
        name: 'Dashboard',
        icon: 'ic:baseline-home',
        key: 'dashboard',
        path: '/'
    },    
    {
        name: 'Components',
        icon: 'ic:outline-featured-video',
        key: 's',
        path: '/components/table',
        children: [           
            {
                name: 'Basic Form',
                path: '/components/form/basic',
                icon: 'quill:creditcard',
                key: 'basicForm'
            },
            {
                name: 'Basic Table',
                path: '/components/table/basic',
                icon: 'quill:creditcard',
                key: 'basicTable'
            }
        ]
    }
]

export async function getAsyncMenus() {
    return localMenus;
}