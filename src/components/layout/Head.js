import Head from 'next/head'

export const CustomHead = ({children}) => (
    <Head>
        <title>Loumar</title>
        <meta charset="UTF-8" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Loumar is a web application that allows you to..."/>
        <meta name="og:title" conent="Loumar is a web application that allows you to..."/>
        {children}
    </Head>
)