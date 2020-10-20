import classNames from 'classnames';
import {useState} from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import {Button} from '..';
import styles from './costs-calculator.module.scss';
import priceTable from './prices.json';

type LocationData = {
    lat: string;
    lng: string;
};

const CostsCalculatorComponent: React.FC = () => {

    const VALID_POSTALCODE_REGEX = /(^\d{4})(\w{2}|[ ]\w{2})$/;
    const MAX_KM_RANGE = 40;
    const LOADING_DELAY = 1250;
    const BASE_URL = process.env.API_BASE_URL;

    const [postalCode, setPostalCode] = useState<string>('');
    const [lessonTime, setLessonTime] = useState<string>('30');
    const [persons, setPersons] = useState<string>('1');

    const [error, setError] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onCalculationStarted = (e: any) => {
        e.preventDefault();

        setError('');
        setPrice('');

        if (postalCode.trim() === "") {
            showError('Vul je postcode in', true);

            return;
        }

        setLoading(true);

        if (!VALID_POSTALCODE_REGEX.test(postalCode)) {
            showError('De ingevulde postcode is ongeldig');

            return;
        }

        convertPostalCodeToLatLng(postalCode, (location: LocationData) => {
            calculateDistance(location);
        });
    };

    const calculateDistance = (location: LocationData): void => {
        fetchUrl(`${BASE_URL}?action=distance&latlng=${location.lat},${location.lng}`,
            (response: any) => {
                let json = JSON.parse(response);

                if (
                    !json ||
                    json.status !== 'OK' ||
                    (json.error && json.error === 'invalid')
                ) {
                    showError('Er ging iets mis. Probeer opnieuw a.u.b.');

                    return false;
                }

                try {
                    let distance = json.rows[0].elements[0].distance.value;

                    onDistanceCalculated(distance);

                    return true;

                } catch (e) {
                    console.error(e);
                    showError('Er ging iets mis. Probeer later opnieuw a.u.b.');

                    return false;
                }

            }, (e: any) => {
                console.log(e);
                showError('Gegevens konden niet worden opgehaald. Controleer je internetverbinding a.u.b.');

                return false;
            });
    };

    const onDistanceCalculated = (distance: number): boolean => {
        let price = 0;
        let between: string[];
        let kilometers: string;
        let kilometerDistance: number = Math.round(distance / 1000);

        if (kilometerDistance > MAX_KM_RANGE) {
            showError("Lessen aan huis gelden tot " + MAX_KM_RANGE + " kilometer vanaf mijn adres");

            return false;
        }

        for (kilometers in priceTable) {
            between = kilometers.split('-');

            if (kilometerDistance >= Number(between[0]) && kilometerDistance <= Number(between[1])) {
                price = priceTable[kilometers][lessonTime][persons].price;

                break;
            }
        }

        if (!price) {
            showError("Er ging helaas iets mis");

            return false;
        }

        setPrice(price);
        setLoading(false);

        return true;
    }

    const convertPostalCodeToLatLng = (userPostalCode: string, callback: (location: LocationData) => void): void => {
        fetchUrl(`${BASE_URL}?action=postalcode_to_latlng&postal_code=${postalCode.replace(' ', '')}`, (res: any) => {
            let location: LocationData = res.results[0].geometry.location;
            callback(location);
        }, (e: any) => {
            showError('Er ging iets mis');
        });
    };

    const fetchUrl = (url: string, onSuccess: (res: any) => void, onFailed: (res: any) => void): void => {

        fetch(url, {
            method: 'GET',
            headers: {},
        }).then((response: any) => {
            var contentType = response.headers.get('content-type');

            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json();
            } else {
                console.error('Response data was not in JSON format.');
            }

            return null;
        }).then(onSuccess).catch(onFailed);
    };

    const showError = (message: string, force: boolean = false): void => {
        if (force) {
            setError(message);
        } else {
            setTimeout(() => {
                setLoading(false);
                setError(message);
            }, LOADING_DELAY);
        }
    };

    const onCalculateAgain = (e: any) => {
        e.preventDefault();
        setPrice('');
        setError('');
    };

    return (
        <div className={styles.costs_calculator}>

            {price && (
                <>
                    <div className={classNames(styles.message_box, styles.price)}>
                        Jouw leskosten worden €{price} per les
                </div>
                    <Button filled={true} href="#" onClickHandler={(e) => {
                        onCalculateAgain(e);
                    }}>
                        Opnieuw berekenen
                    </Button>
                </>
            )}

            {(!price) && (
                <>

                    <h3>Leskosten berekenen</h3>

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
                            <select id="user_time" value={lessonTime} onChange={(e) => {
                                setLessonTime(e.target.value);
                            }}>
                                <option value="30">30 minuten</option>
                                <option value="45">45 minuten</option>
                                <option value="60">60 minuten</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <label>Hoeveel personen krijgen les tegelijk?</label>
                            <select id="user_persons" value={persons} onChange={(e) => {
                                setPersons(e.target.value);
                            }}>
                                <option value="1">Één persoon</option>
                                <option value="2">Twee personen</option>
                                <option value="3">Drie personen</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <Button disabled={loading} filled={true} href="#" onClickHandler={(e) => {
                                onCalculationStarted(e);
                            }}>Bereken leskosten</Button>

                            {loading && (
                                <div className={styles.spinner}>
                                    <SyncLoader
                                        size={16}
                                        color={'#1193f5'}
                                        loading={loading}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}

            {error && (
                <div className={styles.errors}>
                    {error}
                </div>
            )}

        </div>
    );
};

export const CostsCalculator = CostsCalculatorComponent;