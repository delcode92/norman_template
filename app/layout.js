// import theme style scss file
import 'styles/theme.scss';

export const metadata = {
    title: 'Nourman Dashboard Template',
    description: 'log app for nourman law firm',
    keywords: 'log app, law, firm, log, app'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                {children}
            </body>
        </html>
    )
}
