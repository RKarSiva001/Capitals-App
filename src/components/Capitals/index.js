import {Component} from 'react'
import './index.css'

const initialCountryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    countryAndCapitalsList: initialCountryAndCapitalsList,
    activeId: initialCountryAndCapitalsList[0].id,
  }

  onClickItem = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  getFilteredCountry = () => {
    const {countryAndCapitalsList, activeId} = this.state
    const filteredCountry = countryAndCapitalsList.filter(
      eachCountryDetails => eachCountryDetails.id === activeId,
    )

    return filteredCountry
  }

  render() {
    const {activeId} = this.state
    const filteredCountry = this.getFilteredCountry()

    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <select value={activeId} onChange={this.onClickItem}>
            {initialCountryAndCapitalsList.map(each => (
              <option value={each.id}>{each.capitalDisplayText}</option>
            ))}
          </select>
          <span> is capital of which country?</span>
          {filteredCountry.map(each => (
            <li key={each.id}>{each.country}</li>
          ))}
        </div>
      </div>
    )
  }
}

export default Capitals
