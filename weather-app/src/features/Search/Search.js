import Select, { components } from 'react-select'
import { useState, useRef } from 'react'
import { locationAPI } from '../App/api'
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { setWeatherDataTC, setLocationDataTC } from '../../reducers/meteo-reducer';


const Search2 = () => {

  const weatherRequest = (lat, lon) => {
    dispatch(setWeatherDataTC(lat, lon))
  }

  const handleSearchDebounced = useRef(
    debounce((searchText) => handleSearch(searchText), 300)
  ).current

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim().length === 0) {
      setCountries([])
      return
    }

    setIsLoading(true)

    let countries = []
    try {
      countries = await locationAPI.getLocation(searchQuery)
    } catch (e) {
      console.error(e)
    } finally {
      setCountries(countries.data)
      setIsLoading(false)
    }
  }

  const noOptionsMessage = (obj) => {
    if (obj.inputValue.trim().length === 0) {
      return null
    }
    return 'No matching countries'
  }

  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('')
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (inputText, meta) => {
    if (meta.action !== 'input-blur' && meta.action !== 'menu-close') {
      setInputText(inputText)
      handleSearchDebounced(inputText)


    }
  }

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <SearchIcon />
        </components.DropdownIndicator>
      )
    )
  }

  const SearchIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="38" cy="40" r="20.5" stroke="currentColor" strokeWidth="7" />
      <path
        d="M76.0872 84.4699C78.056 86.4061 81.2217 86.3797 83.158 84.4109C85.0943 82.442 85.0679 79.2763 83.099 77.34L76.0872 84.4699ZM50.4199 59.2273L76.0872 84.4699L83.099 77.34L57.4317 52.0974L50.4199 59.2273Z"
        fill="currentColor"
      />
    </svg>
  )

  const customStyles = {
    control: (base) => ({
      ...base,
      flexDirection: 'row-reverse',
    }),
    clearIndicator: (base) => ({
      ...base,
      position: 'absolute',
      right: 0,
    }),
    valueContainer: (base) => ({
      ...base,
      paddingRight: '2.3rem',
    }),
  }

  const formatOptionLabel = (option) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            flexGrow: '1',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {option.value}
        </div>
      </div>
    )
  }
  // const debouncedSearch = debounce(handleSearch, 500);

  return (
    <div>
      <Select
        placeholder="Search for a city"
        options={countries && countries.map(item => ({ value: item.display_name, label: item.display_name }))}
        onChange={(selectedOption) => {
          if (selectedOption && countries) {
            const selectedCountry = countries.find(country => country.display_name === selectedOption.value);
            if (selectedCountry) {
              const { lat, lon } = selectedCountry;
              weatherRequest(lat, lon);
            }
            dispatch(setLocationDataTC(selectedOption.value))
          }
        }
        }
        inputValue={inputText}
        onInputChange={handleInputChange}
        isLoading={isLoading}
        formatOptionLabel={formatOptionLabel}
        filterOption={null}
        noOptionsMessage={noOptionsMessage}
        styles={customStyles}
        isClearable={true}
        isSearchable={true}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
      />
    </div>
  )
}

export default Search2;