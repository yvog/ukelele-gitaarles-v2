import React from 'react';
import {HeroServiceChoice, HeroServiceChoiceArticle, Layout} from '../../components';

export default function UkeleleGuitarLessonsPage() {
    return (
        <Layout title="Ukelele- of gitaarles">
            <div className="main-container">

                <HeroServiceChoice>
                    <section className="row row-eq-height">

                        <HeroServiceChoiceArticle
                            title="Gitaar"
                            buttonSubject="gitaarles"
                            buttonUrl="/aanmelden"
                            imgSrc="/images/misc/guitar.png"
                            imgSize={[772, 'auto']}
                            cropWidth={164}
                        >
                            Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.
                    </HeroServiceChoiceArticle>

                        <HeroServiceChoiceArticle
                            title="Ukelele"
                            buttonSubject="ukeleleles"
                            buttonUrl="/aanmelden"
                            imgSrc="/images/misc/ukelele.png"
                            imgSize={[456, 'auto']}
                            cropWidth={80}
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
