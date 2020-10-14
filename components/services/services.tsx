
import {ServicesItem} from '..';

export const ServicesComponent: React.FC = () => {
    return (
        <>
            <h2>Maak muziek</h2>
            <p>Jong of oud, gitaar of piano. Geniet van het muziek maken.</p>

            <div className="row">

                <ServicesItem
                    src="/images/background/aanbod_ukeleleles_gitaarles.jpg"
                    firstTitle="Ukeleleles"
                    secondTitle="Gitaarles"
                />

                <ServicesItem
                    src="/images/background/aanbod_pianoles_keyboardles.jpg"
                    firstTitle="Pianoles"
                    secondTitle="Keyboardles"
                />

                <ServicesItem
                    src="/images/background/aanbod_gitaarreparatie_onderhoud.jpg"
                    firstTitle="Gitaarreparatie"
                    secondTitle="Onderhoud"
                />

            </div>
        </>
    )
};

export const Services = ServicesComponent;