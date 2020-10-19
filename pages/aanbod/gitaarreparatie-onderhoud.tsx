import React from 'react';
import {HeroServiceChoice, HeroServiceChoiceArticle, Layout} from '../../components';

export default function GuitarRepairsOrMaintenance() {
    return (
        <Layout title="Reparatie- of onderhoud">

            <div className="main-container">
                <HeroServiceChoice>
                    <section className="row row-eq-height">
                        <HeroServiceChoiceArticle
                            title="Reparatie"
                            buttonSubject="reparatie aanvragen"
                            buttonUrl="/aanmelden"
                            imgSrc="/images/misc/repair.png"
                            imgSize={[580, 'auto']}
                            cropWidth={112}
                        >
                            Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.
                    </HeroServiceChoiceArticle>

                        <HeroServiceChoiceArticle
                            title="Onderhoud"
                            buttonSubject="onderhoud aanvragen"
                            buttonUrl="/aanmelden"
                            imgSrc="/images/misc/maintenance.png"
                            imgSize={[580, 'auto']}
                            cropWidth={120}
                            reversed={true}
                        >
                            Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.
                    </HeroServiceChoiceArticle>
                    </section>
                </HeroServiceChoice>
            </div>

        </Layout>
    )
}
