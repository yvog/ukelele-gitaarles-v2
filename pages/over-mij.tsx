import {AboutMe, Experience, ExploreSignup, HeaderNavigation, Layout} from '../components';

export default function AboutMePage() {
    return (
        <Layout title="Over mij">

            <div className="main-container">
                <HeaderNavigation variant='black' />
            </div>

            <AboutMe />

            <Experience />

            <ExploreSignup />

        </Layout>
    )
}
