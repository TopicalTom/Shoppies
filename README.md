
<br />
<br />

<a href="https://ibb.co/FHZ8VPs"><img src="https://i.ibb.co/vXyLYts/The-Shoppies.png" alt="The-Shoppies" border="0"></a>

This project can be viewed here [Shoppies Website](https://shoppies.netlify.app/).

<br />

### `UX Development Challenge`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

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
