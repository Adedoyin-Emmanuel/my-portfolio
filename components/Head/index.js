import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {

    return (
        <Head>
            <title>Adedoyin Emmanuel's  - {pageName} </title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="Adedoyin Emmanuel " />
            <meta name="description" content="Adedoyin Emmanuel's Portfolio" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://github.com/adedoyin-emmanuel" />
            <meta property="og:title" content="Adedoyin Emmanuel Adeniyi's portfolio" />
            <meta property="og:description" content="Adedoyin Emmanuel Portfolio Portfolio" />
    
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="Adedoyin Emmanuel's Portfoliod" />
            <meta property="twitter:description" content="Adedoyin Emmanuel's portfolio." />
            <meta property="twitter:image" content="" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/88517758?v=4"/>
        </Head>
    )
}

