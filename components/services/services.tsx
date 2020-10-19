
import {ServicesItem} from '..';

const ServicesComponent: React.FC = () => {
    return (
        <>
            <h2>Maak muziek</h2>
            <p>Jong of oud, gitaar of piano. Geniet van het muziek maken. Waar kan ik je mee helpen?</p>

            <div className="row">

                <ServicesItem
                    src="/images/background/aanbod_ukeleleles_gitaarles.jpg"
                    firstTitle="Ukelele les"
                    secondTitle="Gitaarles"
                    url="/aanbod/ukelele-gitaarles"
                />

                <ServicesItem
                    src="/images/background/aanbod_pianoles_keyboardles.jpg"
                    firstTitle="Pianoles"
                    secondTitle="Keyboardles"
                    url="/aanbod/piano-keyboardles"
                />

                <ServicesItem
                    src="/images/background/aanbod_gitaarreparatie_onderhoud.jpg"
                    firstTitle="Gitaarreparatie"
                    secondTitle="Onderhoud"
                    url="/aanbod/gitaarreparatie-onderhoud"
                />

            </div>
        </>
    )
};

export const Services = ServicesComponent;