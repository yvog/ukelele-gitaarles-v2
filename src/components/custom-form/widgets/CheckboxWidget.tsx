import ReactMarkdown from 'react-markdown'
import { schemaRequiresTrueValue } from './schemaRequiresTrueValue'

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus = false,
    onBlur,
    onFocus,
    onChange,
    DescriptionField,
  } = props

  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema)

  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      {schema.description && <DescriptionField description={schema.description} />}
      <label>
        <input
          type="checkbox"
          id={id}
          checked={typeof value === 'undefined' ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={(event) => onChange(event.target.checked)}
          onBlur={onBlur && ((event) => onBlur(id, event.target.checked))}
          onFocus={onFocus && ((event) => onFocus(id, event.target.checked))}
        />
        <ReactMarkdown linkTarget="_blank" renderers={{ paragraph: 'span' }}>
          {label}
        </ReactMarkdown>
      </label>
    </div>
  )
}

export default CheckboxWidget
