
import classNames from 'classnames';
import styles from './experience.module.scss';

const ExperienceComponent: React.FC = () => {
    return (
        <div className="main-container">
            <div className={classNames('row', styles.experience)}>
                <div className="col-lg-12">
                    <h2>Ervaring</h2>
                </div>
                <div className="col-lg-8">
                    <p>
                        Tijdens en na mijn studietijd heb ik met veel plezier gespeeld in <b>Gospelband Dawwagiem</b> in Voorschoten. Ook bij <b>Stichting Kerk & Theater</b> (Oegstgeest) heb ik gitaar in de band gespeeld als: <b>Lead- en Rhythm- gitarist</b> in verschillende Christelijke producties, zoals musicals Jesus Christ Superstar (1990-1991), The Story of J.C. (1996), Starring Peter (1997-Frank Sanders), Josef and the amazing technicolor dreamcoat (1998) en Tamara (2000).
        </p>
                    <p>
                        Ook in de <b>allround Band NEON</b> (Voorschoten) heb ik ca. 8 jaar met veel plezier gitaar gespeeld, waarbij wij o.a. voor bedrijven en bruiloften in verschillende provincies van Nederland hebben gespeeld.
        </p>
                    <p>Later speelde ik nog een aantal jaren gitaar bij <b>Rising Hope/Together Gospelkoor</b> in Hazerswoude-Dorp. Momenteel draag ik mijn muzikaal spel voor bij <b>“De Band”</b> in Koudekerk aan den Rijn. Door mijn brede interesse in muziek heeft mijn leergierigheid ook geleid tot het veel bespelen van mijn derde instrument: de ukelele! </p>

                    <p>Mede hierdoor heb ik veel ervaring opgebouwd rondom producties, het gitaar- en ukelele spel op een podium. Het geeft mij niet alleen een enorme voldoening om mijn muzikale kennis op dit gebied over te brengen aan jonge of oudere leerlingen, ook geeft het mij plezier de opgedane ervaringen met hen te delen.</p>
                </div>
            </div>
        </div>
    )
};

export const Experience = ExperienceComponent;