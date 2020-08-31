
<br />
<br />

<a href="https://ibb.co/FHZ8VPs"><img src="https://i.ibb.co/vXyLYts/The-Shoppies.png" alt="The-Shoppies" border="0"></a>

This project can be viewed here [Shoppies Website](https://shoppies.netlify.app/).

<br />

### `UX Development Challenge`

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

> Design Goals

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

> Technical Requirements

- Search results should come from OMDB's API
- Each search result should list at least its title, year of release and a button to nominate that film
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list
- If a search result has already been nominated, disable its nominate button
- Display a banner when the user has 5 nominations

> Bonus Feature

- Save nomination lists if the user leaves the page


<br />
<br />

# Project Structure (Context)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />
<br />

# Search OMDB and display the results (movies only)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### OMDB API Calls

```javascript
    useLayoutEffect(() => {
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchQuery, storedNoms]);
```

<br />
<br />

# Add a movie from the search results to our nomination list

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Adding Movie to Local Storage

```javascript
    const addToLocalStorage = () => {

        let currentNominations = JSON.parse(localStorage.getItem('nominations')) || [];

        let newNomination = { "movieNomination": id }
        currentNominations.push(newNomination);

        localStorage.setItem("nominations", JSON.stringify(currentNominations));
        setAlreadyNominated(true);
    }
```

<br />
<br />

# View the list of films already nominated

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Displaying Nominated Movies

```javascript
    useLayoutEffect(() => {
        if(storedNoms !== null) {
            {storedNoms
                .map((item) => {
                    axios.get(`${API_URL}i=${item.movieNomination}&apikey=${API_KEY}`)
                        .then(response => {
                            const nominee = ({
                                title: response.data.Title,
                                year: response.data.Year,
                                id: response.data.imdbID
                            })
                            nominationListing.push(nominee)
                            setNominationListing(nominationListing)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    })
            }
        }
    }, [nominationListing]);
```

<br />

### Checking for already Nominated Movies

```javascript
    useLayoutEffect(() => {

        const stored = JSON.parse(localStorage.getItem("nominations"));
        const match = stored.filter(item => item.movieNomination == id);

        if(match && match.length !== 0) {

            let nominated = match[0].movieNomination;

            (id == nominated 
                ? setAlreadyNominated(true)
                : setAlreadyNominated(false)
            )
        }
    });
```

<br />
<br />

# Remove a nominee from the nomination list

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Selecting Movies To Remove

```javascript
    let removeFromLocalStorage = function (name, value) {

        let stored = JSON.parse(localStorage.getItem("nominations"));
        stored = stored.filter(item => item.movieNomination !== id);

        localStorage.setItem("nominations", [JSON.stringify(stored)])
    }
```

<br />
<br />

# Display a banner when the user has 5 nominations

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Creating a Notification Banner

```javascript
    let removeFromLocalStorage = function (name, value) {

        let stored = JSON.parse(localStorage.getItem("nominations"));
        stored = stored.filter(item => item.movieNomination !== id);

        localStorage.setItem("nominations", [JSON.stringify(stored)])
    }
```

<br />
<br />

# Reflection

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
