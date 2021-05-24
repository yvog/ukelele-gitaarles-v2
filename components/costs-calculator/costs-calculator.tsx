import classNames from 'classnames'
import { useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import { Button } from '..'
import styles from './costs-calculator.module.scss'
import priceTable from './prices.json'

type LocationData = {
  lat: string
  lng: string
}

const CostsCalculatorComponent: React.FC = () => {
  const VALID_POSTALCODE_REGEX = /(^\d{4})(\w{2}|[ ]\w{2})$/
  const MAX_KM_RANGE = 40
  const LOADING_DELAY = 1000

  const [postalCode, setPostalCode] = useState<string>('')
  const [lessonTime, setLessonTime] = useState<string>('30')
  const [persons, setPersons] = useState<string>('1')

  const [error, setError] = useState<string>('')
  const [price, setPrice] = useState<number>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const onCalculationStarted = (e: any) => {
    e.preventDefault()

    setError('')
    setPrice(0)

    if (postalCode.trim() === '') {
      showError('Vul je postcode in', true)

      return
    }

    setLoading(true)

    if (!VALID_POSTALCODE_REGEX.test(postalCode)) {
      showError('De ingevulde postcode is ongeldig')

      return
    }

    convertPostalCodeToLatLng(postalCode.replace(' ', ''), (location: LocationData) => {
      calculateDistance(location)
    })
  }

  const onDistanceCalculated = (distance: number): boolean => {
    let price = 0
    let between: string[]
    let kilometers: string
    let kilometerDistance: number = Math.round(distance / 1000)

    if (kilometerDistance > MAX_KM_RANGE) {
      showError('Lessen aan huis gelden tot ' + MAX_KM_RANGE + ' kilometer vanaf mijn adres')

      return false
    }

    for (kilometers in priceTable) {
      between = kilometers.split('-')

      if (kilometerDistance >= Number(between[0]) && kilometerDistance <= Number(between[1])) {
        price = priceTable[kilometers][lessonTime][persons].price

        break
      }
    }

    if (!price) {
      showError('Leskosten konden niet worden berekend')

      return false
    }

    setPrice(price)
    setLoading(false)

    return true
  }

  const convertPostalCodeToLatLng = (postalCode: string, onConverted: (location: LocationData) => void): void => {
    postData(
      '/api/postalcode-to-latlng',
      {
        postalCode,
      },
      (json: any) => {
        if (json.error) {
          console.error(json)
          showError('Ingevulde postcode is mogelijk onjuist')

          return
        }
        onConverted(json.results[0].geometry.location)
      },
      'postalcodetolatlng',
    )
  }

  const calculateDistance = (location: LocationData): void => {
    postData(
      '/api/calculate-distance',
      {
        latlng: `${location.lat},${location.lng}`,
      },
      (json: any) => {
        if (json.error) {
          showError('Afstand kon niet worden berekend')

          return
        }

        try {
          const distance = json.rows[0].elements[0].distance.value

          onDistanceCalculated(distance)
        } catch (e) {
          console.error(e)
          showError('Afstand kon niet worden berekend')
        }
      },
      'calculatedistance',
    )
  }

  const postData = (
    url: string,
    data: { [key: string]: any },
    onSuccess: (json: { [key: string]: any }) => void,
    recaptchaAction: string,
  ): void => {
    const googleRecaptcha = (window as any).grecaptcha

    if (!googleRecaptcha) {
      showError('ReCaptcha kon niet worden geladen. Herlaad de pagina.')

      return
    }

    googleRecaptcha.ready(() => {
      googleRecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY, {
          action: recaptchaAction,
        })
        .then((token: string) => {
          fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...data,
              token,
            }),
          })
            .then((stream: any) => stream.json())
            .then(onSuccess)
            .catch((e: any) => {
              console.error(e)
              showError('Er ging iets mis')
            })
        })
    })
  }

  const showError = (message: string, force: boolean = false): void => {
    if (force) {
      setError(message)
    } else {
      setTimeout(() => {
        setLoading(false)
        setError(message)
      }, LOADING_DELAY)
    }
  }

  const onCalculateAgain = (e: any) => {
    e.preventDefault()
    setPrice(0)
    setError('')
  }

  return (
    <div className={styles.costs_calculator}>
      {!!price && (
        <>
          <div className={classNames(styles.message_box, styles.price)}>Jouw leskosten worden €{price} per les</div>
          <Button
            filled={true}
            href="#"
            onClickHandler={(e) => {
              onCalculateAgain(e)
            }}
          >
            Opnieuw berekenen
          </Button>
        </>
      )}

      {!price && (
        <>
          <h3>Leskosten berekenen</h3>

          <div>
            <label>Je postcode</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value)
              }}
              id="user_postalcode"
              name="userpostalcode"
              max="7"
              placeholder="1234 AB"
            />
          </div>

          <div>
            <label>Gewenste lestijd</label>
            <select
              id="user_time"
              value={lessonTime}
              onChange={(e) => {
                setLessonTime(e.target.value)
              }}
            >
              <option value="30">30 minuten</option>
              <option value="45">45 minuten</option>
              <option value="60">60 minuten</option>
            </select>

            <img src="/images/icon/icon_chevron_down.svg" width="18" height="18" loading="eager" />
          </div>

          <div>
            <label>
              Hoeveel personen krijgen <br /> tegelijkertijd les?
            </label>
            <select
              id="user_persons"
              value={persons}
              onChange={(e) => {
                setPersons(e.target.value)
              }}
            >
              <option value="1">Één persoon</option>
              <option value="2">Twee personen</option>
              <option value="3">Drie personen</option>
            </select>

            <img src="/images/icon/icon_chevron_down.svg" width="18" height="18" loading="eager" />
          </div>

          <div>
            <Button
              disabled={loading}
              filled={true}
              href="#"
              onClickHandler={(e) => {
                onCalculationStarted(e)
              }}
            >
              Bereken leskosten
            </Button>

            {loading && (
              <div className={styles.spinner}>
                <SyncLoader size={16} color={'#1193f5'} loading={loading} />
              </div>
            )}
          </div>
        </>
      )}

      {error && <div className={styles.errors}>{error}</div>}
    </div>
  )
}

export const CostsCalculator = CostsCalculatorComponent
