import React from 'react'
import { HeroServiceChoice, HeroServiceChoiceArticle, Layout } from '../../components'

export default function PianoKeyboardLessonsPage() {
  return (
    <Layout title="Piano- of keyboardles">
      <HeroServiceChoice>
        <section className="row row-eq-height">
          <HeroServiceChoiceArticle
            title="Piano"
            buttonSubject="pianoles"
            buttonUrl="/aanmelden"
            imgSrc="/images/misc/piano.png"
            imgSize={[772, 'auto']}
            cropWidth={64}
          >
            Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en
            omstreken.
          </HeroServiceChoiceArticle>

          <HeroServiceChoiceArticle
            title="Keyboard"
            buttonSubject="keyboardles"
            buttonUrl="/aanmelden"
            imgSrc="/images/misc/keyboard.png"
            imgSize={[456, 'auto']}
            cropWidth={160}
            reversed={true}
          >
            Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en
            omstreken.
          </HeroServiceChoiceArticle>
        </section>
      </HeroServiceChoice>
    </Layout>
  )
}
