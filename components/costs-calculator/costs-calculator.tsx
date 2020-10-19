import {useState} from 'react';
import {Button} from '..';
import styles from './costs-calculator.module.scss';

type LocationData = {
    lat: string;
    lng: string;
};

const CostsCalculatorComponent: React.FC = () => {

    const VALID_POSTALCODE_REGEX = /(^\d{4})(\w{2}|[ ]\w{2})$/;
    const MAX_KM_RANGE = 40;

    const [postalCode, setPostalCode] = useState<string>('');

    const onCalculationStarted = (e: any) => {
        e.preventDefault();

        // TODO: disableButton();
        // TODO: show loading symbol

        if (postalCode.trim() === "") {
            showError('Vul je postcode in');

            return;
        }

        if (!VALID_POSTALCODE_REGEX.test(postalCode)) {
            showError('De ingevulde postcode is ongeldig');

            return;
        }

        convertPostalCodeToLatLng(null, postalCode, (location: LocationData) => {
            calculateDistance(location);
        });
    };

    const calculateDistance = (location: LocationData) => {

        fetchUrl(``,
            (json: any) => {
                //let distance = 0;

                console.log(json);

                // if (
                //     (json.error && json.error === 'invalid') ||
                //     json.status !== "OK" ||
                //     (json.rows[0] && json.rows[0].elements[0].status === "NOT_FOUND")
                // ) {
                //     that.setError('Er ging iets mis. Controleer je postcode a.u.b.');
                // } else {
                //     try {
                //         distance = json.rows[0].elements[0].distance.value;
                //         that.onDistanceLoaded(distance);
                //     } catch (e) {
                //         console.error(e);
                //         that.setError('Er ging iets mis. Probeer later opnieuw a.u.b.');

                //         return false;
                //     }
                // }

                // return true;
            }, () => {
                showError('Gegevens konden niet worden opgehaald. Controleer je internetverbinding a.u.b.');
            });

        //return true;
    };

    const convertPostalCodeToLatLng = (e: any, userPostalCode: string, callback: (location: LocationData) => void) => {
        fetchUrl(``, (res: any) => {
            let location: LocationData = res.results[0].geometry.location;
            callback(location);
        }, (e: any) => {
            console.error(e);
            this.setError('Er ging iets mis');
        });
    };

    const fetchUrl = (url: string, onSuccess: (res: any) => void, onFailed: (res: any) => void): void => {

        fetch(url, {
            method: 'GET',
            headers: {},
        }).then(function (response) {
            var contentType = response.headers.get('content-type');

            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json();
            } else {
                console.error('PriceMap: response data was not in JSON format.');
            }

            return null;

        }).then(onSuccess).catch(onFailed);

    };

    const showError = (message: string) => {
        console.log(message);
    };

    return (
        <div className={styles.costs_calculator}>

            <div className="row">
                <div className="col-sm-12">
                    <label>Je postcode</label>
                    <input type="text" value={postalCode} onChange={(e) => {
                        setPostalCode(e.target.value);
                    }} id="user_postalcode" name="userpostalcode" max="7" placeholder="1234 AB" />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <label>Gewenste lestijd</label>
                    <select id="user_time">
                        <option value="30">30 minuten</option>
                        <option value="45">45 minuten</option>
                        <option value="60">60 minuten</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <label>Hoeveel personen krijgen les tegelijk?</label>
                    <select id="user_persons">
                        <option value="1">Één persoon</option>
                        <option value="2">Twee personen</option>
                        <option value="3">Drie personen</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <Button filled={true} href="#" onClickHandler={(e) => {
                        onCalculationStarted(e);
                    }}>Bereken leskosten</Button>
                </div>
            </div>

        </div>
    );
};

export const CostsCalculator = CostsCalculatorComponent;