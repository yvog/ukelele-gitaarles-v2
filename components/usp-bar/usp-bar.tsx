import {UspItem} from '..';

export const UspBarComponent: React.FC = () => {
    return (
        <div className="row">
            <UspItem icon="/images/icon/icon_metronome.svg">
                Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen.
            </UspItem>
            <UspItem icon="/images/icon/icon_home.svg">
                Mogelijkheid tot lessen thuis, je hoeft er de deur niet voor uit. Met de lessen wordt rekening gehouden met wat jij wilt leren en welke liedjes jij graag zou willen leren spelen.
            </UspItem>
            <UspItem icon="/images/icon/icon_knowledge.svg">
                Het is niet noodzakelijk om al voorkennis te hebben van muziek(notenschrift).
            </UspItem>
        </div>
    )
};

export const UspBar = UspBarComponent;


