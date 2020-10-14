import {HeaderNavigation, Layout, Services} from '../components';

export default function AboutMePage() {
    return (
        <Layout title="Aanbod">

            <div className="main-container">
                <HeaderNavigation variant='black' />
                <Services />
            </div>

        </Layout>
    )
}
