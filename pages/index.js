import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Spinner from '../components/Loader.js';
export default function Home() {
    const { push } = useRouter();

    useEffect(() => {
        push('/test/jobs');
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Spinner />
            </main>
        </div>
    );
}
